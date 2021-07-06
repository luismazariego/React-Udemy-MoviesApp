using System;
using System.IO;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;

namespace MoviesAPI.Utils
{
    public class LocalFileStorage : IFileStorage
    {
        private readonly IHttpContextAccessor _httpContext;
        private readonly IWebHostEnvironment _environment;
        public LocalFileStorage(IWebHostEnvironment environment, IHttpContextAccessor httpContext)
        {
            _environment = environment;
            _httpContext = httpContext;
        }

        public Task DeleteFile(string route, string container)
        {
            if (string.IsNullOrEmpty(route))
            {
                return Task.CompletedTask;
            }

            var fileName = Path.GetFileName(route);
            var fileDirectory = Path.Combine(_environment.WebRootPath, container, fileName);
            
            if(File.Exists(fileDirectory))
            {
                File.Delete(fileDirectory);
            }

            return Task.CompletedTask;
        }

        public async Task<string> EditFile(string container, IFormFile file, string route)
        {
            await DeleteFile(route, container);
            return await SaveFile(container, file);
        }

        public async Task<string> SaveFile(string container, IFormFile file)
        {
            var extension = Path.GetExtension(file.FileName);
            var fileName = $"{Guid.NewGuid()}{extension}";
            string folder = Path.Combine(_environment.WebRootPath, container);

            if(!Directory.Exists(folder))
            {
                Directory.CreateDirectory(folder);
            }

            string route = Path.Combine(folder, fileName);

            using var memoryStream = new MemoryStream();
            await file.CopyToAsync(memoryStream);
            var content = memoryStream.ToArray();
            await File.WriteAllBytesAsync(route, content);

            var currentUrl = $"{_httpContext.HttpContext.Request.Scheme}://{_httpContext.HttpContext.Request.Host}";
            var dbRoute = Path.Combine(currentUrl, container, fileName).Replace("\\", @"/");

            return dbRoute;

        }
    }
}