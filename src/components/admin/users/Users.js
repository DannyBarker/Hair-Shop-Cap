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
      <div className="adminUsers-parentDiv">
        <header className="adminUsers-header">
          <h1>Users</h1>
          <div className="searchUsersInput-div">
          <label htmlFor="searchUsers">Search For User</label>
          <input
            id="searchUsers"
            className="form-control"
            type="text"
            placeholder="Name"
            onKeyPress={this.inputEvent}
          /></div>
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
                  isAdmin={this.props.isAdmin}
                  isUser={this.props.isUser}
                  sortAppointmentTime={this.props.sortAppointmentTime}
                  giveDate={this.props.giveDate}
                  statusMessages={this.props.statusMessages}
                />
              ) : (
                ""
              )
            )}
          </div>
        ) : (
          <div className="adminUsers-Div">
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
                  isAdmin={this.props.isAdmin}
                  sortAppointmentTime={this.props.sortAppointmentTime}
                  giveDate={this.props.giveDate}
                  isUser={this.props.isUser}
                  statusMessages={this.props.statusMessages}
                />
              ) : (
                ""
              )
            )}
          </div>
        )}
        </div>
      </React.Fragment>
    );
  }
}
