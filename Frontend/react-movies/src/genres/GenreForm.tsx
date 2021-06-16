import { Formik, Form, FormikHelpers } from "formik";
import { Link } from "react-router-dom";
import Button from "../utils/Buttom";
import FormGroupText from "../utils/FormGroupText";
import * as Yup from 'yup';
import { createGenreDTO } from './genre.model';

export default function GenreForm(props: genreFormProps) {
  return (
    <>
      <Formik
        // initialValues={{
        //   name: '',
        // }}
        initialValues={props.model}
        // onSubmit={(values) => {
        //   console.log(values);
        // }}
        onSubmit={props.onSubmit}
        validationSchema={Yup.object({
          name: Yup.string().required('Required field').capitalFirstCharacter(),
        })}
      >
        {(formikProps) => (
          <Form>
            <FormGroupText field='name' label='Name' placeholder='Genre Name' />
            <Button type='submit' disabled={formikProps.isSubmitting}>
              Save
            </Button>
            <Link className='btn btn-secondary' to='/genres'>
              Cancel
            </Link>
          </Form>
        )}
      </Formik>
      ;
    </>
  );
}

interface genreFormProps {
  model: createGenreDTO;
  onSubmit(values: createGenreDTO, action: FormikHelpers<createGenreDTO>): void;
}