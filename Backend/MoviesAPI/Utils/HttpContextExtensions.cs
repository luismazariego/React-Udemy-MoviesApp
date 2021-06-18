using System;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.EntityFrameworkCore;

namespace MoviesAPI.Utils
{
    public static class HttpContextExtensions
    {
        public async static Task SetMetadataHeader<T>(this HttpContext httpContext, IQueryable<T> list)
        {
            if(httpContext is null) 
            {
                throw new ArgumentNullException(nameof(httpContext));
            }

            double quantity = await list.CountAsync();
            httpContext.Response.Headers.Add("records", quantity.ToString());
        }
    }
}