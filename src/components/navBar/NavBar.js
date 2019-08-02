import React, {Component} from 'react';
import AdminNav from "./adminNavBar/AdminNav"
import UserNav from "./userNavBar/UserNav"
import './NavBar.css'
import "bootstrap/dist/css/bootstrap.min.css"

export default class NavBar extends Component {

renderNav = () => {
  if (this.props.userAccess.accessType === "admin") {
    return <AdminNav userAccess={this.props.userAccess} logOut={this.props.logOut} {...this.props} />
  } else {
    return <UserNav userAccess={this.props.userAccess} logOut={this.props.logOut} {...this.props} />
  }
}

  render() {
    return this.renderNav()
  }
}