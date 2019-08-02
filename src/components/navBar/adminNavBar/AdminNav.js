import React, { Component } from "react";
import { Link } from "react-router-dom";
import Nav from "react-bootstrap/Nav"
import "./AdminNav.css";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "../shopLogo.png"

export default class NavBar extends Component {
state = {
  saveDisabled: false,
}

showAdminLogout = () => {
  return (<Nav.Item>
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
</Nav.Item>)
}

  render() {
    return (
      <React.Fragment>
        <header className="nav-header">
        <div className="navImg-div">
        <img className="imgLogo" src={logo} alt="Shop logo" onClick={() => {this.props.history.push("/admin")}} />
        </div>
        </header>
        <Nav fill variant="tabs" defaultActiveKey="/home">
            <Nav.Item>
              <Link className={window.location.pathname === "/admin" ? "activeTab nav-link" : "nav-link"} to="/admin">
                Home
              </Link>
            </Nav.Item>
            <Nav.Item>
              <Link className={window.location.pathname === "/admin/appointments" ? "activeTab nav-link" : "nav-link tab-2"} to="/admin/appointments">
                Appointments
              </Link>
            </Nav.Item>
            <Nav.Item>
              <Link className={window.location.pathname === "/admin/users" ? "activeTab nav-link" : "nav-link tab-3"} to="/admin/users">
                Users
              </Link>
            </Nav.Item>
            <Nav.Item>
              <Link className={window.location.pathname === "/admin/requests" ? "activeTab nav-link" : "nav-link tab-4"} to="/admin/requests">
                Requests
              </Link>
            </Nav.Item>
            {this.showAdminLogout()}
        </Nav>
      </React.Fragment>
    );
  }
}
