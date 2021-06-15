import MovieForm from './MovieForm';
import { genreDTO } from '../genres/genre.model';
import { cinemaDTO } from '../cinemas/cinema.model';
export default function CreateMovie() {
  const genres: genreDTO[] = [
    { id: 1, name: 'Action' },
    { id: 2, name: 'Comedy' },
    { id: 3, name: 'Horror' },
    { id: 4, name: 'Drama' },
    { id: 5, name: 'SciFi' },
    { id: 6, name: 'Thriller' },
  ];
  const cinemas: cinemaDTO[] = [
    { id: 10, name: 'Luxer' },
    { id: 11, name: 'CoolCinema' },
    { id: 12, name: 'Reforma' },
    { id: 13, name: 'Cinemark' },
    { id: 15, name: 'Cinepolis' },
    { id: 14, name: 'Majestic' },
    { id: 16, name: 'Multicinema' },
  ];
  return (
    <>
      <h3>Create Movie</h3>
      <MovieForm
        notSelectedGenres={genres}
        selectedActors={[]}
        selectedGenres={[]}
        selectedCinemas={[]}
        notSelectedCinemas={cinemas}
        model={{ title: '', onBillboard: false, trailer: '' }}
        onSubmit={(values) => console.log(values)}
      />
    </>
  );
}
