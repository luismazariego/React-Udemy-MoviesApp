import CinemaForm from './CinemaForm';

export default function EditCinema() {
  return (
    <>
      <h3>Edit Cinema</h3>
      <CinemaForm
        model={{ name: 'PremierLA', latitude: 13.70122, longitude: -89.226698 }}
        onSubmit={(values) => console.log(values)}
      />
    </>
  );
}
