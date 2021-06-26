import { genresUrl } from "../utils/endpoints";
import { genreDTO } from "./genre.model";
import IndexEntity from "../utils/IndexEntity";

export default function GenresIndex() {
  return (
    <>
      <IndexEntity<genreDTO>
        url={genresUrl}
        createUrl='genres/create'
        title='Genres'
        entity='Genre'>
        {(genres, buttons) => (
          <>
            <thead>
              <tr>
                <th></th>
                <th>Name</th>
              </tr>
            </thead>
            <tbody>
              {genres?.map((g) => (
                <tr key={g.id}>
                  <td>{buttons(`genres/edit/${g.id}`, g.id)}</td>
                  <td>{g.name}</td>
                </tr>
              ))}
            </tbody>
          </>
        )}
      </IndexEntity>
    </>
  );
}
