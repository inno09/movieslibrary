import React from "react";

const Navbar = ({onDarkModeClick, isDarkMode}) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="#">
        Fmovies
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavDropdown"
        aria-controls="navbarNavDropdown"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarNavDropdown">
        <ul className="navbar-nav">
          <li className="nav-item active">
            <a className="nav-link" href="#">
              Home <span className="sr-only">(current)</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Discover
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Favorites
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Popular
            </a>
          </li>
        </ul>
      </div>
      <button onClick={onDarkModeClick}>
          {isDarkMode ? "Dark" : "Light"} Mode
        </button>
    </nav>
  );
};

export default Navbar;