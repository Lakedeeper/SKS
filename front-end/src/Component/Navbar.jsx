import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import Logo from "../assets/sksLogo.jpeg";
function Navbar() {
  return (
    <div>
      <nav className="navbar">
        <img src={Logo} alt="Logo" className="logo" />
        <div className="LinkDiv">
          <NavLink to="/Clubs" className="nav-link">
            Clubs
          </NavLink>
          <NavLink to="/" className="nav-link">
            Announcements
          </NavLink>
          <NavLink to="/ContactUs" className="nav-link">
            Contact Us
          </NavLink>
          <NavLink to="/Events" className="nav-link">
            Events
          </NavLink>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
