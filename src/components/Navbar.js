import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link,
//   NavLink,
// } from "react-router-dom";

export default function Navbar(prop) {
  return (
    <nav
      className={`navbar navbar-expand-lg navbar-${prop.mode} bg-${prop.mode}`}
    >
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          {prop.title}
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                {prop.aboutUs}
              </Link>
            </li>
          </ul>
          <form className="d-flex">
            <div
              className={`form-check form-switch text-${
                prop.mode === "light" ? "dark" : "light"
              }`}
            >
              <input
                onClick={prop.toggleMode}
                className="form-check-input"
                type="checkbox"
                id="flexSwitchCheckDefault"
              />
              <label
                className="form-check-label"
                htmlFor="flexSwitchCheckDefault"
              >
                Change Mode
              </label>
            </div>
          </form>
        </div>
      </div>
    </nav>
  );
}
Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  aboutUs: PropTypes.string.isRequired,
};
Navbar.defaultProps = {
  title: "title here please",
  aboutUs: "About Us",
};
