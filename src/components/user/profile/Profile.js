import React, { Component } from "react";
import HaircutCard from "../../cards/HaircutCard";
import AppointmentCard from "../../cards/AppointmentCard";
import RequestCard from "../../cards/RequestCard";
import "./Profile.css";
import "bootstrap/dist/css/bootstrap.min.css";

export default class Profile extends Component {
  render() {
    return (
      <div className="userProfile-div">
        {this.props.isAuthenticated() && this.props.isUser() ? (
          <React.Fragment>
          <div className="userProfile-header">
            <h1>Profile</h1>
            </div>
              <div
                className="userAppointments-div"
              >
                <h6>
                  <strong>Upcoming Appointments </strong>
                </h6>
                <ul className="userApp-ul">
          <li>Name</li>
          <li>Time</li>
          <li>Service</li>
          <li>Details</li>
        </ul>
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
                        giveDate={this.props.giveDate}
                        sortAppointmentTime={this.props.sortAppointmentTime}
                      />
                    ) : (
                      ""
                    )
                  )}
              </div>
              <div className="userRequests-div">
                <h6>
                  <strong>Pending Requests </strong>
                </h6>
                {this.props.requests.map(request =>
                  request.statusMessageId === 2 &&
                  request.userId === this.props.userAccess.userId && !request.userCancel ? (
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
                      isAuthenticated={this.props.isAuthenticated}
                      isUser={this.props.isUser}
                      services={this.props.services}
                      userAccess={this.props.userAccess}
                      requestEditSubmit={this.props.requestEditSubmit}
                      userRemoveRequest={this.props.userRemoveRequest}
                    />
                  ) : (
                    ""
                  )
                )}
              </div>
              <div className="userDeniedRequests-div" >
                <h6>
                  <strong>Denied Requests </strong>
                </h6>
                {this.props.requests.map(request =>
                  request.statusMessageId > 2 &&
                  request.userId === this.props.userAccess.userId && !request.userCancel ? (
                    <RequestCard
                      key={request.id}
                      request={request}
                      getUser={this.props.getUser}
                      getService={this.props.getService}
                      acceptRequest={this.props.acceptRequest}
                      denyRequests={this.props.denyRequests}
                      status={this.props.status}
                      sortAppointmentTime={this.props.sortAppointmentTime}
                      giveDate={this.props.giveDate}
                      isAdmin={this.props.isAdmin}
                      isAuthenticated={this.props.isAuthenticated}
                      isUser={this.props.isUser}
                      services={this.props.services}
                      userAccess={this.props.userAccess}
                      requestEditSubmit={this.props.requestEditSubmit}
                      userRemoveRequest={this.props.userRemoveRequest}
                      statusMessages={this.props.statusMessages}
                    />
                  ) : (
                    ""
                  )
                )}
                </div>
                <div className="userPastCuts-parentDiv">
                <h6>
                  <strong>Past Cuts </strong>
                </h6>
                <div className="userPastCuts-div">
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
                      ""
                    )
                  )}
                  </div>
              </div>
          </React.Fragment>
        ) : (
          ""
        )}
      </div>
    );
  }
}
