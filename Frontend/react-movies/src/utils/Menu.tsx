import { NavLink } from 'react-router-dom';

export default function Menu() {
  const activeClass = 'active';
  return (
    <nav className='navbar navbar-expand-lg navbar-light bg-light'>
      <div className='container-fluid'>
        <NavLink to='/' className='navbar-brand' activeClassName={activeClass}>
          React - Movies
        </NavLink>
        <div className='collapse navbar-collapse'>
          <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
            <li className='nav-item'>
              <NavLink
                to='/genres'
                activeClassName={activeClass}
                className='nav-link'
              >
                Genres
              </NavLink>
            </li>
            <li className='nav-item'>
              <NavLink
                to='/movies/filter'
                activeClassName={activeClass}
                className='nav-link'
              >
                Movies Filter
              </NavLink>
            </li>
            <li className='nav-item'>
              <NavLink
                to='/actors'
                activeClassName={activeClass}
                className='nav-link'
              >
                Actors
              </NavLink>
            </li>
            <li className='nav-item'>
              <NavLink
                to='/cinemas'
                activeClassName={activeClass}
                className='nav-link'
              >
                Cinemas
              </NavLink>
            </li>
            <li className='nav-item'>
              <NavLink
                to='/movies/create'
                activeClassName={activeClass}
                className='nav-link'
              >
                Create Movie
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
