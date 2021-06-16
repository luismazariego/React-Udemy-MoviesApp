// import { useParams } from 'react-router';
import GenreForm from './GenreForm';

export default function EditGenre() {
  // const { id }: any = useParams();
  return (
    <>
      <h3>Edit Genre</h3>
      <GenreForm
        model={{ name: 'Action' }}
        onSubmit={async (values) => {
          await new Promise((r) => setTimeout(r, 3000));
          console.log(values);
          // actions.setErrors()
        }}
      ></GenreForm>
    </>
  );
}
