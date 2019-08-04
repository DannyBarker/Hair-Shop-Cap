import React, { Component } from "react";
import EditStylistNotesModal from "../admin/appointments/EditStylistNotesModal";

export default class HaircutCard extends Component {
  state = {
    modal: false
  };

  toggle = () => {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  };

  getService = id => {
    let service = "";
    this.props.services.forEach(oneService => {
      if (oneService.id === id) {
        service = oneService;
      }
    });
    return service;
  };

  render() {
    return (
      <React.Fragment>
        <div className="haircut-card card">
          <p><b>Date:</b> {this.props.giveDate(this.props.haircut.request)}</p>
          <p>
            <b>Service:</b>{" "}
            {this.getService(this.props.haircut.request.serviceId).type}
          </p>
          <p><b>Details:</b> {this.props.haircut.request.request_details} </p>
          <p><b>Stylist's Notes:</b> {this.props.haircut.stylistNotes}</p>
          {this.props.isAdmin() ? (
            <button
              id="editNotes"
              className="editNotes-btn btn btn-success"
              onClick={() => {
                this.toggle();
              }}
            >
              <EditStylistNotesModal
                appointment={this.props.haircut}
                addStylistNotes={this.props.addStylistNotes}
                modal={this.state.modal}
                toggle={this.toggle}
              />
            </button>
          ) : (
            ""
          )}
        </div>
      </React.Fragment>
    );
  }
}
