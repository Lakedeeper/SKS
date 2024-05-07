import { Link } from "react-router-dom";
import "./AdminNavbar.css";

import { useEffect } from "react";

function AdminNavbar() {
  useEffect(() => {}, []);

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
                  <Link style={{textDecoration:'none'}} className="active">
                    <span className="las la-home" />
                    <small>Form</small>
                  </Link>
                </li>

                <li >
                  <Link style={{textDecoration:'none'}} to="/adminclubs">
                    <span  className="las la-people-carry" />
                    <small>Clubs</small>
                  </Link>
                </li>
                <li>
                  <Link  to="/adminevents" style={{textDecoration:'none'}}>
                    <span className="las la-hotel" />
                    <small> Events</small>
                  </Link>
                </li>
                <li>
                  <Link  to="/" style={{textDecoration:'none'}} >
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
              <div className="header-menu">
                <div className="user">
                  <div className="bg-img" style={{}} />
                  <span className="las la-power-off" />
                  <span>Logout</span>
                </div>
              </div>
            </div>
          </header>
          <main>
            <Link>
              <div className="page-header">
                <h1>Home</h1>
              </div>
            </Link>
            
          </main>
        </div>
      </div>
    </div>
  );
}

export default AdminNavbar;
