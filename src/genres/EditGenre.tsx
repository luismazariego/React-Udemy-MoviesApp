import { useParams } from 'react-router';

export default function EditGenre() {
  const { id }: any = useParams();
  return (
    <>
      <h3>Edit Genre</h3>
      <h4>Id is {id}</h4>
    </>
  );
}
