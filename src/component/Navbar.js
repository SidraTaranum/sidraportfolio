import React from "react";
import { NavLink } from "react-router-dom";
import logo from './logo.png'
const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark">
      <NavLink className="navbar-brand header-text " style={{marginLeft:'0rem'}} to="#">
        <img src={logo} width="100px" alt="Logo" />
      </NavLink>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" ></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ">
          <li className="nav-item active">
            <NavLink className="nav-link header-text" to="/">
              Home 
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link header-text" exact to="/about">
              About
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link header-text" exact to="/skills">
              Skills
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link header-text" exact to="/project">
              Projects
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link header-text" exact to="/contact">
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
