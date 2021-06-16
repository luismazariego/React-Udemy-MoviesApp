using System.Collections.Generic;
using System.Linq;
using Microsoft.Extensions.Logging;
using MoviesAPI.Entities;

namespace MoviesAPI.Repositories
{
    public class InMemoryRepository : IRepository
    {
        private List<Genre> _genres;

        public InMemoryRepository(ILogger<InMemoryRepository> logger)
        {
            _genres = new List<Genre>{
                new Genre{Id=1,Name="Comedy"},
                new Genre{Id=2,Name="Drama"}
            };
        }

        public List<Genre> GetAllGenres()
        {
            return _genres;
        }

        public Genre GetGenreById(int id)
        {
            return _genres.FirstOrDefault(x => x.Id == id);
        }
    }
}