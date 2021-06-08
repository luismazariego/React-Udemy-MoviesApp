import './App.css';
import Menu from './utils/Menu';
import { Switch, Route } from 'react-router';
import GenresIndex from './genres/GenresIndex';
import { BrowserRouter } from 'react-router-dom';
import LandingPage from './LandingPage';
import routes from './Route-Config';

function App() {
  return (
    <>
      <BrowserRouter>
        <Menu />
        <div className='container'>
          <Switch>
            {routes.map((route) => (
              <Route key={route.path} path={route.path} exact={route.exact}>
                <route.component />
              </Route>
            ))}
            {/* <Route exact path='/'>
              <LandingPage />
            </Route>
            <Route path='/genres'>
              <GenresIndex />
            </Route> */}
          </Switch>
          {/* <Button>Button text</Button> */}
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
