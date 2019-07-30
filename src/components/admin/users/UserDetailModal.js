import React, { Component } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import HaircutCard from "../../cards/HaircutCard";
import AppointmentCard from "../../cards/AppointmentCard"

export default class UserDetailModal extends Component {
  render() {
    return (
      <div>
        Details
        <Modal
          isOpen={this.props.modal}
          toggle={this.props.toggle}
          className={this.props.className}
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
              <h6>Past Cuts: </h6>
              {this.props.getAppointment(this.props.user.id).map(cut =>
                cut.completed ? (
                  <HaircutCard
                    key={cut.id}
                    haircut={cut}
                    services={this.props.services}
                    addStylistNotes={this.props.addStylistNotes}
                  />
                ) : (
                  <p>No past haircuts.</p>
                )
              )}
            </div>
            <div className={`userAppointments-${this.props.user.id}`}>
              <h6>Appointments: </h6>
              {this.props.getAppointment(this.props.user.id).map(cut =>
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
              />
                ) : (
                  <p>No Upcoming Appointments.</p>
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
