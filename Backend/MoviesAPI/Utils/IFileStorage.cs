using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;

namespace MoviesAPI.Utils
{
    public interface IFileStorage
    {
        Task DeleteFile(string route, string container);
        Task<string> EditFile(string container, IFormFile file, string route);
        Task<string> SaveFile(string container, IFormFile file);
    }
}