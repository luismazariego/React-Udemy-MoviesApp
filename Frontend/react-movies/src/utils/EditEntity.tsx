import axios, { AxiosResponse } from "axios";
import { useEffect, useState } from "react";
import { ReactElement } from "react-markdown";
import { useParams, useHistory } from "react-router-dom";
import DisplayErrors from "./DisplayErrors";
import Loading from "./Loading";

export default function EditEntity<TCreate, TRead>(
  props: editEntityProps<TCreate, TRead>
) {
  const { id }: any = useParams();
  const [entity, setEntity] = useState<TCreate>();
  const [errors, setErrors] = useState<string[]>([]);
  const history = useHistory();

  useEffect(() => {
    axios.get(`${props.url}/${id}`).then((response: AxiosResponse<TRead>) => {
      setEntity(props.transform(response.data));
    });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function edit(editEntity: TCreate) {
    try {
      await axios.put(`${props.url}/${id}`, editEntity);
      history.push(props.indexUrl);
    } catch (error) {
      setErrors(error.response.data);
    }
  }

  return (
    <>
      <h3> Edit {props.entity}</h3>
      <DisplayErrors errors={errors} />
      {entity ? props.children(entity, edit) : <Loading />}
    </>
  );
}

interface editEntityProps<TCreate, TRead> {
  url: string;
  indexUrl: string;
  entity: string;
  children(entity: TCreate, edit: (entity: TCreate) => void): ReactElement;
  transform(entity: TRead): TCreate;
}

EditEntity.defaultProps = {
    transform: (entity: any) => entity
}