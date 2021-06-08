import { Link } from 'react-router-dom';

export default function ActorsIndex() {
  return (
    <>
      <h3>Actors Index</h3>
      <Link to='actors/create'>Create Actor</Link>
    </>
  );
}
