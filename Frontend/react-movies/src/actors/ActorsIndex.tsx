import { actorsUrl } from '../utils/endpoints';
import IndexEntity from '../utils/IndexEntity';
import { actorDTO } from './actor.model';

export default function ActorsIndex() {
  return (
    <>
      <IndexEntity<actorDTO>
        url={actorsUrl}
        createUrl="actors/create"
        title="Actors"
        entity="Actor"
      >
        {(actors, buttons) => (
          <>
            <thead>
              <tr>
                <th></th>
                <th>Name</th>
              </tr>
            </thead>
            <tbody>
              {actors?.map((actor) => (
                <tr key={actor.id}>
                  <td>{buttons(`actors/edit/${actor.id}`, actor.id)}</td>
                  <td>{actor.name}</td>
                </tr>
              ))}
            </tbody>
          </>
        )}
      </IndexEntity>
    </>
  );
}
