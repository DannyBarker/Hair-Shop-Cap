import React, {Component} from 'react';

export default class UserCard extends Component {
  render() {
    return (
      <div className="user-card">
        <h5 className="user-name">{`${this.props.user.firstName} ${this.props.user.lastName}`}</h5>
        <p className="user-email">{this.props.user.email}</p>
        <button>Details</button>
      </div>
    )
  }
}