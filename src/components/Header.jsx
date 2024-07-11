import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

const Header = () => {
  return (
    <div className="bg-white sticky-top">
      <div className="container">
        <nav className="navbar py-3">
          <div className="container-fluid">
            <Link className="navbar-brand" to="/">
              <img src={logo} alt="Scarlet bus" />
            </Link>
            <Link
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasExample"
              aria-controls="offcanvasExample"
            >
              <i className="bi bi-list"></i>
            </Link>
            <div
              className="offcanvas offcanvas-end"
              tabIndex="-1"
              id="offcanvasExample"
              aria-labelledby="offcanvasExampleLabel"
            >
              <div className="offcanvas-header ms-auto">
                <button
                  type="button"
                  className="btn-close text-reset"
                  data-bs-dismiss="offcanvas"
                  aria-label="Close"
                ></button>
              </div>
              <div className="offcanvas-body">
                <ul className="text-center">
                  <li className="nav-item">
                    <Link
                      className="nav-link active"
                      aria-current="page"
                      to="/"
                    >
                      Home
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      className="nav-link active"
                      aria-current="page"
                      to="/"
                    >
                      Login
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
      </div>
      </div>
  );
};

export default Header;
