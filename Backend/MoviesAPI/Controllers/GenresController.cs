using System;
using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using MoviesAPI.Entities;

namespace MoviesAPI.Controllers
{
    [Route("api/genres")]
    [ApiController]
    public class GenresController : ControllerBase
    {
        private readonly ILogger<GenresController> logger;

        public GenresController(ILogger<GenresController> logger)
        {
            this.logger = logger;
        }

        [HttpGet]
        public List<Genre> Get()
        {
            return new List<Genre>{
                new Genre{Id=1,Name="Comedy"},
                new Genre{Id=2,Name="Drama"}
            };
        }

        [HttpGet("{id:int}")]
        public ActionResult<Genre> Get(int id)
        {
            throw new NotImplementedException();
        }

        [HttpPost]
        public ActionResult Post([FromBody] Genre genre)
        {
            throw new NotImplementedException();
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