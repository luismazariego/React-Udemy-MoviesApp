import { Redirect } from 'react-router';

export default function RedirectToLanding() {
  return <Redirect to={{ pathname: '/' }} />;
}
