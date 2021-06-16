import * as Yup from 'yup';

export default function configureValidations() {
  Yup.addMethod(Yup.string, 'capitalFirstCharacter', function () {
    return this.test(
      'capital-first-character',
      'First character must be capital',
      function (value) {
        if (value && value.length > 0) {
            const firstChar = value.substring(0,1);
            return firstChar === firstChar.toUpperCase();
        }
        return true;
      }
    );
  });
}
