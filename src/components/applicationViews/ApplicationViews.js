import { Route, withRouter, Redirect } from 'react-router-dom'
import React, { Component } from 'react'
import API from '../apiManager/api'
import './ApplicationViews.css'
import About from '../about/About'
import Admin from '../admin/Admin'
import Contact from '../contact/Contact'
import CreateUser from '../create-user/CreateUser'
import Home from '../home/Home'
import Login from '../login/Login'
import RequestAppointment from '../request-appointment/RequestAppointment'
import Services from '../services/Services'
import User from '../user/User'

export default class ApplicationViews extends Component {
  render() {
    return (
      <React.Fragment>
        <Route exact path="/" render={(props) => {
          return <Home />
        }} />
        <Route exact path="/services" render={(props) => {
          return <Services />
        }} />
        <Route exact path="/about" render={(props) => {
          return <About />
        }} />
        <Route exact path="/contact" render={(props) => {
          return <Contact />
        }} />
        <Route exact path="/new" render={(props) => {
          return <RequestAppointment />
        }} />
        <Route exact path="/login" render={(props) => {
          return <Login />
        }} />
        <Route exact path="/create" render={(props) => {
          return <CreateUser />
        }} />
        <Route exact path="/admin" render={(props) => {
          return <Admin />
        }} />
        <Route exact path="/profile" render={(props) => {
          return <User />
        }} />
      </React.Fragment>
    )
  }
}