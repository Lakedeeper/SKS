import { Link } from "react-router-dom";
import "./AdminNavbar.css";
import { useStudentUser } from "../StudentUserContext";
import { useEffect, useState } from "react";

function AdminNavbar() {
  const [activeLink, setActiveLink] = useState("adminForm");
  const { component, setComponents } = useStudentUser();
  useEffect(() => {}, []);

  const handleLinkClick = (linkName) => {
    setActiveLink(linkName);
    setComponents(linkName);
  };

  return (
    <div>
      <div>
        <input type="checkbox" id="menu-toggle" />
        <div className="sidebar">
          <div className="side-header">
            <h3>
              <span>SKS-Admin</span>
            </h3>
          </div>
          <div className="side-content">
            <div className="profile">
              <div className="profile-img bg-img" style={{}} />
              <img
                src="https://cdn-icons-png.flaticon.com/128/7542/7542296.png"
                alt=""
              />
              <small>Admin</small>
            </div>
            <div className="side-menu">
              <ul>
                <li>
                  <Link
                    style={{ textDecoration: "none" }}
                    className={activeLink === "adminForm" ? "active" : ""}
                    onClick={() => handleLinkClick("adminForm")}
                  >
                    <span className="las la-home" />
                    <small>Form</small>
                  </Link>
                </li>

                <li>
                  <Link
                    style={{ textDecoration: "none" }}
                    className={activeLink === "adminClubs" ? "active" : ""}
                    onClick={() => handleLinkClick("adminClubs")}
                  >
                    <span className="las la-people-carry" />
                    <small>Clubs</small>
                  </Link>
                </li>
                <li>
                  <Link
                    style={{ textDecoration: "none" }}
                    className={activeLink === "adminEvents" ? "active" : ""}
                    onClick={() => handleLinkClick("adminEvents")}
                  >
                    <span className="las la-hotel" />
                    <small> Events</small>
                  </Link>
                </li>
                <li>
                  <Link
                    to="/"
                    style={{ textDecoration: "none" }}
                    onClick={() => handleLinkClick("/")}
                  >
                    <span className="las la-door-open" />
                    <small>Exit</small>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="main-content">
          <header className="adminHeader">
            <div className="header-content">
              <label htmlFor="menu-toggle">
                <span className="las la-bars" />
              </label>
              <div className="header-menu"></div>
            </div>
          </header>
          <main>
            <Link style={{ textDecoration: "none" }}>
              <div className="page-header">
                {component === "adminForm" ? (
                  <h1>Forms</h1>
                ) : component === "adminClubs" ? (
                  <h1>Clubs</h1>
                ) : component === "adminEvents" ? (
                  <h1>Events</h1>
                ) : (
                  <h1>Forms</h1>
                )}
              </div>
            </Link>
          </main>
        </div>
      </div>
    </div>
  );
}

export default AdminNavbar;
