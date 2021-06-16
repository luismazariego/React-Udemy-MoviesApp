import { Form, Formik } from 'formik';
import { Link } from 'react-router-dom';
import Button from '../utils/Buttom';
import * as Yup from 'yup';
import FormGroupText from '../utils/FormGroupText';
import GenreForm from './GenreForm';

export default function CreateGenre() {
  // const history = useHistory();

  return (
    <>
      <h3>Create Genre</h3>

      <GenreForm
        model={{ name: '' }}
        onSubmit={async (values) => {
          await new Promise((r) => setTimeout(r, 3000));
          console.log(values);
          // actions.setErrors()
        }}
      ></GenreForm>
    </>
  );
}
