import { Route, withRouter, Redirect } from 'react-router-dom'
import React, { Component } from 'react'
import API from './apiManager/api'
import './ApplicationViews.css'
import About from './about/About'
import Admin from './admin/Admin'
import Contact from './contact/Contact'
import CreateUser from './create-user/CreateUser'
import Home from './home/Home'
import Login from './login/Login'
import RequestAppointment from './request-appointment/RequestAppointment'
import Services from './services/Services'
import User from './user/User'

export default class ApplicationViews extends Component {
  render() {
    return (
      <React.Fragment>
        <Home />
        <Services />
        <About />
        <Contact />
        <RequestAppointment />
        <Login />
        <CreateUser />
        <Admin />
        <User />
      </React.Fragment>
    )
  }
}