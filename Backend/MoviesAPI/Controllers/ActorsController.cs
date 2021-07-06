using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using MoviesAPI.DTOs;
using MoviesAPI.Entities;
using MoviesAPI.Utils;

namespace MoviesAPI.Controllers
{
    [Route("api/actors")]
    [ApiController]
    public class ActorsController : ControllerBase
    {
        private readonly ApplicationDbContext _context;
        private readonly IMapper _mapper;
        private readonly IFileStorage _storage;
        private readonly string _container = "actors";

        public ActorsController(ApplicationDbContext context, IMapper mapper, IFileStorage storage)
        {
            _context = context;
            _mapper = mapper;
            _storage = storage;
        }

        [HttpGet]
        public async Task<ActionResult<List<ActorDTO>>> Get([FromQuery] PaginationDTO pagination)
        {
            var queryable = _context.Actors.AsQueryable();
            await HttpContext.SetMetadataHeader(queryable);
            var actors = await queryable.OrderBy(x => x.Name).Pagination(pagination).ToListAsync();
            return _mapper.Map<List<ActorDTO>>(actors);
        }

        [HttpGet("{id:int}")]
        public async Task<ActionResult<ActorDTO>> Get(int id)
        {
            var actor = await _context.Actors.FirstOrDefaultAsync(x => x.Id == id);
            return actor is null ? NotFound() : _mapper.Map<ActorDTO>(actor);
        }

        [HttpPost]
        public async Task<ActionResult> Post([FromForm] CreateActorDTO createDto)
        {
            var actor = _mapper.Map<Actor>(createDto);
            if (createDto.Photo is not null)
            {
                //save file
                actor.Photo = await _storage.SaveFile(_container, createDto.Photo);
            }
            _context.Add(actor);
            await _context.SaveChangesAsync();
            return NoContent();
        }

        [HttpPut("{id:int}")]
        public async Task<ActionResult> Put(int id, [FromForm] CreateActorDTO actorToUpdate)
        {
            Actor actor = await _context.Actors.FirstOrDefaultAsync(x => x.Id == id);

            if (actor is null)
            {
                return NotFound();
            }

            actor = _mapper.Map(actorToUpdate, actor);

            if (actorToUpdate.Photo is not null)
            {
                actor.Photo = await _storage.EditFile(_container, actorToUpdate.Photo, actor.Photo);
            }
            
            await _context.SaveChangesAsync();

            return NoContent();
        }

        [HttpDelete("{id:int}")]
        public async Task<ActionResult> Delete(int id)
        {
            var actor = await _context.Actors.FirstOrDefaultAsync(x => x.Id == id);
            if (actor is null)
            {
                return NotFound();
            }
            _context.Remove(actor);
            await _context.SaveChangesAsync();
            await _storage.DeleteFile(actor.Photo, _container);
            return NoContent();
        }
    }
}