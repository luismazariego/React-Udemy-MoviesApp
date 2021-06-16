using System.Collections.Generic;
using MoviesAPI.Entities;

namespace MoviesAPI.Repositories
{
    public interface IRepository
    {
        List<Genre> GetAllGenres();
        Genre GetGenreById(int id);
    }
}