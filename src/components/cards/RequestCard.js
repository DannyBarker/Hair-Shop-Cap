import React, { Component } from "react";
import DenyModule from "../admin/requests/DenyModule"

export default class RequestCard extends Component {
  state = {
    saveDisabled: false,
    modal: false
  };

  toggle = () => {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  };
  render() {
    return (
      <div key={this.props.request.id} className="request-card">
        <p className="requestUser-Name">
          {this.props.getUser(this.props.request.userId)}
        </p>
        <p className="request-day">Day: {" "}{this.props.request.day}</p>
        <p className="request-time">Time: {" "}{this.props.request.time}</p>
        <p className="request-service">
          Service: {" "}{this.props.getService(this.props.request.serviceId).type}
        </p>
        <p className="request-details">Details: {" "}{this.props.request.request_details}</p>
        <button
          id="acceptRequest-btn"
          className="accRequest-btn btn btn-success"
          onClick={() => {
            !this.props.acceptRequest(this.props.request) ? this.setState({ saveDisabled: false }) : this.setState({ saveDisabled: true })
          }}
          disabled={this.state.saveDisabled}
        >
          Accept
        </button>
        <button
            id="adminDenyRequest-btn"
            className="denyRequest-btn btn btn-warning"
            onClick={() => {
              this.toggle();
            }}
          >
            <DenyModule
            modal={this.state.modal}
            toggle={this.toggle}
            status={this.props.status}
            request={this.props.request}
            denyRequests={this.props.denyRequests}
          />
          </button>
      </div>
    );
  }
}
