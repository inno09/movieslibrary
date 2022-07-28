import React from "react";
import { NavLink } from "react-router-dom";



const Navbar = ({onDarkModeClick, isDarkMode}) => {
  return (
    <div className="Nav">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <NavLink to="/">Fmovies</NavLink>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <NavLink className="nav-link" to="/">Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/favorites">Favorites</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/discover">Discover</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/watchlater">WatchLater</NavLink>
            </li>
          </ul>
        </div>
        <button onClick={onDarkModeClick}>
            {isDarkMode ? "Dark" : "Light"} Mode
          </button>
      </nav>
    </div>
  );
};

export default Navbar;