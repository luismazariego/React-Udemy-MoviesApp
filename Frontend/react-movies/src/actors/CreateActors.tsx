import axios from 'axios';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import DisplayErrors from '../utils/DisplayErrors';
import { actorsUrl } from '../utils/endpoints';
import actorToFormData from '../utils/FormDataUtils';
import { createActorDTO } from './actor.model';
import ActorForm from './ActorForm';

export default function CreateActor() {
  
  const history = useHistory();
  const [errors, setErrors] = useState();

  async function create(actor: createActorDTO) {
    try {
      const formData = actorToFormData(actor);
      await axios({
        method: "post",
        url: actorsUrl,
        data: formData,
        headers: { "Content-Type": "multipart/form-data" },
      });
      history.push('/actors');
    } catch (error) {
      setErrors(error.response.data);
    }
  }
  return (
    <>
      <h3>Create Actor</h3>
      <DisplayErrors errors={errors} />
      <ActorForm
        model={{ name: '', dateOfBirth: undefined }}
        onSubmit={async (values) => await create(values)}
      />
    </>
  );
}
