using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using MoviesAPI.Validations;

namespace MoviesAPI.Entities
{
    public class Genre : IValidatableObject
    {
        public int Id { get; set; }

        [Required]
        [StringLength(maximumLength: 20)]
        //[CapitalFirstCharacter]//Attribute Validation
        public string Name { get; set; }

        [Range(18, 110)]
        public int Age { get; set; }

        [CreditCard]
        public string CreditCard { get; set; }

        [Url]
        public string URL { get; set; }

        public IEnumerable<ValidationResult> Validate(ValidationContext validationContext)
        {
            if(string.IsNullOrEmpty(Name))
            {
                var firstChar = Name[0].ToString();

                if(firstChar != firstChar.ToUpper())
                {
                    yield return new ValidationResult("First character must be capital", new string[] { nameof(Name) });
                }
            }
        }
    }
}