import React, { Component } from "react";
import UserCard from "./UserCard";
import "./Users.css";
import "bootstrap/dist/css/bootstrap.min.css";

export default class Users extends Component {
state = {
  userResults: [],
  searchInput: false
}


  inputEvent = event => {
    if (event.key === "Enter") {
      let input = document.getElementById("searchUsers").value;
      console.log();
      fetch(`http://localhost:5002/users?name_like=${input}`)
        .then(r => r.json())
        .then(users => this.setState({
          searchInput: true,
          userResults: users
        }))
    }
  };

  render() {
    return (
      <React.Fragment>
        <header className="adminUsers-header">
          <h1>Users</h1>
          <input
            id="searchUsers"
            type="text"
            placeholder="Search Users"
            onKeyPress={this.inputEvent}
          />
        </header>
        {!this.state.searchInput ? (
          <div className="adminUsers-Div">
            {this.props.users.map(user =>
              user.accessTypeId === 2 ? (
                <UserCard
                  key={user.id}
                  user={user}
                  appointments={this.props.appointments}
                  requests={this.props.requests}
                  services={this.props.services}
                  getAppointment={this.props.getAppointment}
                  getRequests={this.props.getRequests}
                  addStylistNotes={this.props.addStylistNotes}
                  getUser={this.props.getUser}
                  getService={this.props.getService}
                  cancelAppointment={this.props.cancelAppointment}
                  checkAppointment={this.props.checkAppointment}
                  removeAppointment={this.props.removeAppointment}
                  acceptRequest={this.props.acceptRequest}
                  denyRequests={this.props.denyRequests}
                  status={this.props.status}
                />
              ) : (
                ""
              )
            )}
          </div>
        ) : (
          <div className="adminUsersSearch-Div">
            {this.state.userResults.map(user =>
              user.accessTypeId === 2 ? (
                <UserCard
                  key={user.id}
                  user={user}
                  appointments={this.props.appointments}
                  requests={this.props.requests}
                  services={this.props.services}
                  getAppointment={this.props.getAppointment}
                  getRequests={this.props.getRequests}
                  addStylistNotes={this.props.addStylistNotes}
                  getUser={this.props.getUser}
                  getService={this.props.getService}
                  cancelAppointment={this.props.cancelAppointment}
                  checkAppointment={this.props.checkAppointment}
                  removeAppointment={this.props.removeAppointment}
                  acceptRequest={this.props.acceptRequest}
                  denyRequests={this.props.denyRequests}
                  status={this.props.status}
                />
              ) : (
                ""
              )
            )}
          </div>
        )}
      </React.Fragment>
    );
  }
}
