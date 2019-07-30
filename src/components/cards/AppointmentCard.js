import React, { Component } from "react";
import StylistNotesModal from "../admin/appointments/StylistNotesModal";

export default class AppointmentCard extends Component {
  state = {
    saveDisabled: false,
    stylistNotes: "",
    isCompleted: false
  };

  // handleFieldChange = evt => {
  //   const stateToChange = {};
  //   stateToChange[evt.target.id] = evt.target.value;
  //   this.setState(stateToChange);
  // };

  handleCheck = event => {
    if (this.state.isCompleted === false) {
      this.setState({isCompleted: true})
    } else {
      this.setState({isCompleted: false})
    }
  };

  render() {
    return (
      <React.Fragment>
        <div key={this.props.appointment.id} className={this.state.isCompleted ? "appointment-card strike" : "appointment-card"}>
          <input
            id="completedAppointment"
            type="checkbox"
            onChange={this.handleCheck}
          />
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
            id={`appNotes-${this.props.appointment.id}`}
            className="btn btn-success"
            onClick={() => {
              this.setState({ saveDisabled: true });
              this.props.addNotes();
            }}
            style={{
              display:
                this.state.isCompleted
                  ? ""
                  : "none"
            }}
            disabled={this.state.saveDisabled}
          >
            Add Stylist Notes
          </button>
          <button
            id={`appCancel-${this.props.appointment.id}`}
            className="btn btn-warning"
            onClick={() => {
              this.setState({ saveDisabled: true });
              this.props.cancelAppointment(
                this.props.appointment,
                this.props.getUser(this.props.appointment.request.userId)
              )
                ? this.setState({ saveDisabled: true })
                : this.setState({ saveDisabled: false });
            }}
            style={{
              display:
                !this.state.isCompleted
                  ? ""
                  : "none"
            }}
            disabled={this.state.saveDisabled}
          >
            Cancel Appointment
          </button>
          <button
            className="appDel-btn btn btn-danger"
            onClick={() => {
              this.setState({ saveDisabled: true });
              console.log("appDel-btn pushed");
            }}
            style={{
              display:
                this.props.appointment.stylistNotes &&
                !this.props.appointment.completed
                  ? ""
                  : "none"
            }}
            disabled={this.state.saveDisabled}
          >
            Remove Appointment
          </button>
        </div>
      </React.Fragment>
    );
  }
}
