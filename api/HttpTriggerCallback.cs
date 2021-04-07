using System;
using System.IO;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Azure.WebJobs;
using Microsoft.Azure.WebJobs.Extensions.Http;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Logging;
using Newtonsoft.Json;
using System.Text;
using Flurl;
using Flurl.Http;
using Microsoft.Extensions.Configuration;
using System.Linq;

namespace RailConcept.Api
{
    public static class HttpTriggerCallback
    {
        private class GithubAccessTokenResponse
        {
            [JsonProperty("error")]
            public string Error { get; set; }

            [JsonProperty("error_description")]
            public string ErrorDescription { get; set; }

            [JsonProperty("error_uri")]
            public string ErrorUri { get; set; }

            [JsonProperty("access_token")]
            public string AccessToken { get; set; }

            [JsonProperty("scope")]
            public string Scope { get; set; }

            [JsonProperty("token_type")]
            public string TokenType { get; set; }
        }

        // This is proxied from api/callback to api/actual_callback because of https://github.com/Azure/static-web-apps/issues/165
        [FunctionName("actual_callback")]
        public static async Task<IActionResult> Run(
            [HttpTrigger(AuthorizationLevel.Anonymous, "get", Route = null)] HttpRequest req,
            ILogger log)
        {
            // Github state and code
            var state = req.Query["state"];
            // The underscore is here because azure bugs out really bad when code is given in query params
            // see https://github.com/Azure/static-web-apps/issues/165
            var code = req.Query["_code"].FirstOrDefault();
            // Our previous state
            var originalState = req.Cookies["state"];
            // Todo : check if both state match, if not it means either a bug or an attack so cancel this
            if (string.IsNullOrWhiteSpace(state) || string.IsNullOrWhiteSpace(code))
            {
                return new BadRequestObjectResult("Missing state or code query parameter");
            }

            // See https://docs.github.com/en/developers/apps/authorizing-oauth-apps#web-application-flow
            // And https://github.com/auth0/docs/blob/master/articles/api-auth/tutorials/authorization-code-grant.md

            // Mandatory parameters
            var clientId = Environment.GetEnvironmentVariable("OAuthProviderOptions_ClientId");
            var clientSecret = Environment.GetEnvironmentVariable("OAuthProviderOptions_ClientSecret");
            // Probably only used in front end renewal scenarios which isn't the case here
            var redirectUrl = Environment.GetEnvironmentVariable("OAuthProviderOptions_RedirectUri");
            var originPattern = Environment.GetEnvironmentVariable("OAuthProviderOptions_OriginPattern");

            // Fallback on convention or defaults parameters
            // Here we defaults to github's defaults since it's the main use case scenario
            var tokenHost = string.IsNullOrWhiteSpace(Environment.GetEnvironmentVariable("OAuthProviderOptions_TokenHost"))
                ? "https://github.com/"
                : Environment.GetEnvironmentVariable("OAuthProviderOptions_TokenHost");

            var tokenPath = string.IsNullOrWhiteSpace(Environment.GetEnvironmentVariable("OAuthProviderOptions_TokenPath"))
                ? "/login/oauth/access_token"
                : Environment.GetEnvironmentVariable("OAuthProviderOptions_TokenPath");

            var provider = string.IsNullOrWhiteSpace(Environment.GetEnvironmentVariable("OAuthProviderOptions_Provider"))
                ? "https://github.com/"
                : Environment.GetEnvironmentVariable("OAuthProviderOptions_Provider");


            var tokenRequestBody = new
            {
                client_id = clientId,
                client_secret = clientSecret,
                code = code,
                redirect_uri = redirectUrl,
                state = state,
            };
            var result = await tokenHost.AppendPathSegment(tokenPath)
                .WithHeader("Accept", "application/json")
                .PostJsonAsync(tokenRequestBody);

            if (!result.ResponseMessage.IsSuccessStatusCode)
            {
                return new BadRequestObjectResult($"Request for access token failed : {result.ResponseMessage.StatusCode} {result.ResponseMessage.ReasonPhrase}");
            }

            // This is what is used by netlify to display a login failure or not, here it's always a success because we check beforehand, which may break netlifly error checking 
            var messageResult = result.ResponseMessage.IsSuccessStatusCode ? "success" : "failure";
            var resultContent = await result.GetJsonAsync<GithubAccessTokenResponse>();
            if (!string.IsNullOrWhiteSpace(resultContent.Error))
            {
                return new BadRequestObjectResult($"Error when retrieving access token: {resultContent.AccessToken}\n{resultContent.ErrorDescription}\n{resultContent.ErrorUri}");
            }
            if (string.IsNullOrWhiteSpace(resultContent?.AccessToken))
            {
                return new BadRequestObjectResult("No access token received");
            }
            var token = resultContent.AccessToken;
            // This is what netlify will get to consume the github API 
            var tokenWithProvider = new
            {
                token = token,
                provider = provider
            };

            // Ugly, todo: find a solution for templating html response in Azure functions
            var script = $@"
                <script>
                    (function() {{
                        function recieveMessage(e) {{
                            console.log(""recieveMessage %o"", e);
                            if (!e.origin.match(""{originPattern}"")) {{
                                console.log('Invalid origin: %s', e.origin);
                                return;
                            }}
                            // send message to main window with da app
                            window.opener.postMessage(
                                'authorization:{provider}:{messageResult}:{JsonConvert.SerializeObject(tokenWithProvider)}',
                                e.origin
                            );
                        }}
                        window.addEventListener(""message"", recieveMessage, false);
                        // Start handshare with parent
                        console.log(""Sending message: %o"", ""{provider}"");
                        window.opener.postMessage(""authorizing:{provider}"", ""*"");
                    }})();
                </script>";
            return new OkObjectResult(script);
        }
    }
}
