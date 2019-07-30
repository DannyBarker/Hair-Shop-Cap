import React, { Component } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  Input,
  ModalBody,
  ModalFooter
} from "reactstrap";

export default class StylistNotesModal extends Component {
  render() {
    return (
      <div>
        Edit Stylist's Notes
        <Modal
          isOpen={this.props.modal}
          toggle={this.props.toggle}
          className={this.props.className}
          unmountOnClose={this.props.appointment.checked}
        >
          <ModalHeader toggle={this.props.toggle}>Stylist's Notes</ModalHeader>
          <ModalBody>
            <Input
              id="styleNotes-edit"
              type="textarea"
              defaultValue={this.props.appointment.stylistNotes}
              row={10}
            />
          </ModalBody>
          <ModalFooter>
            <Button
              className={`editNotes-${
                this.props.appointment.id
              } btn btn-success`}
              onClick={() => {
                this.props.editStylistNotes(this.props.appointment);
                this.props.toggle();
              }}
            >
              Add Notes
            </Button>{" "}
            <Button
              className={`canceelEditNotes-${
                this.props.appointment.id
              } btn btn-warning`}
              onClick={this.props.toggle}
            >
              Cancel
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}
