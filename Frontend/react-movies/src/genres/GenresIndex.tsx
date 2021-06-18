import axios, { AxiosResponse } from 'axios';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { genresUrl } from '../utils/endpoints';
import { genreDTO } from './genre.model';
import { useState } from 'react';
import GenericList from '../utils/GenericList';
import Button from '../utils/Buttom';
import Pagination from '../utils/Pagination';

export default function GenresIndex() {
  const [genres, setGenres] = useState<genreDTO[]>();
  const [totalPages, setTotalPages] = useState(0);
  const [recordsPerPage, setRecordsPerPage] = useState(10);
  const [page, setPage] = useState(1);

  useEffect(() => {
    axios
      .get(genresUrl, { params: { page, recordsPerPage } })
      .then((res: AxiosResponse<genreDTO[]>) => {
        const totalRecords = parseInt(res.headers['records'], 10);
        setTotalPages(Math.ceil(totalRecords / recordsPerPage));
        console.log(res.data);
        setGenres(res.data);
      });
  }, [page, recordsPerPage]);
  return (
    <>
      <h3>Genres</h3>
      <Link className='btn btn-primary' to='genres/create'>
        Create Genre
      </Link>
      <div className='form-group' style={{ width: '150px' }}>
        <label>Records per page:</label>
        <select
          className='form-control'
          defaultValue={10}
          onChange={(e) => {
            setPage(1);
            setRecordsPerPage(parseInt(e.currentTarget.value, 10))
          }
          }
        >
          <option value={5}>5</option>
          <option value={10}>10</option>
          <option value={25}>25</option>
          <option value={50}>50</option>
        </select>
      </div>
      <br />
      <br />
      <Pagination
        totalPages={totalPages}
        currentPage={page}
        onChange={(newPage) => setPage(newPage)}
      />
      <GenericList list={genres}>
        <table className='table table-striped'>
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
            </tr>
          </thead>
          <tbody>
            {genres?.map((g) => (
              <tr key={g.id}>
                <td>
                  <Link className='btn btn-success' to={`/genres/${g.id}`}>
                    Edit
                  </Link>
                  <Button className='btn btn-danger'>Delete</Button>
                </td>
                <td>{g.name}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </GenericList>
    </>
  );
}
