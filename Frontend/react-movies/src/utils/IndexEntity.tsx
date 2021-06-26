import axios, { AxiosResponse } from "axios";
import { useEffect, useState } from "react";
import { ReactElement } from "react-markdown";
import { Link } from "react-router-dom";
import Button from "./Buttom";
import GenericList from "./GenericList";
import Pagination from "./Pagination";
import Confirm from "../utils/Confirm";

export default function IndexEntity<T>(props: indexEntityProps<T>) {
  const [entities, setEntities ] = useState<T[]>();
  const [totalPages, setTotalPages] = useState(0);
  const [recordsPerPage, setRecordsPerPage] = useState(10);
  const [page, setPage] = useState(1);

  useEffect(() => {
    loadData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page, recordsPerPage]);

  function loadData() {
    axios
      .get(props.url, { params: { page, recordsPerPage } })
      .then((res: AxiosResponse<T[]>) => {
        const totalRecords = parseInt(res.headers["records"], 10);
        setTotalPages(Math.ceil(totalRecords / recordsPerPage));
        setEntities(res.data);
      });
  }

  async function deleteGenre(id: number) {
    try {
      await axios.delete(`${props.url}/${id}`);
      loadData();
    } catch (error) {
      console.error(error.response.data);
    }
  }

  const buttons = (editUrl: string, id: number) =>
    <>
      <Link className='btn btn-success' to={editUrl}>
        Edit
      </Link>
      <Button
        onClick={() => Confirm(() => deleteGenre(id))}
        className='btn btn-danger'
      >Delete
      </Button>
    </>

  return (
    <>
      <h3>{props.entity}</h3>
      <Link className='btn btn-primary' to={props.createUrl}>
        Create {props.entity}
      </Link>
      <div className='form-group' style={{ width: "150px" }}>
        <label>Records per page:</label>
        <select
          className='form-control'
          defaultValue={10}
          onChange={(e) => {
            setPage(1);
            setRecordsPerPage(parseInt(e.currentTarget.value, 10));
          }}>
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
      <GenericList list={entities} >
        <table className='table table-striped'>
          {props.children(entities!, buttons)}
        </table>
      </GenericList>
    </>
  );
}

interface indexEntityProps<T> {
    url: string;
    createUrl: string;
    children(entities: T[], buttons: (editUrl: string, id: number) => ReactElement): ReactElement;
    title: string;
    entity: string;
}