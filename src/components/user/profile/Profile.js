import React, { Component } from "react";
import HaircutCard from "../../cards/HaircutCard";
import AppointmentCard from "../../cards/AppointmentCard";
import RequestCard from "../../cards/RequestCard";
import "./Profile.css";
import "bootstrap/dist/css/bootstrap.min.css";

export default class Profile extends Component {
  render() {
    return (
      <React.Fragment>
        {this.props.isAuthenticated() && this.props.isUser() ? (
          <React.Fragment>
            <h1>Profile</h1>
            <div>
              <div className={`userProfile-${this.props.userAccess.userId}`}>
                <h6>
                  <strong>Past Cuts: </strong>
                </h6>
                {this.props
                  .getAppointment(this.props.userAccess.userId)
                  .map(cut =>
                    cut.completed ? (
                      <HaircutCard
                        key={cut.id}
                        haircut={cut}
                        services={this.props.services}
                        addStylistNotes={this.props.addStylistNotes}
                        isAdmin={this.props.isAdmin}
                        sortAppointmentTime={this.props.sortAppointmentTime}
                        giveDate={this.props.giveDate}
                      />
                    ) : (
                      <p key={cut.id}>No past haircuts.</p>
                    )
                  )}
              </div>
              <div
                className={`userAppointments-${this.props.userAccess.userId}`}
              >
                <h6>
                  <strong>Appointments: </strong>
                </h6>
                {this.props
                  .getAppointment(this.props.userAccess.userId)
                  .map(cut =>
                    !cut.completed ? (
                      <AppointmentCard
                        key={cut.id}
                        appointment={cut}
                        getUser={this.props.getUser}
                        getService={this.props.getService}
                        cancelAppointment={this.props.cancelAppointment}
                        checkAppointment={this.props.checkAppointment}
                        addStylistNotes={this.props.addStylistNotes}
                        removeAppointment={this.props.removeAppointment}
                        isAdmin={this.props.isAdmin}
                        sortAppointmentTime={this.props.sortAppointmentTime}
                        giveDate={this.props.giveDate}
                      />
                    ) : (
                      <p key={cut.id}>No Upcoming Appointments.</p>
                    )
                  )}
              </div>
              <div className={`userRequests-${this.props.userAccess.userId}`}>
                <h6>
                  <strong>Pending Requests: </strong>
                </h6>
                {this.props.requests.map(request =>
                  request.statusMessageId === 2 &&
                  request.userId === this.props.userAccess.userId ? (
                    <RequestCard
                      key={request.id}
                      request={request}
                      getUser={this.props.getUser}
                      getService={this.props.getService}
                      acceptRequest={this.props.acceptRequest}
                      denyRequests={this.props.denyRequests}
                      status={this.props.status}
                      isAdmin={this.props.isAdmin}
                      sortAppointmentTime={this.props.sortAppointmentTime}
                      giveDate={this.props.giveDate}
                    />
                  ) : (
                    ""
                  )
                )}
              </div>
            </div>
          </React.Fragment>
        ) : (
          ""
        )}
      </React.Fragment>
    );
  }
}
