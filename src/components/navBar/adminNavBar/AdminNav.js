import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./AdminNav.css";
import "bootstrap/dist/css/bootstrap.min.css";

export default class NavBar extends Component {
state = {
  saveDisabled: false,
}

  render() {
    return (
      <header>
        <nav>
          <ul className="nav">
            <li className="nav-item">
              <Link className="nav-link" to="/appointments">
                Appointments
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/users">
                Users
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/requests">
                Requests
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                onClick={() => {
                  this.setState({ saveDisabled: true });
                  this.props.logOut();
                }}
                disabled={this.state.saveDisabled}
                to="/"
              >
                Log Out
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
}