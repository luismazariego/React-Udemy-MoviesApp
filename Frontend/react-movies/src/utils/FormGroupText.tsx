import { Field, ErrorMessage } from 'formik';
import React from 'react';
import ShowInputErrorField from './ShowInputErrorField';

export default function FormGroupText(props: formGroupTextProps) {
  return (
    <div className='form-group'>
      {props.label ? <label htmlFor={props.field}>{props.label}</label> : null}
      <Field
        name={props.field}
        className='form-control'
        placeholder={props.placeholder}
      />
      <ErrorMessage name={props.field}>
        {(msg) => <ShowInputErrorField message={msg} />}
      </ErrorMessage>
    </div>
  );
}

interface formGroupTextProps {
  field: string;
  label?: string;
  placeholder?: string;
}
