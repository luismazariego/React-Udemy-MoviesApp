using System;
using System.Collections.Generic;
using System.Data.Common;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using MoviesAPI.Entities;
using MoviesAPI.Filters;
using MoviesAPI.Repositories;

namespace MoviesAPI.Controllers
{
    [Route("api/genres")]
    [ApiController]
    public class GenresController : ControllerBase
    {
        private readonly IRepository _repository;
        private readonly ILogger<GenresController> logger;

        public GenresController(IRepository repository, ILogger<GenresController> logger)
        {
            _repository = repository;
            this.logger = logger;
        }

        [HttpGet]
        // [ResponseCache(Duration = 60)]
        // [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
        [ServiceFilter(typeof(MyActionFilter))]
        public List<Genre> Get()
        {
            logger.LogInformation("Lets get all genres.");
            return _repository.GetAllGenres();
        }

        [HttpGet("{id:int}")]
        public ActionResult<Genre> Get(int id)
        {
            logger.LogDebug($"Lets get a genre by its id.{id}");

            var genre = _repository.GetGenreById(id);

            if (genre is null)
            {
                //throw new ApplicationException($"Genre with id: {id} did not found");
                logger.LogWarning($"Genre with id: {id} did not found");
                return BadRequest($"Genre with id: {id} did not found");
            }

            return Ok(genre);
        }

        [HttpPost]
        public ActionResult Post([FromBody] Genre genre)
        {
            // if(!ModelState.IsValid)
            // {
            //     return BadRequest(ModelState);
            // }
            genre.Id = 1;//just for testing purposes
            return CreatedAtAction(nameof(Get), new { id = genre.Id }, genre.Id);
        }

        [HttpDelete]
        public void Delete()
        {

        }

        [HttpPut]
        public ActionResult Put()
        {
            // if (!ModelState.IsValid)
            // {
            //     return BadRequest(ModelState);
            // }
            return NoContent();
        }
    }
}