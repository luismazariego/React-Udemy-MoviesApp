using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Filters;
using Microsoft.AspNetCore.Mvc.Infrastructure;

namespace MoviesAPI.Filters
{
    public class BadRequestParser : IActionFilter
    {
        public void OnActionExecuted(ActionExecutedContext context)
        {
            var castResult = context.Result as IStatusCodeActionResult;
            
            if(castResult is null) return;

            var status = castResult.StatusCode;
            if(status == 400)
            {
                var response = new List<string>();
                var currentResult = context.Result as BadRequestObjectResult;
                if(currentResult.Value is string)
                {
                    response.Add(currentResult.Value.ToString());
                }
                else
                {
                    foreach (var key in context.ModelState.Keys)
                    {
                        foreach (var error in context.ModelState[key].Errors)
                        {
                            response.Add($"{key}: {error.ErrorMessage}");
                        }
                    }
                }
                context.Result = new BadRequestObjectResult(response);
            }
        }

        public void OnActionExecuting(ActionExecutingContext context)
        {

        }
    }
}