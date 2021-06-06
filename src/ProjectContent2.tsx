import { ReactElement } from 'react';
export default function ProjectContent2(props: ProjectContent2Props) {
  return (
    <>
      {props.superior ? props.superior : <h3>Default Content</h3>}
      <hr />
      {props.intermediate}
      <hr />
      {props.inferior}
    </>
  );
}

interface ProjectContent2Props {
  superior?: ReactElement;
  intermediate: ReactElement;
  inferior: ReactElement;
}
