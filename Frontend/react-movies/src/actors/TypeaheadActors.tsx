import { movieActorDTO } from './actor.model';
import { Typeahead } from 'react-bootstrap-typeahead';
import { useState } from 'react';
import { ReactElement } from 'react-markdown';

export default function TypeaheadActors(props: typeaheadActorsProps) {
  const [selectedActor, setSelectedActor] = useState();
  const actors: movieActorDTO[] = [
    {
      id: 1,
      character: '',
      photo:
        'https://m.media-amazon.com/images/M/MV5BMTgxMTc1MTYzM15BMl5BanBnXkFtZTgwNzI5NjMwOTE@._V1_UY317_CR19,0,214,317_AL_.jpg',
      name: 'Sonequa',
    },
    {
      id: 2,
      character: '',
      photo:
        'https://m.media-amazon.com/images/M/MV5BMzYzYWYxYjctZDE3Ny00MzM3LTllYmYtM2JlZWNmYjg0MTk5L2ltYWdlXkEyXkFqcGdeQXVyNjAzODQ1NjI@._V1_UX99_CR0,0,99,99_AL_.jpg',
      name: 'Olivia',
    },
    {
      id: 3,
      character: '',
      photo:
        'https://m.media-amazon.com/images/M/MV5BODgzMzM2NTE0Ml5BMl5BanBnXkFtZTcwMTcyMTkyOQ@@._V1_UX214_CR0,0,214,317_AL_.jpg',
      name: 'Kate',
    },
  ];
  const selected: movieActorDTO[] = [];
  const [draggedElement, setDraggedElement] =
    useState<movieActorDTO | undefined>(undefined);

  function handleDragStart(actor: movieActorDTO) {
    setDraggedElement(actor);
  }
  function handleDragOver(actor: movieActorDTO) {
    if (!draggedElement) {
      return;
    }
    if (actor.id !== draggedElement.id) {
      const draggedElementIndex = props.actors.findIndex(
        (x) => x.id === draggedElement.id
      );
      const actorIndex = props.actors.findIndex((x) => x.id === actor.id);

      const actors = [...props.actors];
      actors[actorIndex] = draggedElement;
      actors[draggedElementIndex] = actor;
      props.onAdd(actors);
    }
  }
  return (
    <>
      <label htmlFor=''>Actors</label>
      <Typeahead
        id='typeahead'
        onChange={(actors) => {
          if (props.actors.findIndex((x) => x.id === actors[0].id) === -1) {
            props.onAdd([...props.actors, actors[0]]);
          }
        }}
        options={actors}
        labelKey={(actor) => actor.name}
        filterBy={['name']}
        placeholder="Type actor's name"
        minLength={2}
        flip={true}
        selected={selected}
        renderMenuItemChildren={(actor) => (
          <>
            <img
              alt="actor's image"
              src={actor.photo}
              style={{
                height: '64px',
                marginRight: '10px',
                width: '64px',
              }}
            />
            <span>{actor.name}</span>
          </>
        )}
      />
      <ul className='list-group'>
        {props.actors.map((actor) => (
          <li
            draggable={true}
            onDragStart={() => handleDragStart(actor)}
            onDragOver={() => handleDragOver(actor)}
            className='list-group-item list-group-item-action'
            key={actor.id}
          >
            {props.listUI(actor)}
            <span
              className='badge badge-primary badge-pill pointer'
              style={{ marginLeft: '0.5rem' }}
              onClick={() => props.onRemove(actor)}
            >
              X
            </span>
          </li>
        ))}
      </ul>
    </>
  );
}

interface typeaheadActorsProps {
  actors: movieActorDTO[];
  onAdd(actors: movieActorDTO[]): void;
  listUI(actor: movieActorDTO): ReactElement;
  onRemove(actor: movieActorDTO): void;
}
