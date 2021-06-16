import { movie } from './movie.model';
import SingleMovie from './SingleMovie';
import css from './MovieList.module.css';
import GenericList from '../utils/GenericList';

export default function MovieList(props: movieListProps) {
  return (
    <GenericList list={props.movies}>
      <div className={css.div}>
        {props.movies?.map((movie) => (
          <SingleMovie key={movie.id} movie={movie} />
        ))}
      </div>
    </GenericList>
  );
}

interface movieListProps {
  movies?: movie[];
}
