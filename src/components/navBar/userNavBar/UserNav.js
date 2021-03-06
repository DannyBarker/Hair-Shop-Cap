import React, { Component } from "react";
import { Link } from "react-router-dom";
import Nav from "react-bootstrap/Nav"
import "./UserNav.css";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "../shopLogo.png"

export default class NavBar extends Component {
  state = {
    saveDisabled: false,
  };

  showUserProf = () => {
    if (
      this.props.userAccess.accessType === "user" &&
      this.props.userAccess.userId !== null
    ) {
      return (
        <Nav.Item>
          <Link className={window.location.pathname === "/user/profile" ? "activeTab nav-link" : "nav-link tab-6"} to="/user/profile">
            Profile
          </Link>
          </Nav.Item>
      );
    } else {
      return "";
    }
  };
  showLogOut = () => {
    if (
      this.props.userAccess.accessType === "user" &&
      this.props.userAccess.userId
    ) {
      return (
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
      );
    } else {
      return "";
    }
  };
  showNonUser = () => {
    if (!this.props.userAccess.accessType && !this.props.userAccess.userId) {
      return (
        <React.Fragment>
          <Nav.Item>
            <Link className={window.location.pathname === "/login" ? "activeTab nav-link" : "nav-link tab-6"} to="/login">
              Login
            </Link>
            </Nav.Item>
          <Nav.Item>
            <Link className={window.location.pathname === "/create/user" ? "activeTab nav-link" : "nav-link tab-7"} to="/create/user">
              Create Profile
            </Link>
            </Nav.Item>
        </React.Fragment>
      );
    } else {
      return "";
    }
  };
  render() {
    return (
      <React.Fragment>
      <header className="nav-header">
        <div className="navImg-div">
        <img className="imgLogo" src={logo} alt="Shop logo" onClick={() => {this.props.history.push("/")}} />
        </div>
      </header>
          <Nav id="navBar" fill variant="tabs" defaultActiveKey="/home">
            <Nav.Item>
              <Link className={window.location.pathname === "/" ? "activeTab nav-link" : "nav-link"} to="/">
                Home
              </Link>
            </Nav.Item>
            <Nav.Item>
              <Link className={window.location.pathname === "/services" ? "activeTab nav-link" : "nav-link tab-2"} to="/services">
                Services
              </Link>
              </Nav.Item>
            <Nav.Item>
              <Link className={window.location.pathname === "/about" ? "activeTab nav-link" : "nav-link tab-3"} to="/about">
                About
              </Link>
              </Nav.Item>
            <Nav.Item>
              <Link className={window.location.pathname === "/contact" ? "activeTab nav-link" : "nav-link tab-4"} to="/contact">
                Contact
              </Link>
              </Nav.Item>
            <Nav.Item>
              <Link className={window.location.pathname === "/user/request/new" ? "activeTab nav-link" : "nav-link tab-5"} to="/user/request/new">
                Request Appointment
              </Link>
              </Nav.Item>
            {this.showNonUser()}
            {this.showUserProf()}
            {this.showLogOut()}
        </Nav>
      </React.Fragment>
    );
  }
}
