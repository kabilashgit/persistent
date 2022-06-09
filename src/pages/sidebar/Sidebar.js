import React from "react";
import { Link } from "react-router-dom";
import "./sidebar.scss";
function Sidebar() {
  return (
    <div>
      <aside className="main-sidebar sidebar-dark-primary elevation-4">
        <div className="sidebar">
          <div className="user-panel mt-3 pb-3 mb-3 d-flex">
            <div className="image">
              <img
                src="/img/user2-160x160.jpg"
                className="img-circle elevation-2"
                alt="User Image"
              />
            </div>
            <div className="info">
              <a href="#" className="d-block">
                Manikandan K
              </a>
            </div>
            {/* <div className="info">
              <a data-widget="pushmenu" href="#" role="button">
                <i className="fas fa-times"></i>
              </a>
            </div> */}
          </div>

          <nav className="mt-2">
            <ul
              className="nav nav-pills nav-sidebar flex-column"
              data-widget="treeview"
              role="menu"
            >
              {/* <li className="nav-item menu-open">
                <a href="#" className="nav-link active">
                  <i className="nav-icon fas fa-tachometer-alt"></i>
                  <p>
                    Clients
                    <i className="right fas fa-angle-left"></i>
                  </p>
                </a>
                <ul className="nav nav-treeview">
                  <li className="nav-item">
                    <a href="#" className="nav-link active">
                      <i className="far fa-circle nav-icon"></i>
                      <p>Active Page</p>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="#" className="nav-link">
                      <i className="far fa-circle nav-icon"></i>
                      <p>Inactive Page</p>
                    </a>
                  </li>
                </ul>
              </li> */}
              <li className="nav-item">
                <Link to="/" className="nav-link">
                  <i className="nav-icon fas fa-th"></i>
                  <p>Dashboard</p>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/clients" className="nav-link">
                  <i className="nav-icon fas fa-users"></i>
                  <p>Clients</p>
                </Link>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link">
                  <i className="nav-icon fas fa-file"></i>
                  <p>Policies</p>
                </a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link">
                  <i className="nav-icon fas fa-calendar"></i>
                  <p>Calendar</p>
                </a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link">
                  <i className="nav-icon fas fa-address-book"></i>
                  <p>Directory</p>
                </a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link">
                  <i className="nav-icon fas fa-handshake"></i>
                  <p>Engagement</p>
                </a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link">
                  <i className="nav-icon fas fa-thumbs-up"></i>
                  <p>Deal Board</p>
                </a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link">
                  <i className="nav-icon fas fa-comments"></i>
                  <p>Text Messaging</p>
                </a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link">
                  <i className="nav-icon fas fa-bar-chart"></i>
                  <p>Reports</p>
                </a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link">
                  <i className="nav-icon fas fa-tasks"></i>
                  <p>Auto Task List</p>
                </a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link">
                  <i className="nav-icon fas fa-ticket"></i>
                  <p>Support</p>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </aside>
    </div>
  );
}

export default Sidebar;
