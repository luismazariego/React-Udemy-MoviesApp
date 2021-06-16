using Microsoft.AspNetCore.Mvc.Filters;
using Microsoft.Extensions.Logging;

namespace MoviesAPI.Filters
{
    public class MyActionFilter : IActionFilter
    {
        private readonly ILogger<MyActionFilter> logger;

        public MyActionFilter(ILogger<MyActionFilter> logger)
        {
            this.logger = logger;
        }
        public void OnActionExecuting(ActionExecutingContext context)
        {
            logger.LogInformation("Before executing action");
        }

        public void OnActionExecuted(ActionExecutedContext context)
        {
            logger.LogInformation("After executing action");
        }
    }
}