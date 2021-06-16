using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.HttpsPolicy;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using Microsoft.OpenApi.Models;
using MoviesAPI.Filters;
using MoviesAPI.Repositories;

namespace MoviesAPI
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme).AddJwtBearer();
            services.AddResponseCaching();
            services.AddTransient<IRepository, InMemoryRepository>();
            services.AddTransient<MyActionFilter>();
            services.AddControllers(options=>
            {
                options.Filters.Add(typeof(ExceptionFilter));
            });
            services.AddSwaggerGen(c =>
            {
                c.SwaggerDoc("v1", new OpenApiInfo { Title = "MoviesAPI", Version = "v1" });
            });
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env, ILogger<Startup> logger)
        {
            //do a logic and then continue with the pipeline
            app.Use(async (context, next) =>
            {
                using (var stream = new MemoryStream())
                {
                    var originalResponse = context.Response.Body;
                    context.Response.Body = stream;

                    await next.Invoke();

                    stream.Seek(0, SeekOrigin.Begin);
                    string response = new StreamReader(stream).ReadToEnd();
                    stream.Seek(0, SeekOrigin.Begin);

                    await stream.CopyToAsync(originalResponse);
                    context.Response.Body = originalResponse;

                    logger.LogInformation(response);
                }
            });

            //Terminate the pipeline 
            app.Map("/map1", app =>
            {
                app.Run(async context =>
                {
                    await context.Response.WriteAsync("catch the pipeline");
                });
            });

            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
                app.UseSwagger();
                app.UseSwaggerUI(c => c.SwaggerEndpoint("/swagger/v1/swagger.json", "MoviesAPI v1"));
            }

            app.UseHttpsRedirection();

            app.UseRouting();

            app.UseResponseCaching();

            app.UseAuthentication();

            app.UseAuthorization();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
            });
        }
    }
}
