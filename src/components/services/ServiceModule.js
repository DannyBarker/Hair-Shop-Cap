import React, { Component } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter
} from "reactstrap";

export default class ServiceModule extends Component {

  render() {
    return (
      <div className="serviceType-modal">
        <p>{this.props.service.type}</p>
        <Modal
          isOpen={this.props.modal}
          toggle={this.props.toggle}
          className={this.props.className}
        >
          <ModalHeader toggle={this.props.toggle}>{this.props.service.type}</ModalHeader>
          <ModalBody>
            <p>{this.props.service.service_details}</p>
            <p>Starting Cost: {`$ ${this.props.service.price}`}</p>
          </ModalBody>
          <ModalFooter>
            <Button
              className={`closeService-${this.props.service.id} btn btn-warning`}
              onClick={this.props.toggle}
            >
              Close
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}