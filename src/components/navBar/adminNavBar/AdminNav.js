import React, { Component } from "react";
import { Link } from "react-router-dom";
import Nav from "react-bootstrap/Nav"
import "./AdminNav.css";
import "bootstrap/dist/css/bootstrap.min.css";

export default class NavBar extends Component {
state = {
  saveDisabled: false,
}

  render() {
    return (
      <React.Fragment>
        <header className="background-Nav">
        </header>
        <Nav fill variant="tabs" defaultActiveKey="/admin">
            <Nav.Item>
              <Link className={window.location.pathname === "/admin" ? "activeTab nav-link" : "nav-link"} to="/admin">
                Home
              </Link>
            </Nav.Item>
            <Nav.Item>
              <Link className={window.location.pathname === "/admin/appointments" ? "activeTab nav-link" : "nav-link"} to="/admin/appointments">
                Appointments
              </Link>
            </Nav.Item>
            <Nav.Item>
              <Link className={window.location.pathname === "/admin/users" ? "activeTab nav-link" : "nav-link"} to="/admin/users">
                Users
              </Link>
            </Nav.Item>
            <Nav.Item>
              <Link className={window.location.pathname === "/admin/requests" ? "activeTab nav-link" : "nav-link"} to="/admin/requests">
                Requests
              </Link>
            </Nav.Item>
            <Nav.Item>
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
            </Nav.Item>
        </Nav>
      </React.Fragment>
    );
  }
}
