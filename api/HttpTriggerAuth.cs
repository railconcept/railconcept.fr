using System;
using System.IO;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Azure.WebJobs;
using Microsoft.Azure.WebJobs.Extensions.Http;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Logging;
using Newtonsoft.Json;
using Flurl;
using System.Security.Cryptography;


namespace RailConcept.Api
{
    public static class HttpTriggerAuth
    {
        private const string alphanumericCharacters =
            "ABCDEFGHIJKLMNOPQRSTUVWXYZ" +
            "abcdefghijklmnopqrstuvwxyz" +
            "0123456789";


        [FunctionName("auth")]
        public static IActionResult Run(
            [HttpTrigger(AuthorizationLevel.Anonymous, "get", Route = null)] HttpRequest req,
            ILogger log)
        {
            static string getRandomString(int length)
            {
                var bytes = new byte[length * 8];
                var result = new char[length];
                using (var cryptoProvider = new RNGCryptoServiceProvider())
                {
                    cryptoProvider.GetBytes(bytes);
                }
                for (int i = 0; i < length; i++)
                {
                    var value = BitConverter.ToUInt64(bytes, i * 8);
                    result[i] = alphanumericCharacters[(int)(value % (ulong)alphanumericCharacters.Length)];
                }
                return new string(result);
            }

            // See https://docs.github.com/en/developers/apps/authorizing-oauth-apps#web-application-flow
            // Todo: every static string excepted fallback to default MUST be retrieved via config instead

            // Mandatories parameters
            var clientId = "todo";
            var redirectUrl = "https://todo.fr/api/callback";

            // Fallback on convention or defaults parameters
            // Here we defaults to github's defaults since it's the main use case scenario
            var authorizePath = string.IsNullOrWhiteSpace("") ? "/login/oauth/authorize" : "todo";
            var authorizeHost = string.IsNullOrWhiteSpace("") ? "https://github.com" : "todo";
            var clientIdKey = string.IsNullOrWhiteSpace("") ? "client_id" : "todo";
            var scope = string.IsNullOrWhiteSpace("") ? "repo,user" : "todo";

            // Has to be securely randomly generated for good CSRF protection
            var state = getRandomString(32);
            // IMPORTANT todo: State should be stored in some way to be retrieved later in the callback function,
            // which is not the case because "Azure functions are designed to be stateless" so we need to find a way 
            // In reality, this is a security matter and storing an httponly and secure cookie will solve the matter 
            // Also consider encrypting the value when passed in the cookie
            
            var authorizationUrl = authorizeHost
                .AppendPathSegment(authorizePath)
                .SetQueryParams(new
                {
                    redirect_uri = redirectUrl,
                    // Mandatory by https://github.com/auth0/docs/blob/master/articles/api-auth/tutorials/authorization-code-grant.md 
                    // but not explicitely present in github specs, let's keep it since it doesn't break anything
                    response_type = "code",
                    scope = scope,
                    state = state
                });

            // For github, clientIdKey is client_id but some other provider may require use another key instead
            authorizationUrl.QueryParams.Add(clientIdKey, clientId);
            
            log.LogInformation($"Redirecting to {authorizationUrl.ToString()}");
            return new RedirectResult(authorizationUrl);
        }
    }
}
