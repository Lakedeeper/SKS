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
              YU<span>REM</span>
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
                    <small>Anasayfa</small>
                  </Link>
                </li>

                <li>
                  <Link>
                    <span className="las la-swimmer active" />
                    <small>Formlar</small>
                  </Link>
                </li>
                <li>
                  <Link>
                    <span className="las la-people-carry" />
                    <small>Personeller</small>
                  </Link>
                </li>
                <li>
                  <Link>
                    <span className="las la-hotel" />
                    <small>Oteller</small>
                  </Link>
                </li>
                <li>
                  <Link>
                    <span className="las la-city" />
                    <small>Şehirler</small>
                  </Link>
                </li>
                <li>
                  <Link>
                    <span className="las la-door-open" />
                    <small>Çıkış</small>
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
                <h1>Anasayfa</h1>
              </div>
            </Link>
            <div className="page-content">
              <div className="analytics">
                <div className="card">
                  <div className="card-head">
                    <h2>Müşteri</h2>
                    <span className="las la-swimmer" />
                  </div>
                  <div className="card-progress">
                    <small>Müşteriler</small>
                    <div className="card-indicator">
                      <div className="indicator one" style={{ width: "60%" }} />
                    </div>
                  </div>
                </div>
                <div className="card">
                  <div className="card-head">
                    <h2>Personel</h2>
                    <span className="las la-people-carry" />
                  </div>
                  <div className="card-progress">
                    <small>Personeller</small>
                    <div className="card-indicator">
                      <div className="indicator two" style={{ width: "80%" }} />
                    </div>
                  </div>
                </div>
                <div className="card">
                  <div className="card-head">
                    <h2>Otel</h2>
                    <span className="las la-hotel" />
                  </div>
                  <div className="card-progress">
                    <small>Oteller</small>
                    <div className="card-indicator">
                      <div
                        className="indicator three"
                        style={{ width: "65%" }}
                      />
                    </div>
                  </div>
                </div>
                <div className="card">
                  <div className="card-head">
                    <h2>Şehir</h2>
                    <span className="las la-city" />
                  </div>
                  <div className="card-progress">
                    <small>Şehirler</small>
                    <div className="card-indicator">
                      <div
                        className="indicator four"
                        style={{ width: "90%" }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}

export default AdminNavbar;
