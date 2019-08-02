import { withRouter } from 'react-router-dom'
import React, { Component } from 'react'
import './HairShop.css'
import NavBar from './navBar/NavBar'
import ApplicationViews from './applicationViews/ApplicationViews'

class HairShop extends Component {
  state = {
    accessType: sessionStorage.getItem("userType"),
    userId: +sessionStorage.getItem("userId"),
  }

  componentDidMount() {
    this.handleScroll()
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = () => {
    let scroll = window.scrollY
    let navbar = document.getElementsByClassName("nav-tabs")[0]
    let sticky = navbar.getBoundingClientRect()
    let takeAway = sticky.bottom + scroll
    console.log(scroll);
    let test = sticky.bottom - scroll
    if (sticky.top <= 0) {
      navbar.classList.add("sticky")
    }

    if (test > 0) {
      navbar.classList.remove("sticky")
    }
  };


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
        <NavBar userAccess={this.state} logOut={this.logOut} {...this.props} />
        <ApplicationViews userAccess={this.state} setUserId={this.setUserId} />
      </React.Fragment>
    )
  }
}

export default withRouter(HairShop)