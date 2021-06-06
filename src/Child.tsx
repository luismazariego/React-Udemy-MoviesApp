import { useContext } from 'react';
import ContextValue from './ContextValue';

export default function Child() {
  const value = useContext(ContextValue);

  return (
    <>
      <h3>Child Component: Context value is: {value}</h3>
    </>
  );
}
