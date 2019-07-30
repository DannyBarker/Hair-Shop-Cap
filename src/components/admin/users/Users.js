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
    const newState = {};
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

  userDetails = id => {
    this.props.history.push(`/admin/user/${id}/details`);
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
                  userDetails={this.userDetails}
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
                  userDetails={this.userDetails}
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
