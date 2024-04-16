import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import Logo from "../assets/sksLogo.jpeg";
import { useStudentUser } from "../StudentUserContext";
import { useNavigate } from "react-router-dom";
function Navbar() {
  const { studentUser, setStudentUser } = useStudentUser();
  const { clubUser, setClubUser } = useStudentUser();
  const { adminUser, setAdminUser } = useStudentUser();
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("studentUser");
    localStorage.removeItem("clubUser");
    navigate("/");
    window.location.reload();
  };

  useEffect(() => {
    const storedStudentUser = localStorage.getItem("studentUser");
    const storedClubUser = localStorage.getItem("clubUser");
    const storedAdminUser = localStorage.getItem("adminEmail");
    if (storedStudentUser) {
      setStudentUser(JSON.parse(storedStudentUser));
    } else if (storedClubUser) {
      setClubUser(JSON.parse(storedClubUser));
    } else if (storedAdminUser) {
      setAdminUser(JSON.parse(storedClubUser));
    }
  }, [setStudentUser]);

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

          <NavLink to="/ContactUs" className="nav-link">
            Contact Us
          </NavLink>
          <NavLink to="/Events" className="nav-link">
            Events
          </NavLink>
          {studentUser == null && clubUser == null && adminUser == null ? (
            <NavLink to="/" className="nav-link">
              Log in
            </NavLink>
          ) : (
            ""
          )}
          <NavLink className="nav-link">
            {studentUser != null
              ? studentUser.name
              : clubUser != null
              ? clubUser.name
              : adminUser != null
              ? adminUser.name
              : ""}
          </NavLink>
          {clubUser !== null ? (
            <NavLink to="/Form" className="nav-link">
              Form
            </NavLink>
          ) : (
            ""
          )}

          {adminUser !== null ? (
            <NavLink to="/FormAdmin" className="nav-link">
              FormAdmin
            </NavLink>
          ) : (
            ""
          )}
          {studentUser != null || clubUser != null || adminUser != null ? (
            <NavLink className="nav-link" onClick={handleLogout}>
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
