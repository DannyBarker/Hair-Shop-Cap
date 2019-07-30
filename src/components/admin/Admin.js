// import { Route, withRouter, Redirect } from 'react-router-dom'
import React, { Component } from 'react'
import './Admin.css'
import Appointments from './appointments/Appointments'
import Requests from './requests/Requests'
import Users from './users/Users'

export default class Admin extends Component {
  render() {
    return (
      <React.Fragment>
        <Appointments />
        <Requests />
        <Users />
      </React.Fragment>
    )
  }
}