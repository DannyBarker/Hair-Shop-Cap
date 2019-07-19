import { Route, withRouter, Redirect } from 'react-router-dom'
import React, { Component } from 'react'
import './User.css'
import Profile from './profile/Profile'

export default class User extends Component {
  render() {
    return (
      <Profile />
    )
  }
}