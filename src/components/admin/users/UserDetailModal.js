import React, { Component } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import HaircutCard from "../../cards/HaircutCard";
import AppointmentCard from "../../cards/AppointmentCard";
import RequestCard from "../../cards/RequestCard";

export default class UserDetailModal extends Component {
  state = {
    scroll: true
  };
  render() {
    return (
      <div>
        Details
        <Modal
          isOpen={this.props.modal}
          toggle={this.props.toggle}
          className={this.props.className}
          scrollable={this.state.scroll}
        >
          <ModalHeader toggle={this.props.toggle}>
            <strong>{this.props.user.name}</strong>
            <p>
              <small>
                <small>{this.props.user.email}</small>
              </small>
            </p>
          </ModalHeader>
          <ModalBody>
            <div className={`userPastCuts-${this.props.user.id}`}>
              <h6><strong>Past Cuts: </strong></h6>
              {this.props
                .getAppointment(this.props.user.id)
                .map(cut =>
                  cut.completed ? (
                    <HaircutCard
                      key={cut.id}
                      haircut={cut}
                      services={this.props.services}
                      addStylistNotes={this.props.addStylistNotes}
                      isAdmin={this.props.isAdmin}
                      giveDate={this.props.giveDate}
                    />
                  ) : (
                    ""
                  )
                )}
            </div>
            <div className={`userAppointments-${this.props.user.id}`}>
              <h6><strong>Appointments: </strong></h6>
              {this.props
                .getAppointment(this.props.user.id)
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
            <div className={`userRequests-${this.props.user.id}`}>
              <h6><strong>Pending Requests: </strong></h6>
              {this.props.requests.map(request =>
                request.statusMessageId === 2 && request.userId === this.props.user.id ? (
                  <RequestCard
                    key={request.id}
                    request={request}
                    getUser={this.props.getUser}
                    getService={this.props.getService}
                    acceptRequest={this.props.acceptRequest}
                    denyRequests={this.props.denyRequests}
                    status={this.props.status}
                    isAdmin={this.props.isAdmin}
                    giveDate={this.props.giveDate}
                    isUser={this.props.isUser}
                    userRemoveRequest={this.props.userRemoveRequest}
                    statusMessages={this.props.statusMessages}
                  />
                ) : (
                  ""
                )
              )}
            </div>
          </ModalBody>
          <ModalFooter>
            <Button
              className={`userDetails-${this.props.user.id} btn btn-primary`}
              onClick={() => {
                this.props.toggle();
              }}
            >
              Close
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}
