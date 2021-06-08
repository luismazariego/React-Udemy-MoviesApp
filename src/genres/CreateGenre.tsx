import { useHistory } from 'react-router';
import Button from '../utils/Buttom';

export default function CreateGenre() {
  const history = useHistory();

  return (
    <>
      <h3>Create Genre</h3>
      <Button onClick={() => history.push('/genres')}>Save</Button>
    </>
  );
}
