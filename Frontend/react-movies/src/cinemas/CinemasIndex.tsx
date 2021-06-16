import { Link } from 'react-router-dom';

export default function CinemasIndex() {
  return (
    <>
      <h3>Cinemas Index</h3>
      <Link to='cinemas/create'>Create Cinema</Link>
    </>
  );
}
