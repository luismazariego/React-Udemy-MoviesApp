import { Form, Formik, FormikHelpers } from 'formik';
import { Link } from 'react-router-dom';
import Button from '../utils/Buttom';
import FormGroupText from '../utils/FormGroupText';
import { createActorDTO } from './actor.model';
import * as Yup from 'yup';
import FormGroupDate from '../utils/FormGroupDate';
import FormGroupImage from '../utils/FormGroupImage';
import FormGroupMarkdown from '../utils/FormGroupMarkdown';

export default function ActorForm(props: actorFormProps) {
  return (
    <Formik
      initialValues={props.model}
      onSubmit={props.onSubmit}
      validationSchema={Yup.object({
        name: Yup.string()
          .required('This is a required field')
          .capitalFirstCharacter(),
        dateOfBirth: Yup.date().nullable().required('Date is required'),
      })}
    >
      {(formikProps) => (
        <Form>
          <FormGroupText field='name' label='Name' />
          <FormGroupDate label='Date of Birth' field='dateOfBirth' />
          <FormGroupImage
            field='photo'
            label='Photo'
            imageUrl={props.model.photoUrl}
          />
          <FormGroupMarkdown field='biography' label='Biography' />
          <Button disabled={formikProps.isSubmitting} type='submit'>
            Save
          </Button>
          <Link className='btn btn-secondary' to='/actors'>
            Cancel
          </Link>
        </Form>
      )}
    </Formik>
  );
}

interface actorFormProps {
  model: createActorDTO;
  onSubmit(
    values: createActorDTO,
    actions: FormikHelpers<createActorDTO>
  ): void;
}
