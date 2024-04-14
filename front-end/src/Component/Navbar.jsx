import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import Logo from "../assets/sksLogo.jpeg";
function Navbar() {
  const [User, setUser] = useState({
    id: "1",
    UserName: "Student",
  });
  console.log(User);
  return (
    <div>
      <nav className="navbar">
        <NavLink to="/" className="nav-link">
          <img src={Logo} alt="Logo" className="logo" />
        </NavLink>

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
          <NavLink className="nav-link">
            {User != null && User.UserName == "Student"
              ? "Welcome" + " " + User.UserName
              : "Log in"}
          </NavLink>
          {User !== null && User.UserName == "Club Manager" ? (
            <NavLink to="/Form" className="nav-link">
              Form
            </NavLink>
          ) : (
            ""
          )}

          {User !== null && User.UserName == "Admin" ? (
            <NavLink to="/FormAdmin" className="nav-link">
              FormAdmin
            </NavLink>
          ) : (
            ""
          )}
          {User != null ? (
            <NavLink to="/" className="nav-link" onClick={() => setUser(null)}>
              Log Out
            </NavLink>
          ) : (
            ""
          )}
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
