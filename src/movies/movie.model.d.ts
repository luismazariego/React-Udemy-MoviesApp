import { movieActorDTO } from '../actors/actor.model';
export interface movie {
  id: number;
  title: string;
  poster: string;
}

export interface landingPageDTO {
  onBillboard?: movie[];
  comingSoon?: movie[];
}

export interface createMovieDTO {
  title: string;
  onBillboard: boolean;
  trailer: string;
  releaseDate?: Date;
  poster?: File;
  posterUrl?: string;
  genresIds?: number[];
  cinemasIds?: number[];
  actors?: movieActorDTO[];
}
