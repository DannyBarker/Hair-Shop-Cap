import React, {Component} from 'react';
import './Login.css'
import "bootstrap/dist/css/bootstrap.min.css"

export default class Login extends Component {
  state = {
    email: "",
    password: ""
  };

  // Update state whenever an input field is edited
  handleFieldChange = evt => {
    const stateToChange = {};
    stateToChange[evt.target.id] = evt.target.value;
    this.setState(stateToChange);
  };

  // Simplistic handler for login submit
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
        this.props.history.push("/")
      } else {
        this.props.history.push("/admin")
      }
    } else {
      alert("Email and Password do not match, please try again.");
    }

  };

  render() {
    return (
      <div>
        <h1>Login</h1>
        <form onSubmit={this.handleLogin}>
          <input
            onChange={this.handleFieldChange}
            type="email"
            id="email"
            placeholder="Email"
            className="form-control"
            autoComplete="username"
          />
          <input
            onChange={this.handleFieldChange}
            type="password"
            id="password"
            placeholder="Password"
            className="form-control"
            autoComplete="current-password"
          />
          <button type="submit">Sign in</button>
          {/* <label htmlFor="Remember Me">
            <input
              id="rememberMe"
              name="rememberMe"
              value="remember"
              type="checkbox"
              onClick={() => {
                this.setState({ rememberMe: true });
              }}
            />
            Remember Me
          </label> */}
        </form>
      </div>
    );
  }
}