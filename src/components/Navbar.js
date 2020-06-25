import React, { Component } from "react";
import logo from "../img/logo.png";
import logoimg from "../img/logo-img.png";

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-white">
        <a style={{ marginRight: "0px" }} className="navbar-brand" href="#">
          <img src={logoimg} />
        </a>
        <a style={{ marginLeft: "0px" }} className="navbar-brand" href="#">
          <img style={{ height: "50%", width: "50%" }} src={logo} />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="#">
                Why Vyorius?
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#">
                Solutions
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#">
                Product
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Use Cases
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#">
                Team
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#">
                Partners
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#">
                Contact Us
              </a>
            </li>
          </ul>
          <div className="btn-nav ml-auto" style={{ marginRight: "50px" }}>
            <button className="orange btn btn-*" type="submit">
              Launch Vyorius {">"}
            </button>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
