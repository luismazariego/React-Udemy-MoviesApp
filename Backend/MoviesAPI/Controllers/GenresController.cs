using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;
using MoviesAPI.DTOs;
using MoviesAPI.Entities;
using MoviesAPI.Utils;

namespace MoviesAPI.Controllers
{
    [Route("api/genres")]
    [ApiController]
    public class GenresController : ControllerBase
    {
        private readonly ILogger<GenresController> _logger;
        private readonly ApplicationDbContext _context;
        private readonly IMapper _mapper;

        public GenresController(ILogger<GenresController> logger, ApplicationDbContext context, IMapper mapper)
        {
            _logger = logger;
            _context = context;
            _mapper = mapper;
        }

        [HttpGet]
        public async Task<ActionResult<List<GenreDTO>>> Get([FromQuery] PaginationDTO pagination)
        {
            var genresQueryableList = _context.Genres.AsQueryable();
            await HttpContext.SetMetadataHeader(genresQueryableList).ConfigureAwait(false);
            
            IEnumerable<Genre> genresList = await genresQueryableList
                .OrderBy(x => x.Name)
                .Pagination(pagination)
                .ToListAsync();

            return _mapper.Map<List<GenreDTO>>(genresList);
        }

        [HttpGet("{id:int}")]
        public ActionResult<GenreDTO> Get(int id)
        {
            throw new NotImplementedException();
        }

        [HttpPost]
        public async Task<ActionResult> Post([FromBody] CreateGenreDTO genre)
        {
            var genreToSave = _mapper.Map<Genre>(genre);
            _context.Add(genreToSave);
            await _context.SaveChangesAsync();
            return NoContent();
        }

        [HttpDelete]
        public void Delete()
        {
            throw new NotImplementedException();
        }

        [HttpPut]
        public ActionResult Put()
        {
            throw new NotImplementedException();
        }
    }
}