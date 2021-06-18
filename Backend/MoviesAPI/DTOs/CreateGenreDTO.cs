using System.ComponentModel.DataAnnotations;
using MoviesAPI.Validations;

namespace MoviesAPI.DTOs
{
    public class CreateGenreDTO
    {
        [Required]
        [StringLength(maximumLength: 50)]
        [CapitalFirstCharacter]
        public string Name { get; set; }
    }
}