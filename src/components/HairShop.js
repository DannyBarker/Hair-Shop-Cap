import { Route, withRouter, Redirect } from 'react-router-dom'
import React, { Component } from 'react'
import API from './apiManager/api'
import './HairShop.css'
import NavBar from './navBar/NavBar'
import ApplicationViews from './applicationViews/ApplicationViews'

export default class HairShop extends Component {
  state = {
    accessType: ""
  }

  changeNav = (accessType) => {
    this.setState({accessType: `${accessType}`})
  }

  render() {
    return (
      <React.Fragment>
        <NavBar accessType={this.state.accessType} />
        <ApplicationViews changeNav={this.changeNav} />
      </React.Fragment>
    )
  }
}