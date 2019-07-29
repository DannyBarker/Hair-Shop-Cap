import React, { Component } from "react";
import { CLIENT_RENEG_LIMIT } from "tls";

export default class AppointmentCard extends Component {
  state = {
    saveDisabled: false
  };

  render() {
    return (
      <React.Fragment>
        <div key={this.props.appointment.id} className="appointment-card">
          <input type="checkbox" value="completed" />
          <section className="appointment-name">
            <p>{this.props.getUser(this.props.appointment.request.userId)}</p>
          </section>

          <section className="appointment-time">
            <p>{this.props.appointment.request.day}</p>
            <p>{this.props.appointment.request.time}</p>
          </section>

          <section className="appointment-service">
            <p>
              {
                this.props.getService(this.props.appointment.request.serviceId)
                  .type
              }
            </p>
          </section>

          <section className="appointment-detail">
            <p>{this.props.appointment.request.request_details}</p>
          </section>
          <button
            id="appCancel-btn"
            className="btn btn-warning"
            onClick={() => {
              this.setState({ saveDisabled: true });
              console.log("appCancel-btn pushed");
            }}
            style={{ display: !this.props.appointment.completed ? "" : "none" }}
            disabled={this.state.saveDisabled}
          >
            Canel Appointment
          </button>
          <button
            className="appDel-btn btn btn-danger"
            onClick={() => {
              this.setState({ saveDisabled: true });
              console.log("appDel-btn pushed");
            }}
            style={{ display: this.props.appointment.completed ? "" : "none" }}
            disabled={this.state.saveDisabled}
          >
            Remove Appointment
          </button>
        </div>
      </React.Fragment>
    );
  }
}
