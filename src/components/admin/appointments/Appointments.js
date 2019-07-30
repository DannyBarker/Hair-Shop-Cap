import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import AppointmentCard from "../../cards/AppointmentCard";
import "./Appointments.css";
import "bootstrap/dist/css/bootstrap.min.css";

class Appointments extends Component {
  addNotes = () => {
    this.props.history.push("/admin/stylistNotes")
  }

  render() {
    return (
      <React.Fragment>
        <h1>Appointments:</h1>
        <ul>
          <li>Name:</li>
          <li>Time:</li>
          <li>Service</li>
          <li>Details:</li>
        </ul>
        <div className="appointments-div">
          {this.props.appointments.map(appointment =>
            appointment.completed ? (
              ""
            ) : (
              <AppointmentCard
                key={appointment.id}
                appointment={appointment}
                getUser={this.props.getUser}
                getService={this.props.getService}
                cancelAppointment={this.props.cancelAppointment}
                checkAppointment={this.props.checkAppointment}
                addNotes={this.addNotes}
                addStylistNotes={this.props.addStylistNotes}
                removeAppointment={this.props.removeAppointment}
              />
            )
          )}
        </div>
      </React.Fragment>
    );
  }
}

export default withRouter(Appointments)