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
    localStorage.removeItem("adminEmail");
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
      setAdminUser(JSON.parse(storedAdminUser));
    }
  }, [setStudentUser]);

  return (
    <div>
      <nav className="navbar">
        <NavLink to="/" className="nav-link">
          <div>
            <img src={Logo} alt="Logo" className="logo" />
            <img src="" alt="" />
          </div>
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

          {clubUser !== null ? (
            <NavLink to="/Form" className="nav-link">
              Form
            </NavLink>
          ) : (
            ""
          )}

          {adminUser !== null ? (
            <NavLink to="/Admin" className="nav-link">
              FormAdmin
            </NavLink>
          ) : (
            ""
          )}

          {studentUser != null || clubUser != null || adminUser != null ? (
            <NavLink
              className="nav-link "
              style={{
                border: "1px solid #008080",
                width: "100px",
                height: "50px",
                borderRadius: "30px",
                backgroundColor: "	#008080",
                fontSize: "20px",
                color: "#87ceeb",
              }}
            >
              {studentUser != null
                ? studentUser.name
                : clubUser != null
                ? clubUser.name
                : adminUser != null
                ? adminUser.name
                : ""}
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
