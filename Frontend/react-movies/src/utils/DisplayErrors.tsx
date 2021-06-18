export default function DisplayErrors(props: displayErrorsProps) {
  const style = { color: 'red' };
  return (
    <>
      {props.errors ? (
        <ul style={style}>
          {props.errors.map((err, index) => 
            <li key={index}>{err}</li>
          )}
        </ul>
      ) : null}
    </>
  );
}

interface displayErrorsProps {
  errors?: string[];
}
