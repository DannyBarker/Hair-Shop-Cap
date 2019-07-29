import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./UserNav.css";
import "bootstrap/dist/css/bootstrap.min.css";

export default class NavBar extends Component {
  showUserProf = () => {
    if (this.props.accessType === "user") {
      return (
        <li className="nav-item">
          <Link className="nav-link" to="/user/:userId(\d+)/profile">
            Profile
          </Link>
        </li>
      );
    } else {
      return "";
    }
  };

  render() {
    return (
      <header>
        <nav>
          <ul className="nav">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/services">
                Services
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">
                Contact
              </Link>
            </li>
            <li
              className="nav-item"
              style={{ display: this.props.accessType === "" ? "" : "none" }}
            >
              <Link className="nav-link" to="/login">
                Login
              </Link>
            </li>
            <li
              className="nav-item"
              style={{ display: this.props.accessType === "" ? "" : "none" }}
            >
              <Link className="nav-link" to="/create">
                Create
              </Link>
            </li>
            {this.showUserProf()}
            <li
              className="nav-item"
              style={{ display: this.props.accessType === "user" ? "" : "none" }}
            >
              <Link className="nav-link" onClick={() => console.log("logout")} to="/">
                Log Out
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
}
