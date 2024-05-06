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
                  <Link className="active">
                    <span className="las la-home" />
                    <small>Home</small>
                  </Link>
                </li>

                <li>
                  <Link>
                    <span className="las la-swimmer active" />
                   <small><Link to="/forms">Forms</Link></small>
                  </Link>
                </li>
                <li>
                  <Link>
                    <span className="las la-people-carry" />
                    <small><Link to="/adminclubs">Clubs</Link></small>
                  </Link>
                </li>
                <li>
                  <Link>
                    <span className="las la-hotel" />
                    <small> <Link to="/adminevents">Events</Link></small>
                  </Link>
                </li>
                <li>
                  <Link>
                    <span className="las la-door-open" />
                    <small><Link to="/">Exit</Link></small>
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
