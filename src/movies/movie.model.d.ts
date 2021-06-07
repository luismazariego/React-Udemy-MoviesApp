export interface movie {
  id: number;
  title: string;
  poster: string;
}

export interface landingPageDTO {
  onBillboard?: movie[];
  comingSoon?: movie[];
}
