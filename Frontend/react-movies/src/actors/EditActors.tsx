import EditEntity from "../utils/EditEntity";
import { actorsUrl } from "../utils/endpoints";
import actorToFormData from "../utils/FormDataUtils";
import { actorDTO, createActorDTO } from "./actor.model";
import ActorForm from "./ActorForm";
export default function EditActor() {
  const transform = (actor: actorDTO) => {
    return {
      name: actor.name,
      photoUrl: actor.photo,
      biography: actor.biography,
      dateOfBirth: new Date(actor.dateOfBirth)
    }
  };
  return (
    <>
      <EditEntity<createActorDTO, actorDTO>
        url={actorsUrl}
        indexUrl='/Actors'
        entity='Actors'
        transformFordData={actorToFormData}
        transform={transform}
      >
        {(entity, edit) => (
          <ActorForm
            model={entity}
            onSubmit={async (values) => await edit(values)}
          />
        )}
      </EditEntity>
    </>
  );
}
