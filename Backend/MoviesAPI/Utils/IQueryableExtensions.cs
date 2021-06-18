using System.Linq;
using System.Threading.Tasks;
using MoviesAPI.DTOs;

namespace MoviesAPI.Utils
{
    public static class IQueryableExtensions
    {
        public static IQueryable<T> Pagination<T>(this IQueryable<T> list, PaginationDTO pagination)
        {
            return list.Skip((pagination.Page - 1) * pagination.RecordsPerPage).Take(pagination.RecordsPerPage);
        }
    }
}