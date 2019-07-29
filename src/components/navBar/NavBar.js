import React, {Component} from 'react';
import { Link } from "react-router-dom"
import AdminNav from "./adminNavBar/AdminNav"
import UserNav from "./userNavBar/UserNav"
import './NavBar.css'
import "bootstrap/dist/css/bootstrap.min.css"

export default class NavBar extends Component {

renderNav = () => {
  if (this.props.userAccess.accessType === "admin") {
    return <AdminNav userAccess={this.props.userAccess} logOut={this.props.logOut} />
  } else {
    return <UserNav userAccess={this.props.userAccess} logOut={this.props.logOut} />
  }
}

  render() {
    return this.renderNav()
  }
}