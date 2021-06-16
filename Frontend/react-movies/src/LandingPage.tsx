import React, { useEffect, useState } from "react";
import { landingPageDTO } from "./movies/movie.model";
import MovieList from "./movies/MovieList";

export default function LandingPage() {
    const [movies, setMovies] = useState<landingPageDTO>({});

    useEffect(() => {
      const timerId = setTimeout(() => {
        setMovies({
          onBillboard: [
            {
              id: 1,
              title: 'Spider-man far from home',
              poster:
                'https://images-na.ssl-images-amazon.com/images/I/91yWd9QApeL._SY450_.jpg',
            },
            {
              id: 2,
              title: 'Moana',
              poster:
                'https://static.wikia.nocookie.net/disney/images/7/76/Moana_official_poster.jpg',
            },
            {
              id: 3,
              title: 'Wonder Woman 1984',
              poster:
                'https://images-na.ssl-images-amazon.com/images/I/611Xx97wVNL._AC_SY679_.jpg',
            },
          ],
          comingSoon: [
            {
              id: 1,
              title: 'Black Widow',
              poster:
                'https://images-na.ssl-images-amazon.com/images/I/61Fm%2BN%2BNncL._AC_SY679_.jpg',
            },
            {
              id: 2,
              title: 'Fast & Furious 9',
              poster:
                'https://m.media-amazon.com/images/M/MV5BMjI0NmFkYzEtNzU2YS00NTg5LWIwYmMtNmQ1MTU0OGJjOTMxXkEyXkFqcGdeQXVyMjMxOTE0ODA@._V1_.jpg',
            },
            {
              id: 3,
              title: 'Venom Let There be Carnage',
              poster:
                'https://www.brickfanatics.com/wp-content/uploads/Venom-Let-There-Be-Carnage-poster-featured-800x445.jpg',
            },
          ],
        });
      }, 1000);
      return () => clearTimeout(timerId);
    });

    return (
      <>
        <h3>On Billboard</h3>
        <MovieList movies={movies.onBillboard} />

        <h3>Coming soon</h3>
        <MovieList movies={movies.comingSoon} />
      </>
    );
}