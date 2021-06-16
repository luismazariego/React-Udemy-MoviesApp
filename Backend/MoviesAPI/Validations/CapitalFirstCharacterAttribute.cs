using System.ComponentModel.DataAnnotations;

namespace MoviesAPI.Validations
{
    public class CapitalFirstCharacterAttribute : ValidationAttribute
    {
        protected override ValidationResult IsValid(object value, ValidationContext validationContext)
        {
            if (value is null || string.IsNullOrEmpty(value.ToString()))
            {
                return ValidationResult.Success;
            }

            var firstChar = value.ToString()[0].ToString();

            return firstChar != firstChar.ToUpper()
                            ? new ValidationResult("First character must be in capitals")
                            : ValidationResult.Success;
        }
    }
}