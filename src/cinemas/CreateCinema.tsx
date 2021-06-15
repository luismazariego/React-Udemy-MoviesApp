import CinemaForm from './CinemaForm';
export default function CreateCinema() {
  return (
    <>
      <h3>Create Cinema</h3>
      <CinemaForm
        model={{ name: '' }}
        onSubmit={(values) => console.log(values)}
      />
    </>
  );
}
