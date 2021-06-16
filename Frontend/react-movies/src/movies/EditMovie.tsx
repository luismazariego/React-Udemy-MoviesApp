import { cinemaDTO } from '../cinemas/cinema.model';
import { genreDTO } from '../genres/genre.model';
import MovieForm from './MovieForm';

export default function EditMovie() {
  const notSelectedGenres: genreDTO[] = [
    { id: 1, name: 'Action' },
    { id: 2, name: 'Comedy' },
    { id: 3, name: 'Horror' },
  ];
  const selectedGenres: genreDTO[] = [
    { id: 4, name: 'Drama' },
    { id: 5, name: 'SciFi' },
    { id: 6, name: 'Thriller' },
  ];
  const selectedCinemas: cinemaDTO[] = [
    { id: 10, name: 'Luxer' },
    { id: 11, name: 'CoolCinema' },
    { id: 12, name: 'Reforma' },
  ];

  const notSelectedCinemas = [
    { id: 13, name: 'Cinemark' },
    { id: 14, name: 'Majestic' },
    { id: 15, name: 'Cinepolis' },
    { id: 16, name: 'Multicinema' },
  ];

  const selectedActors = [
    {
      id: 1,
      character: '',
      photo:
        'https://m.media-amazon.com/images/M/MV5BMTgxMTc1MTYzM15BMl5BanBnXkFtZTgwNzI5NjMwOTE@._V1_UY317_CR19,0,214,317_AL_.jpg',
      name: 'Sonequa',
    },
  ];
  return (
    <>
      <h3>Edit Movie</h3>
      <MovieForm
        selectedActors={selectedActors}
        selectedCinemas={selectedCinemas}
        notSelectedCinemas={notSelectedCinemas}
        selectedGenres={selectedGenres}
        notSelectedGenres={notSelectedGenres}
        model={{
          title: 'Black Widow',
          onBillboard: true,
          trailer: 'url',
          releaseDate: new Date('2021-09-09T00:00:00'),
        }}
        onSubmit={(values) => console.log(values)}
      />
    </>
  );
}
