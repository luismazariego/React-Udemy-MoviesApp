import { Form, Formik, FormikHelpers } from 'formik';
import { createMovieDTO } from './movie.model';
import * as Yup from 'yup';
import FormGroupText from '../utils/FormGroupText';
import FormGroupCheckbox from '../utils/FormGroupCheckbox';
import FormGroupDate from '../utils/FormGroupDate';
import FormGroupImage from '../utils/FormGroupImage';
import Button from '../utils/Buttom';
import { Link } from 'react-router-dom';
import MultipleSelector from '../utils/MultipleSelector';
import { genreDTO } from '../genres/genre.model';
import { useState } from 'react';
import { multipleSelectorModel } from '../utils/MultipleSelector';
import { cinemaDTO } from '../cinemas/cinema.model';
import TypeaheadActors from '../actors/TypeaheadActors';
import { movieActorDTO } from '../actors/actor.model';

export default function MovieForm(props: movieFormProps) {
  const [selectedGenres, setSelectedGenres] = useState(
    mapping(props.selectedGenres)
  );

  const [notSelectedGenres, setNotSelectedGenres] = useState(
    mapping(props.notSelectedGenres)
  );

  const [selectedCinemas, setSelectedCinemas] = useState(
    mapping(props.selectedCinemas)
  );

  const [notSelectedCinemas, setNotSelectedCinemas] = useState(
    mapping(props.notSelectedCinemas)
  );

  const [selectedActors, setSelectedActors] = useState<movieActorDTO[]>(
    props.selectedActors
  );

  function mapping(
    array: { id: number; name: string }[]
  ): multipleSelectorModel[] {
    return array.map((val) => {
      return { key: val.id, value: val.name };
    });
  }
  return (
    <Formik
      initialValues={props.model}
      onSubmit={(values, actions) => {
        values.genresIds = selectedGenres.map((val) => val.key);
        values.cinemasIds = selectedCinemas.map((val) => val.key);
        values.actors = selectedActors;
        props.onSubmit(values, actions);
      }}
      validationSchema={Yup.object({
        title: Yup.string()
          .required('Movie title is required')
          .capitalFirstCharacter(),
      })}
    >
      {(formikProps) => (
        <Form>
          <FormGroupText label='Title' field='title' />
          <FormGroupCheckbox label='On Billboard' field='onBillboard' />
          <FormGroupText label='Trailer' field='trailer' />
          <FormGroupDate label='Release date' field='releaseDate' />
          <FormGroupImage
            label='Poster'
            field='poster'
            imageUrl={props.model.posterUrl}
          />

          <div className='form-group'>
            <label>Genres: </label>
            <MultipleSelector
              selected={selectedGenres}
              notSelected={notSelectedGenres}
              onChange={(selected, notSelected) => {
                setSelectedGenres(selected);
                setNotSelectedGenres(notSelected);
              }}
            />
          </div>
          <div className='form-group'>
            <label>Cinemas: </label>
            <MultipleSelector
              selected={selectedCinemas}
              notSelected={notSelectedCinemas}
              onChange={(selected, notSelected) => {
                setSelectedCinemas(selected);
                setNotSelectedCinemas(notSelected);
              }}
            />
          </div>
          <div className='form-group'>
            <TypeaheadActors
              onAdd={(actors) => {
                setSelectedActors(actors);
              }}
              onRemove={(actor) => {
                const actors = selectedActors.filter((x) => x !== actor);
                setSelectedActors(actors);
              }}
              actors={selectedActors}
              listUI={(actor: movieActorDTO) => (
                <>
                  {actor.name} /
                  <input
                    placeholder='Character'
                    type='text'
                    value={actor.character}
                    onChange={(e) => {
                      const index = selectedActors.findIndex(
                        (x) => x.id === actor.id
                      );
                      const actors = [...selectedActors];
                      actors[index].character = e.currentTarget.value;
                      setSelectedActors(actors);
                    }}
                  />
                </>
              )}
            />
          </div>

          <Button disabled={formikProps.isSubmitting} type='submit'>
            Send
          </Button>
          <Link className='btn btn-secondary' to='/'>
            Cancel
          </Link>
        </Form>
      )}
    </Formik>
  );
}

interface movieFormProps {
  model: createMovieDTO;
  onSubmit(
    values: createMovieDTO,
    actions: FormikHelpers<createMovieDTO>
  ): void;
  selectedGenres: genreDTO[];
  notSelectedGenres: genreDTO[];
  selectedCinemas: cinemaDTO[];
  notSelectedCinemas: cinemaDTO[];
  selectedActors: movieActorDTO[];
}
