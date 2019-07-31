import React, { Component } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter
} from "reactstrap";

export default class DenyModule extends Component {
  state = {
    denyReason: ""
  }

  handleFieldChange = evt => {
    const stateToChange = {};
    stateToChange[evt.target.id] = evt.target.value;
    this.setState(stateToChange);
  };
  render() {
    return (
      <div>
        Deny
        <Modal
          isOpen={this.props.modal}
          toggle={this.props.toggle}
          className={this.props.className}
        >
          <ModalHeader toggle={this.props.toggle}>Reason For Decline:</ModalHeader>
          <ModalBody>
          <select id="denyReason" className="denyReason-select" onChange={this.handleFieldChange}>
            <option value="">Select Reason for Decline</option>
            {
              this.props.status.map( reason => reason.statusId !== 1 && reason.statusId !== 2 ? <option key={reason.id} value={reason.id}>{reason.message}</option> : "")
            }
          </select>
          </ModalBody>
          <ModalFooter>
            <Button
              className="denyRequest-btn btn btn-danger"
              onClick={() => this.props.denyRequests(this.props.request, +this.state.denyReason)}
              style={{
              display:
                this.state.denyReason
                  ? ""
                  : "none"
            }}
            >
              Submit
            </Button>
            <Button
              className="cancelDenyRequest-btn btn btn-warning"
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