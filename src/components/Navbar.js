import React from "react";
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default function Navbar(props) {
  return (
    <div>
      <nav className="navbar navbar-expand-lg" style={{backgroundColor: (props.navClr)}}>
        <div className="container-fluid">
          <Link className="navbar-brand" to="/" style={{color: (props.navItemClr)}}>
             {props.title}
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
                <Link className="nav-link" aria-current="page" to="/" style={{color: (props.navItemClr)}}>
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about" style={{color: (props.navItemClr)}}>
                  {props.aboutText}
                </Link>
              </li>
            </ul>
            <div className="form-check form-check-inline">
              <input className="form-check-input" type="radio" onClick={props.lightMode} name="radioBtn" id="radioLight"/>
              <label className="form-check-label" htmlFor="radioLight">Light</label>
            </div>
            <div className="form-check form-check-inline">
              <input className="form-check-input" type="radio" onClick={props.darkMode} name="radioBtn" id="radioDark"/>
              <label className="form-check-label" htmlFor="radioDark">Dark</label>
            </div>
            <div className="form-check form-check-inline">
              <input className="form-check-input" type="radio" onClick={props.redMode} name="radioBtn" id="radioRed"/>
              <label className="form-check-label" htmlFor="radioRed">Red</label>
            </div>
            <div className="form-check form-check-inline">
              <input className="form-check-input" type="radio" onClick={props.yellowMode} name="radioBtn" id="radioYellow"/>
              <label className="form-check-label" htmlFor="radioYellow">Yellow</label>
            </div>
            <div className="form-check form-check-inline">
              <input className="form-check-input" type="radio" onClick={props.greenMode} name="radioBtn" id="radioGreen"/>
              <label className="form-check-label" htmlFor="radioGreen">Green</label>
            </div>
            <div className="form-check form-check-inline">
              <input className="form-check-input" type="radio" onClick={props.aquaMode} name="radioBtn" id="radioAqua"/>
              <label className="form-check-label" htmlFor="radioAqua">Aqua</label>
            </div>
            <div className="form-check form-check-inline">
              <input className="form-check-input" type="radio" onClick={props.blueMode} name="radioBtn" id="radioBlue"/>
              <label className="form-check-label" htmlFor="radioBlue">Blue</label>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
// Prop Types
Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    aboutText: PropTypes.string.isRequired
}
// Default props
Navbar.defaultProps = {
    title: "Here is title",
    aboutText: "Here is about"
}