using System.ComponentModel.DataAnnotations;
using MoviesAPI.Validations;

namespace MoviesAPI.Entities
{
    public class Genre
    {
        public int Id { get; set; }

        [Required]
        [StringLength(maximumLength: 50)]
        [CapitalFirstCharacter]
        public string Name { get; set; }
    }
}