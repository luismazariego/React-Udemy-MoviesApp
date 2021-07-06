using System;
using System.ComponentModel.DataAnnotations;

namespace MoviesAPI.Entities
{
    public class Actor
    {
        public int Id { get; set; }
        [Required]
        [StringLength(maximumLength: 200)]
        public string Name { get; set; }
        public string Biography { get; set; }
        public DateTime DateOfBirth { get; set; }
        public string Photo { get; set; }
    }
}