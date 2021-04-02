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



namespace RailConcept.Api
{

    public static class HttpTriggerCallback
    {
        [FunctionName("callback")]
        public static async Task<IActionResult> Run(
            [HttpTrigger(AuthorizationLevel.Anonymous, "get", Route = null)] HttpRequest req,
            ILogger log)
        {
            // Github state
            var state = req.Query["state"];
            // Our previous state
            var originalState = req.Cookies["state"];
            // Todo : check if both state match, if not it means either a bug or an attack so cancel this


            // See https://docs.github.com/en/developers/apps/authorizing-oauth-apps#web-application-flow
            // And https://github.com/auth0/docs/blob/master/articles/api-auth/tutorials/authorization-code-grant.md

            // Mandatory parameters
            var clientId = "todo";
            var clienSecret = "todo";
            var code = req.Query["code"];
            // Currently the only provider we support
            var provider = "github";
            // Fallback on convention or defaults parameters
            // Here we defaults to github's defaults since it's the main use case scenario
            var tokenHost = string.IsNullOrWhiteSpace("") ? "https://github.com/" : "todo";
            var tokenPath = string.IsNullOrWhiteSpace("") ? "/login/oauth/access_token" : "todo";
            // Probably only used in front end renewal scenarios which isn't the case here
            var redirectUrl = string.IsNullOrWhiteSpace("") ? "https://todo.fr/api/callback" : "todo";
            var originPattern = "todo.fr";
            var tokenRequestBody = new
            {
                client_id = clientId,
                client_secret = clienSecret,
                code = code,
                redirect_uri = redirectUrl,
                state = state,
            };
            var result = await tokenHost.AppendPathSegment(tokenPath).PostJsonAsync(tokenRequestBody);
            // This is what is used by netlify to display a login failure or not
            var messageResult = result.ResponseMessage.IsSuccessStatusCode ? "success" : "failure";

            // Todo: check post result code
            var resultContent = await result.GetJsonAsync();
            var token = resultContent.access_token;
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
                            console.log(""recieveMessage %o"", e)
                            if (!e.origin.match({JsonConvert.ToString(originPattern)})) {{
                                console.log('Invalid origin: %s', e.origin);
                                return;
                            }}
                            // send message to main window with da app
                            window.opener.postMessage(
                                'authorization:{provider}:{messageResult}:{JsonConvert.ToString(tokenWithProvider)}',
                                e.origin
                            )
                        }}
                        window.addEventListener(""message"", recieveMessage, false)
                        // Start handshare with parent
                        console.log(""Sending message: %o"", ""{provider}"")
                        window.opener.postMessage(""authorizing:{provider}"", ""*"")
                    }})()
                </script>";
            return new OkObjectResult(script);
        }
    }
}
