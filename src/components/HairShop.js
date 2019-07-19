import { Route, withRouter, Redirect } from 'react-router-dom'
import React, { Component } from 'react'
import API from './apiManager/api'
import './HairShop.css'
import NavBar from './navBar/NavBar'
import ApplicationViews from './applicationViews/ApplicationViews'

export default class HairShop extends Component {
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <ApplicationViews />
      </React.Fragment>
    )
  }
}