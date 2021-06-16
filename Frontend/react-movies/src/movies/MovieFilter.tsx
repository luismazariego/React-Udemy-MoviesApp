import { Field, Form, Formik } from 'formik';
import { genreDTO } from '../genres/genre.model';
import Button from '../utils/Buttom';
export default function MovieFilter() {
  const initialValue: movieFilterForm = {
    title: '',
    genreId: 0,
    comingSoon: false,
    onBillboard: false,
  };

  const genres: genreDTO[] = [
    { id: 1, name: 'Comedy' },
    { id: 2, name: 'Drama' },
    { id: 3, name: 'Action' },
  ];

  return (
    <>
      <h3>Movies Filter</h3>
      <Formik
        initialValues={initialValue}
        onSubmit={(values) => console.log(values)}
      >
        {(formikProps) => (
          <Form>
            <div className='form-inline'>
              <div className='form-group mb-2'>
                <label htmlFor='title ' className='sr-only'>
                  Title
                </label>
                <input
                  type='text'
                  className='form-control'
                  id='title'
                  placeholder='Movie title'
                  {...formikProps.getFieldProps('title')}
                />
              </div>
              <div className='form-group mx-sm-3 mb-2'>
                <select
                  className='form-control'
                  {...formikProps.getFieldProps('genreId')}
                >
                  <option value='0'>--Select a Genre--</option>
                  {genres.map((genre) => (
                    <option key={genre.id} value={genre.id}>
                      {genre.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div className='form-group mx-sm-3 mb-2'>
              <Field
                className='form-check-input'
                id='comingSoon'
                name='comingSoon'
                type='checkbox'
              />
              <label htmlFor='comingSoon' className='form-check-label'>
                Coming Soon
              </label>
            </div>
            <div className='form-group mx-sm-3 mb-2'>
              <Field
                className='form-check-input'
                id='onBillboard'
                name='onBillboard'
                type='checkbox'
              />
              <label htmlFor='onBillboard' className='form-check-label'>
                On Billboard
              </label>
            </div>
            <Button
              className='btn btn-primary mb-2 mx-sm-3'
              onClick={() => formikProps.submitForm()}
            >
              Filter
            </Button>
            <Button
              className='btn btn-danger mb-2'
              onClick={() => formikProps.setValues(initialValue)}
            >
              Clean
            </Button>
          </Form>
        )}
      </Formik>
    </>
  );
}

interface movieFilterForm {
  title: string;
  genreId: number;
  comingSoon: boolean;
  onBillboard: boolean;
}
