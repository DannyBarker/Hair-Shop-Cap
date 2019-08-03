import React, { Component } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter
} from "reactstrap";

export default class StylistNotesModal extends Component {
  state = {
    userIdRequestEdit: this.props.userAccess.userId,
    serviceIdRequestEdit: this.props.request.serviceId,
    dayRequestEdit: "",
    request_detailsRequestEdit: this.props.request.request_details
  };

  componentDidMount() {
    this.setState({dayRequestEdit: this.giveEditDate()})
  }


  handleFieldChange = evt => {
    const stateToChange = {};
    stateToChange[evt.target.id] = evt.target.value;
    this.setState(stateToChange);
  };

  createReqObj = () => {
    let reqDate = new Date(this.state.dayRequestEdit);
    // let splitDate = reqDate.split(" ")
    let strReqDate = String(reqDate);
    let splitDate = strReqDate.split(" ");
    let newDate = `${splitDate[0]} ${splitDate[1]} ${splitDate[2]} ${
      splitDate[3]
    } ${splitDate[4]} ${splitDate[5]}`;
    let editReq = {
      id: this.props.request.id,
      userId: this.props.userAccess.userId,
      serviceId: +this.state.serviceIdRequestEdit,
      statusMessageId: 2,
      dateTime: newDate,
      request_details: this.state.request_detailsRequestEdit,
      timestamp: Date.now()
    };
    return editReq;
  };

  giveEditDate = () => {
    let dayMonthYear = new Date(this.props.request.dateTime).toLocaleDateString()
    let time = new Date(this.props.request.dateTime).toTimeString()
    let splitTime = time.split(" ")
    let splitDate = dayMonthYear.split("/")
    let editDay = ""
    let editMonth = ""
    if (splitDate[1] < 10) {
      editDay = `0${splitDate[1]}`
    } else {
      editDay = splitDate[1]
    }
    if (splitDate[0] < 10) {
      editMonth = `0${splitDate[0]}`
    } else {
      editMonth = splitDate[0]
    }
    let inputDate = `${splitDate[2]}-${editMonth}-${editDay}`
    let editDate = `${inputDate}T${splitTime[0]}`
    return editDate
  }

  render() {
    return (
      <div>
        Edit Appointment Request
        <Modal
          isOpen={this.props.modal}
          toggle={this.props.toggle}
          className={this.props.className}
        >
          <ModalHeader toggle={this.props.toggle}>Edit Appointment Request</ModalHeader>
          <ModalBody>
          {this.props.isAuthenticated() && this.props.isUser() ? (
          <div>
            <form>
              <div className="form-group">
                <label htmlFor="dayRequestEdit">Day and Time: </label>
                <input
                  onChange={this.handleFieldChange}
                  type="datetime-local"
                  id="dayRequestEdit"
                  placeholder="Day for appointment"
                  defaultValue={this.giveEditDate()}
                  className="form-control"
                />
              </div>
              <div className="form-group">
                <label htmlFor="serviceIdRequestEdit">Service: </label>
                <select
                  id="serviceIdRequestEdit"
                  className="serviceIdRequest-select"
                  onChange={this.handleFieldChange}
                  value={this.props.request.serviceId}
                >
                  <option value="">Select Service</option>
                  {this.props.services.map(service => (
                    <option key={service.id} value={service.id}>
                      {service.type}
                    </option>
                  ))}
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="request_detailsRequestEdit">Details: </label>
                <textarea
                  onChange={this.handleFieldChange}
                  id="request_detailsRequestEdit"
                  placeholder="Extra info or special requests"
                  defaultValue={this.props.request.request_details}
                  className="form-control"
                  row={20}
                  cols={5}
                />
              </div>
            </form>
          </div>
        )
        : ""}
          </ModalBody>
          <ModalFooter>
            <Button
              className={`editRequest-${
                this.props.request.id
              } btn btn-success`}
              onClick={() => {
                this.props.toggle();
                this.props.requestEditSubmit(this.createReqObj())
              }}
            >
              Submit New Request
            </Button>{" "}
            <Button
              className={`canceelEditRequest-${
                this.props.request.id
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
