import { Link } from 'react-router-dom';

export default function GenresIndex() {
  return (
    <>
      <h3>Genres Index</h3>
      <Link to='genres/create'>Create Genre</Link>
    </>
  );
}
