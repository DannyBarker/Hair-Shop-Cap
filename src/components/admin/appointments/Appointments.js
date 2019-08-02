import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import AppointmentCard from "../../cards/AppointmentCard";
import "./Appointments.css";
import "bootstrap/dist/css/bootstrap.min.css";

class Appointments extends Component {
  state = {
    past: false,
    current: true,
    future: false,
    all: true
  };
  getPastAppointments = () => {
    let pastApps = this.props.appointments.filter(appointment => {
      if (
        appointment.completed &&
        this.props.sortAppointmentTime(appointment.request) === "past"
      ) {
        return appointment;
      } else {
        return ""
      }
    });
    return pastApps;
  };
  getCertainAppointments = day => {
    let appsArr = this.props.appointments.filter(appointment => {
      if (
        !appointment.completed &&
        this.props.sortAppointmentTime(appointment.request) === day
      ) {
        return appointment;
      } else {
        return ""
      }
    });
    return appsArr;
  };
  checkTF = day => {
    let result = true
    this.props.appointments.forEach(appointment => {
      if (
        !appointment.completed &&
        this.props.sortAppointmentTime(appointment.request) === day
      ) {
        result = false
      }
    });
    return result
  }
  checkPastTF = () => {
    let result = true
    this.props.appointments.forEach(appointment => {
      if (
        appointment.completed &&
        this.props.sortAppointmentTime(appointment.request) === "past"
      ) {
        result = false
      }
    });
    return result
  }

  render() {
    return (
      <React.Fragment>
      <div className="adminApp-div">
        <h1>Appointments:</h1>
        <div className="adminAppFilter-btns">
        {!this.state.past || !this.state.all ? (
          <button
            className="adminPast-apps btn btn-primary"
            onClick={() =>
              this.setState({
                past: true,
                current: false,
                future: false,
                all: true
              })
            }
          >
            Past Appointments
          </button>
        ) : (
          ""
        )} {" "}
        {!this.state.current || !this.state.all ? (
          <button
            className="adminCurrent-apps btn btn-primary"
            onClick={() =>
              this.setState({
                past: false,
                current: true,
                future: false,
                all: true
              })
            }
          >
            Today's Appointments
          </button>
        ) : (
          ""
        )} {" "}
        {!this.state.future || !this.state.all ? (
          <button
            className="adminFuture-apps btn btn-primary"
            onClick={() =>
              this.setState({
                past: false,
                current: false,
                future: true,
                all: true
              })
            }
          >
            Upcoming Appointments
          </button>
        ) : (
          ""
        )} {" "}
        {!this.state.all ? (
          ""
        ) : (
          <button
            className="adminAll-apps btn btn-primary"
            onClick={() =>
              this.setState({
                past: true,
                current: true,
                future: true,
                all: false
              })
            }
          >
            All Appointments
          </button>
        )}</div> {" "}
        <div className="appointments-div">
        {this.state.past ? (
            <React.Fragment>
              <h4>Past Appointments</h4>
              <ul className="adminApp-ul">
          <li>Name:</li>
          <li>Time:</li>
          <li>Service</li>
          <li>Details:</li>
        </ul>
              {this.checkPastTF() ? (
                <p>No past appointments.</p>
              ) : (
                ""
              )}
              {this.getPastAppointments()
                ? this.getPastAppointments().map(appointment => {
                    return (
                      <AppointmentCard
                        key={appointment.id}
                        appointment={appointment}
                        getUser={this.props.getUser}
                        getService={this.props.getService}
                        cancelAppointment={this.props.cancelAppointment}
                        checkAppointment={this.props.checkAppointment}
                        addStylistNotes={this.props.addStylistNotes}
                        removeAppointment={this.props.removeAppointment}
                        isAdmin={this.props.isAdmin}
                        giveDate={this.props.giveDate}
                        sortAppointmentTime={this.props.sortAppointmentTime}
                      />
                    );
                  })
                : ""}
            </React.Fragment>
          ) : (
            ""
          )}
          {this.state.current ? (
            <React.Fragment>
              <h4>Today's Appointments</h4>
              <ul className="adminApp-ul">
          <li>Name:</li>
          <li>Time:</li>
          <li>Service</li>
          <li>Details:</li>
        </ul>
              {this.checkTF("current") ? (
                <p>No appointments, today.</p>
              ) : (
                ""
              )}
              {this.getCertainAppointments("current")
                ? this.getCertainAppointments("current").map(appointment => {
                    return (
                      <AppointmentCard
                        key={appointment.id}
                        appointment={appointment}
                        getUser={this.props.getUser}
                        getService={this.props.getService}
                        cancelAppointment={this.props.cancelAppointment}
                        checkAppointment={this.props.checkAppointment}
                        addStylistNotes={this.props.addStylistNotes}
                        removeAppointment={this.props.removeAppointment}
                        isAdmin={this.props.isAdmin}
                        giveDate={this.props.giveDate}
                        sortAppointmentTime={this.props.sortAppointmentTime}
                      />
                    );
                  })
                : ""}
            </React.Fragment>
          ) : (
            ""
          )}
          {this.state.future ? (
            <React.Fragment>
              <h4>Upcoming Appointments</h4>
              <ul className="adminApp-ul">
          <li>Name:</li>
          <li>Time:</li>
          <li>Service</li>
          <li>Details:</li>
        </ul>
              {this.checkTF("future") ? (
                <p>No upcoming appointments.</p>
              ) : (
                ""
              )}
              {this.getCertainAppointments("future")
                ? this.getCertainAppointments("future").map(appointment => {
                    return (
                      <AppointmentCard
                        key={appointment.id}
                        appointment={appointment}
                        getUser={this.props.getUser}
                        getService={this.props.getService}
                        cancelAppointment={this.props.cancelAppointment}
                        checkAppointment={this.props.checkAppointment}
                        addStylistNotes={this.props.addStylistNotes}
                        removeAppointment={this.props.removeAppointment}
                        isAdmin={this.props.isAdmin}
                        giveDate={this.props.giveDate}
                        sortAppointmentTime={this.props.sortAppointmentTime}
                      />
                    );
                  })
                : ""}
            </React.Fragment>
          ) : (
            ""
          )}
        </div>
        </div>
      </React.Fragment>
    );
  }
}

export default withRouter(Appointments);
