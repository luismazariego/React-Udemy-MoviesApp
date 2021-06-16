import { movie } from './movie.model';
import css from './SingleMovie.module.css'

export default function SingleMovie(props: singleMovieProps) {
  
  const createLink = () => `/movie/${props.movie.id}`;

  return (
    <div className={css.div}>
      <a href={createLink()}>
        <img src={props.movie.poster} alt='Poster' />
      </a>
      <p>
        <a href={createLink()}>{props.movie.title}</a>
      </p>
    </div>
  );
}

interface singleMovieProps {
  movie: movie;
}
