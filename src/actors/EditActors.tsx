import ActorForm from './ActorForm';
export default function EditActor() {
  return (
    <>
      <h3>Edit Actor</h3>
      <ActorForm
        model={{
          name: 'Scarlett Johansson',
          dateOfBirth: new Date('1996-03-02T00:00:00'),
          biography: `# Scarlett
was born **ScarJo**
          `,
          photoUrl:
            'https://m.media-amazon.com/images/M/MV5BMTM3OTUwMDYwNl5BMl5BanBnXkFtZTcwNTUyNzc3Nw@@._V1_UY317_CR23,0,214,317_AL_.jpg',
        }}
        onSubmit={(values) => console.log(values)}
      />
    </>
  );
}
