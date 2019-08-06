import React, { Component } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter
} from "reactstrap";
import Datetime from "react-datetime"

export default class StylistNotesModal extends Component {
  state = {
    userIdRequestEdit: this.props.userAccess.userId,
    serviceIdRequestEdit: this.props.request.serviceId,
    pickedDay: "",
    pickedTime: "",
    request_detailsRequestEdit: this.props.request.request_details,
  };

  componentDidMount() {
    this.setState({
      userIdRequestEdit: this.props.userAccess.userId,
      serviceIdRequestEdit: this.props.request.serviceId,
      request_detailsRequestEdit: this.props.request.request_details,
    })
  }


  handleFieldChange = evt => {
    const stateToChange = {};
    stateToChange[evt.target.id] = evt.target.value;
    this.setState(stateToChange);
  };


  onDateSelect = evt => {
    let wantedDate = Date.parse(evt._d);
    let currAppDate = Date.now()
    let dddd = wantedDate - currAppDate
    if (dddd > 0) {
      let splitInput = String(evt._d).split(" ")
      let strComb = splitInput.slice(0, 4)
      let newDay = strComb.join(" ")
      this.setState({pickedDay: newDay})
    } else {
      this.setState({pickedDay: false})
    }
  }
  onTimeSelect = evt => {
    let splitInput = String(evt._d).split(" ")
    let splitTimePick = splitInput[4].split(":")
    if (+splitTimePick[0] < 20 && +splitTimePick[0] > 6) {
      let strComb = splitInput.slice(4, 6)
      let newTime = strComb.join(" ")
      this.setState({pickedTime: newTime})
    } else {
      this.setState({pickedTime: false})
    }
  }

  createReqObj = () => {
    if (!this.state.pickedDay && !this.state.pickedTime) {
      if (window.confirm("This will create a new request.")) {
        let newReq = {
          id: this.props.request.id,
          userId: this.state.userIdRequestEdit,
          serviceId: +this.state.serviceIdRequestEdit,
          statusMessageId: 2,
          dateTime: this.props.request.dateTime,
          userCancel: false,
          request_details: this.state.request_detailsRequestEdit,
          timestamp: Date.now()
        };
        console.log(newReq);
        this.props.requestEditSubmit(newReq)
        this.props.toggle()
    } else {
      return ""
    }} else if ((this.state.pickedDay && !this.state.pickedTime) || (!this.state.pickedDay && this.state.pickedTime)) {
      alert("You must pick a new day and time.")
    } else if (this.state.pickedDay && this.state.pickedTime) {
        if (window.confirm("This will create a new request.")) {
        let newDate = `${this.state.pickedDay} ${this.state.pickedTime}`;
        let newReq = {
          id: this.props.request.id,
          userId: this.state.userIdRequestEdit,
          serviceId: this.state.serviceIdRequestEdit,
          statusMessageId: 2,
          dateTime: newDate,
          userCancel: false,
          request_details: this.state.request_detailsRequestEdit,
          timestamp: Date.now()
        };
        console.log(newReq);
        this.props.requestEditSubmit(newReq)
        this.props.toggle()
      } else {
        return ""
      }
    }}


  // giveEditDate = () => {
  //   let dayMonthYear = new Date(this.props.request.dateTime).toLocaleDateString()
  //   let time = new Date(this.props.request.dateTime).toTimeString()
  //   let splitTime = time.split(" ")
  //   let splitDate = dayMonthYear.split("/")
  //   let editDay = ""
  //   let editMonth = ""
  //   if (splitDate[1] < 10) {
  //     editDay = `0${splitDate[1]}`
  //   } else {
  //     editDay = splitDate[1]
  //   }
  //   if (splitDate[0] < 10) {
  //     editMonth = `0${splitDate[0]}`
  //   } else {
  //     editMonth = splitDate[0]
  //   }
  //   let inputDate = `${splitDate[2]}-${editMonth}-${editDay}`
  //   let editDate = `${inputDate}T${splitTime[0]}`
  //   return editDate
  // }

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
            <label htmlFor="datePickerId">Day: </label>
              <div id="datePickerId" className="datePicker-div">
                <Datetime input={false} timeFormat={false} onChange={this.onDateSelect} defaultValue={new Date(this.props.request.dateTime)} />
              </div>
              <label htmlFor="timePickerId">Time: </label>
              <div id="timePickerId" className="timePicker-div">
              <Datetime input={false} inputProps={{placeholder: "Time"}} dateFormat={false} onChange={this.onTimeSelect} timeConstraints={{hours: {min: 6, max: 20}}} defaultValue={new Date(Date.now())} />
              </div>
              <div className="form-group">
                <label htmlFor="serviceIdRequestEdit">Service: </label>
                <select
                  id="serviceIdRequestEdit"
                  className="serviceIdRequest-select"
                  onChange={this.handleFieldChange}
                  value={this.state.serviceIdRequestEdit}
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
                this.createReqObj()
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
