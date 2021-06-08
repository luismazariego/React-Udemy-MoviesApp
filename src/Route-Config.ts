import ActorsIndex from './actors/ActorsIndex';
import CreateActor from './actors/CreateActors';
import EditActor from './actors/EditActors';
import CinemasIndex from './cinemas/CinemasIndex';
import CreateCinema from './cinemas/CreateCinema';
import EditCinema from './cinemas/EditCinema';
import CreateGenre from './genres/CreateGenre';
import EditGenre from './genres/EditGenre';
import GenresIndex from './genres/GenresIndex';
import LandingPage from './LandingPage';
import CreateMovie from './movies/CreateMovie';
import EditMovie from './movies/EditMovie';
import MovieFilter from './movies/MovieFilter';
import RedirectToLanding from './utils/RedirectToLanding';

const routes = [
  { path: '/genres', component: GenresIndex, exact: true },
  { path: '/genres/create', component: CreateGenre },
  { path: '/genres/edit/:id(\\d+)', component: EditGenre },

  { path: '/actors', component: ActorsIndex, exact: true },
  { path: '/actors/create', component: CreateActor },
  { path: '/actors/edit/:id(\\d+)', component: EditActor },

  { path: '/cinemas', component: CinemasIndex, exact: true },
  { path: '/cinemas/create', component: CreateCinema },
  { path: '/cinemas/edit/:id(\\d+)', component: EditCinema },

  { path: '/movies/filter', component: MovieFilter, exact: true },
  { path: '/movies/create', component: CreateMovie },
  { path: '/movies/edit/:id(\\d+)', component: EditMovie },

  { path: '/', component: LandingPage, exact: true },
  { path: '*', component: RedirectToLanding}
];

export default routes;
