import React, {Component} from 'react';
import './Login.css'
import "bootstrap/dist/css/bootstrap.min.css"

export default class Login extends Component {
  state = {
    email: "",
    password: ""
  };

  handleFieldChange = evt => {
    const stateToChange = {};
    stateToChange[evt.target.id] = evt.target.value;
    this.setState(stateToChange);
  };

  handleLogin = event => {
    event.preventDefault();
    let type = ""

    let findUser = ""

    this.props.users.forEach(user => {
      let email = user.email.toLowerCase()
      if (
        email === this.state.email.toLowerCase() &&
        user.password === this.state.password
      ) {
        type = user.accessType.accessType
        findUser = user
      }
    });

    if (findUser) {
      this.props.setUserId(type, findUser.id)
      if (findUser.accessType.accessType === "user") {
        this.props.history.push("/user/profile")
      } else {
        this.props.history.push("/admin")
      }
    } else {
      alert("Email and Password do not match, please try again.");
    }

  };

  render() {
    return (
      <div className="loginPage-parentDiv">
      <div className="loginPage-div">
        <h1>Login</h1>
        <form className="loginPage-Form" onSubmit={this.handleLogin}>
          <input
            onChange={this.handleFieldChange}
            type="email"
            id="email"
            placeholder="Email"
            className="form-control loginEmail-input"
            autoComplete="username"
          />
          <input
            onChange={this.handleFieldChange}
            type="password"
            id="password"
            placeholder="Password"
            className="form-control loginPass-input"
            autoComplete="current-password"
          />
          <button className="btn btn-primary hvr-icon-fade hvr-shrink" type="submit"><i className="hvr-icon" >Sign in</i></button>
        </form>
      </div>
      </div>
    );
  }
}