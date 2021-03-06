import React, { Component } from "react";
import StylistNotesModal from "../admin/appointments/StylistNotesModal";
import EditStylistNotesModal from "../admin/appointments/EditStylistNotesModal";

export default class AppointmentCard extends Component {
  state = {
    saveDisabled: false,
    modal: false
  };

  toggle = () => {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  };

  disableButton = () => {
    this.setState({ saveDisabled: true });
  };

  handleCheck = event => {
    if (this.props.appointment.checked === false) {
      this.setState({ isCompleted: true });
      this.props.checkAppointment(this.props.appointment, true);
    } else {
      this.setState({ isCompleted: false });
      this.props.checkAppointment(this.props.appointment, false);
    }
  };

  render() {
    return (
      <React.Fragment>
        <div
          key={this.props.appointment.id}
          className={
            this.props.appointment.checked && !this.props.appointment.completed
              ? "appointment-card hvr-border-fade"
              : "appointment-card hvr-border-fade"
          }
        >
        <div className={this.props.appointment.checked ? "appointmentCard-details strike" : "appointmentCard-details"}>
          {this.props.isAdmin() && this.props.sortAppointmentTime(this.props.appointment.request) !== "future" ? (
            <input
              style={{
                display:
                  this.props.appointment.checked &&
                  this.props.appointment.stylistNotes
                    ? "none"
                    : ""
              }}
              id="completedAppointment"
              type="checkbox"
              onChange={this.handleCheck}
              checked={this.props.appointment.checked}
            />
          ) : (
            ""
          )}
          <div className="appDetails-childDiv">
          <section className="appointment-name">
            <p>{this.props.getUser(this.props.appointment.request.userId)}</p>
          </section>
</div>
<div className="appDetails-childDiv">
          <section className="appointment-time">
            <p>
              {this.props.appointment.completed ? "Date: " : ""}
              {this.props.giveDate(this.props.appointment.request)}
            </p>
          </section>
</div>
<div className="appDetails-childDiv">
          <section className="appointment-service">
            <p>
              {this.props.appointment.completed ? "Service: " : ""}
              {
                this.props.getService(this.props.appointment.request.serviceId)
                  .type
              }
            </p>
          </section>
          </div>
          <div className="appDetails-childDiv">
          <section className="appointment-detail">
            <p>
              {this.props.appointment.completed ? "Details: " : ""}
              {this.props.appointment.request.request_details}
            </p>
          </section>
          </div>
          {this.props.appointment.stylistNotes ? (
            <div className="appDetails-childDiv">
            <section className="appointment-stylistNotes">
              <p>Stylist's Notes: {this.props.appointment.stylistNotes}</p>
            </section>
</div>
          ) : (
            ""
          )}</div>
          <div className="appointmentCard-btn">
          {!this.props.appointment.stylistNotes &&
          this.props.appointment.checked &&
          this.props.isAdmin() ? (
            <button
              id={`appNotes-${this.props.appointment.id}`}
              className="addStylistNotes-btn btn btn-primary hvr-shrink"
              onClick={() => {
                this.toggle();
              }}
            >
              <StylistNotesModal
                appointment={this.props.appointment}
                addStylistNotes={this.props.addStylistNotes}
                modal={this.state.modal}
                toggle={this.toggle}
              />
            </button>
          ) : (
            ""
          )}
          {this.props.appointment.stylistNotes &&
          this.props.appointment.checked &&
          this.props.isAdmin() ? (
            <button
              id={`editNotes-${this.props.appointment.id}`}
              className="editStylistNotes-btn btn btn-primary hvr-shrink"
              onClick={() => {
                this.toggle();
              }}
            >
              <EditStylistNotesModal
                appointment={this.props.appointment}
                addStylistNotes={this.props.addStylistNotes}
                modal={this.state.modal}
                toggle={this.toggle}
              />
            </button>
          ) : (
            ""
          )}
          <button
            id={`appCancel-${this.props.appointment.id}`}
            className="btn btn-danger hvr-shrink"
            onClick={() => {
              this.disableButton();
              this.props.cancelAppointment(
                this.props.appointment,
                this.props.getUser(this.props.appointment.request.userId)
              )
                ? this.setState({ saveDisabled: true })
                : this.setState({ saveDisabled: false });
            }}
            style={{
              display:
                !this.props.appointment.completed &&
                !this.props.appointment.stylistNotes &&
                !this.props.appointment.checked &&
                this.props.isAdmin()
                  ? ""
                  : "none"
            }}
            disabled={this.state.saveDisabled}
          >
            Cancel Appointment
          </button>
          <button
            className="appDel-btn btn btn-danger hvr-shrink"
            onClick={() => {
              this.disableButton();
              this.props.removeAppointment(this.props.appointment);
            }}
            style={{
              display:
                this.props.appointment.checked &&
                this.props.appointment.stylistNotes &&
                !this.props.appointment.completed &&
                this.props.isAdmin()
                  ? ""
                  : "none"
            }}
            disabled={this.state.saveDisabled}
          >
            Remove Appointment
          </button>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
