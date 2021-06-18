using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;

namespace MoviesAPI.ApiBehavior
{
    public static class BadRequestBehavior
    {
        public static void Parser(ApiBehaviorOptions options)
        {
            options.InvalidModelStateResponseFactory = actionContext =>
            {
                var response = new List<string>();
                foreach (var key in actionContext.ModelState.Keys)
                {
                    foreach (var error in actionContext.ModelState[key].Errors)
                    {
                        response.Add($"{key}: {error.ErrorMessage}");
                    }
                }

                return new BadRequestObjectResult(response);
            };
        }
    }
}