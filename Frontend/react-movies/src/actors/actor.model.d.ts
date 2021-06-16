export interface createActorDTO {
  name: string;
  dateOfBirth?: Date;
  photo?: File;
  photoUrl?: string;
  biography?: string;
}

export interface movieActorDTO {
  id: number;
  name: string;
  character: string;
  photo: string;
}
