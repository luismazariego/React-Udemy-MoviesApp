import GenreForm from './GenreForm';
import { createGenreDTO } from './genre.model';
import axios from 'axios';
import { genresUrl } from '../utils/endpoints';
import { useHistory } from 'react-router-dom';
import DisplayErrors from '../utils/DisplayErrors';
import { useState } from 'react';

export default function CreateGenre() {
  const history = useHistory();
  const [errors, setErrors] = useState<string[]>([]);
  async function Create(genre: createGenreDTO) {
    try {
      await axios.post(`${genresUrl}`, genre);
      history.push('/genres');
    } catch (error) {
      setErrors(error.response.data);
    }
  }

  return (
    <>
      <h3>Create Genre</h3>
      <DisplayErrors errors={errors} />
      <GenreForm
        model={{ name: '' }}
        onSubmit={async (values) => {
          await Create(values);
        }}
      ></GenreForm>
    </>
  );
}
