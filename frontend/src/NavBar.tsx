import React from 'react';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <>
      <header>
        <nav className="navbar navbar-expand-sm navbar-toggleable-sm navbar-light bg-white border-bottom box-shadow mb-3">
          <div className="container">
            <Link to="/">The Joel Hilton Film Collection</Link>
            <div className="collapse d-sm-inline-flex flex-sm-row-reverse">
              <ul className="navbar-nav flex-grow-1">
                <li className="nav-item">
                  <Link to="/podcasts" className="nav-link text-dark">
                    My Podcasts
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/moviecollection" className="nav-link text-dark">
                    View All Movies
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}

export default NavBar;
