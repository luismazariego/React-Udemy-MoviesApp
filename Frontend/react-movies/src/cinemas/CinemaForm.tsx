import { createCinemaDTO } from './cinema.model';
import { Form, Formik, FormikHelpers } from 'formik';
import * as Yup from 'yup';
import FormGroupText from '../utils/FormGroupText';
import Button from '../utils/Buttom';
import { Link } from 'react-router-dom';
import FormMap from '../utils/FormMap';
import { locationDTO } from '../utils/location.model';

export default function CinemaForm(props: cinemaFormProps) {
  function transfomrLocation(): locationDTO[] | undefined {
    if (props.model.latitude && props.model.longitude) {
      const response: locationDTO = {
        lat: props.model.latitude,
        lng: props.model.longitude,
      };
      return [response];
    }
    return undefined;
  }
  return (
    <Formik
      initialValues={props.model}
      onSubmit={props.onSubmit}
      validationSchema={Yup.object({
        name: Yup.string()
          .required('This field is required')
          .capitalFirstCharacter(),
      })}
    >
      {(formikProps) => (
        <Form>
          <FormGroupText label='Name' field='name' />
          <div style={{ marginBottom: '1rem' }}>
            <FormMap
              latField='latitude'
              lngField='longitude'
              locations={transfomrLocation()}
            />
          </div>
          <Button disabled={formikProps.isSubmitting} type='submit'>
            Save
          </Button>
          <Link className='btn btn-secondary' to='/cinemas'>
            Cancel
          </Link>
        </Form>
      )}
    </Formik>
  );
}

interface cinemaFormProps {
  model: createCinemaDTO;
  onSubmit(
    values: createCinemaDTO,
    actions: FormikHelpers<createCinemaDTO>
  ): void;
}
