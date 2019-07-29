import { Route, withRouter, Redirect } from 'react-router-dom'
import React, { Component } from 'react'
import API from './apiManager/api'
import './HairShop.css'
import NavBar from './navBar/NavBar'
import ApplicationViews from './applicationViews/ApplicationViews'

class HairShop extends Component {
  state = {
    accessType: sessionStorage.getItem("userType"),
    userId: sessionStorage.getItem("userId")
  }

  setUserId = (accessType, id) => {
    sessionStorage.setItem("userType", accessType)
    sessionStorage.setItem("userId", id)
    this.setState({
      accessType: accessType,
      userId: id,
    })
  }

  logOut = () => {
    sessionStorage.clear()
    this.setState({
      accessType: sessionStorage.getItem("userType"),
      userId: sessionStorage.getItem("userId")
    })
  }

  render() {
    return (
      <React.Fragment>
        <NavBar userAccess={this.state} logOut={this.logOut} />
        <ApplicationViews userAccess={this.state} setUserId={this.setUserId} />
      </React.Fragment>
    )
  }
}

export default withRouter(HairShop)