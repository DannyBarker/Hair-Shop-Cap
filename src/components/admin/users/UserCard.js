import React, { Component } from "react";
import UserDetailModal from "./UserDetailModal"

export default class UserCard extends Component {
  state = {
    modal: false,
  };

  toggle = () => {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  };
  render() {
    return (
      <div key={this.props.user.id} className="user-card">
        <h5 className="user-name">{this.props.user.name}</h5>
        <p className="user-email">{this.props.user.email}</p>
        <button
          onClick={() => {
            this.toggle()
          }}
          className="btn btn-primary"
        >
          <UserDetailModal
            modal={this.state.modal}
            toggle={this.toggle}
            user={this.props.user}
            services={this.props.services}
            getAppointment={this.props.getAppointment}
            getRequests={this.props.getRequests}
            addStylistNotes={this.props.addStylistNotes}
            getUser={this.props.getUser}
            getService={this.props.getService}
            cancelAppointment={this.props.cancelAppointment}
            checkAppointment={this.props.checkAppointment}
            removeAppointment={this.props.removeAppointment}
            requests={this.props.requests}
            acceptRequest={this.props.acceptRequest}
          />
        </button>
      </div>
    );
  }
}
