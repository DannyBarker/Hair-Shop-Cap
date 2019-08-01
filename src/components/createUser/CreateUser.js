import React, { Component } from "react";

export default class CreateUser extends Component {
  state = {
      firstNameCreate: "",
      lastNameCreate: "",
      emailCreate: "",
      passOneCreate: "",
      passTwoCreate: ""
  };

  handleFieldChange = evt => {
    const stateToChange = {};
    stateToChange[evt.target.id] = evt.target.value;
    this.setState(stateToChange);
  };

  createReqObj = () => {
    let firstName = this.state.firstNameCreate.charAt(0).toLocaleUpperCase() + this.state.firstNameCreate.slice(1)
    let lastName = this.state.lastNameCreate.charAt(0).toLocaleUpperCase() + this.state.lastNameCreate.slice(1)
    let newName = `${firstName} ${lastName}`
    let newUser = {
        accessTypeId: 2,
        name: newName,
        email: this.state.emailCreate,
        password: this.state.passOneCreate
    }
    this.props.userCreate(newUser)
  };

  render() {
    return (
          <div>
            <h1>Create Profile</h1>
            <form
              onSubmit={evt => {
                evt.preventDefault();
                this.props.verifyCreateFields(this.createReqObj)
              }}
            >
              <div className="form-group">
                <label htmlFor="firstNameCreate">First Name: </label>
                <input
                  onChange={this.handleFieldChange}
                  type="text"
                  id="firstNameCreate"
                  placeholder="First Name"
                  className="form-control"
                />
              </div>
              <div className="form-group">
                <label htmlFor="lastNameCreate">Last Name: </label>
                <input
                  onChange={this.handleFieldChange}
                  type="text"
                  id="lastNameCreate"
                  placeholder="Last Name"
                  className="form-control"
                />
              </div>
              <div className="form-group">
                <label htmlFor="emailCreate">Email: </label>
                <input
                  onChange={this.handleFieldChange}
                  type="text"
                  id="emailCreate"
                  placeholder="Email"
                  className="form-control"
                  autoComplete="username"
                />
              </div>
              <div className="form-group">
                <label htmlFor="passOneCreate">Password: </label>
                <input
                  onChange={this.handleFieldChange}
                  type="password"
                  id="passOneCreate"
                  placeholder="Password"
                  className="form-control"
                  autoComplete="new-password"
                />
                <input
                  onChange={this.handleFieldChange}
                  type="password"
                  id="passTwoCreate"
                  placeholder="Confirm Password"
                  className="form-control"
                  autoComplete="new-password"
                />
              </div>
              <button className="createUser-btn btn btn-success" type="submit">Create Profile</button>
            </form>
          </div>
    )
}}