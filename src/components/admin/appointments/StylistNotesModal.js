import React, { Component } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  Input,
  ModalBody,
  ModalFooter
} from "reactstrap";
import { thisExpression } from "@babel/types";

export default class StylistNotesModal extends Component {

  render() {
    return (
      <div>
      Add Stylist's Notes
        <Modal
          isOpen={this.props.modal}
          toggle={this.props.toggle}
          className={this.props.className}
          unmountOnClose={!this.props.appointment.checked}
        >
          <ModalHeader toggle={this.props.toggle}>Stylist's Notes</ModalHeader>
          <ModalBody>
            <Input
              id="styleNotes-input"
              type="textarea"
              placeholder="Add Stylist Notes"
              row={10}
            />
          </ModalBody>
          <ModalFooter>
            <Button
              className={`addNotes-${
                this.props.appointment.id
              } btn btn-success`}
              onClick={() => {
                this.props.addStylistNotes(this.props.appointment, "styleNotes-input")
                this.props.toggle()
              }}
            //   style={{
            //   display:
            //     this.state.button
            //       ? ""
            //       : "none"
            // }}
            >
              Add Notes
            </Button>{" "}
            <Button
              className={`canceelNotes-${
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
