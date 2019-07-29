import React, { Component } from "react";

export default class RequestCard extends Component {
  state = {
    saveDisabled: false
  };
  render() {
    return (
      <div key={this.props.request.id} className="request-card">
        <p className="requestUser-Name">
          {this.props.getUser(this.props.request.userId)}
        </p>
        <p className="request-day">{this.props.request.day}</p>
        <p className="request-time">{this.props.request.time}</p>
        <p className="request-service">
          {this.props.getService(this.props.request.serviceId).type}
        </p>
        <p className="request-details">{this.props.request.request_details}</p>
        <button
          id="acceptRequest-btn"
          className="btn btn-warning"
          onClick={() =>
            this.setState(
              { saveDisabled: true },
              console.log("denyRequest-btn clicked")
            )
          }
          disabled={this.state.saveDisabled}
        >
          Accept
        </button>
        <button
          className="denyRequest-btn btn btn-danger"
          onClick={() =>
            this.setState(
              { saveDisabled: true },
              console.log("denyRequest-btn clicked")
            )
          }
          disabled={this.state.saveDisabled}
        >
          Deny
        </button>
      </div>
    );
  }
}
