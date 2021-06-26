import EditEntity from "../utils/EditEntity";
import { genresUrl } from "../utils/endpoints";
import { createGenreDTO, genreDTO } from "./genre.model";
import GenreForm from "./GenreForm";

export default function EditGenre() {
  return (
    <>
      <EditEntity<createGenreDTO, genreDTO>
        url={genresUrl}
        indexUrl='/genres'
        entity='Genres'>
        {(entity, edit) => (
          <GenreForm
            model={entity}
            onSubmit={async (values) => {
              await edit(values);
            }}></GenreForm>
        )}
      </EditEntity>
    </>
  );
}
