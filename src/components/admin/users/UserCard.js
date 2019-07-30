import React, { Component } from "react";

export default class UserCard extends Component {
  state = {
    saveDisabled: false
  };
  render() {
    return (
      <div key={this.props.user.id} className="user-card">
        <h5 className="user-name">{this.props.user.name}</h5>
        <p className="user-email">{this.props.user.email}</p>
        <button
          onClick={() => {
            this.setState({ saveDisabled: true });
            this.props.userDetails(this.props.user.id);
          }}
          disabled={this.state.saveDisabled}
        >
          Details
        </button>
      </div>
    );
  }
}
