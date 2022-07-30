import React from "react";
import { NavLink } from "react-router-dom";



const Navbar = () => {
  return (
    <div className="Nav">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <NavLink to="/">Fmovies</NavLink>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <NavLink className="nav-link" to="/home">Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/discover">Discover</NavLink>
            </li>
            {/* <li className="nav-item">
              <NavLink className="nav-link" to="/random">Random Movie</NavLink>
            </li> */}
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;