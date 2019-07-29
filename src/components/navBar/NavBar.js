import React, {Component} from 'react';
import { Link } from "react-router-dom"
import AdminNav from "./adminNavBar/AdminNav"
import UserNav from "./userNavBar/UserNav"
import './NavBar.css'
import "bootstrap/dist/css/bootstrap.min.css"

export default class NavBar extends Component {

renderNav = () => {
  console.log(this.props.accessType);
  if (this.props.accessType === "admin") {
    return <AdminNav />
  } else {
    return <UserNav accessType={this.props.accessType} />
  }
}

  render() {
    return this.renderNav()
  }
}