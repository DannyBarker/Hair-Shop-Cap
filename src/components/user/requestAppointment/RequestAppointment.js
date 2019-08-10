import React, { Component } from "react";
import Datetime from "react-datetime"
import '../User.css'

export default class RequestAppointment extends Component {
  state = {
    userIdRequest: "",
    serviceIdRequest: "",
    statusMessageIdRequest: "",
    dayRequest: "",
    request_detailsRequest: "",
    pickedDay: "",
    pickedTime: ""
  };

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
      return ""
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
      return ""
    }
  }

  createReqObj = () => {
   if (this.state.pickedDay && this.state.pickedTime) {
     if (this.state.serviceIdRequest) {
       let newDate = `${this.state.pickedDay} ${this.state.pickedTime}`;
       let newReq = {
         userId: this.props.userAccess.userId,
         serviceId: +this.state.serviceIdRequest,
         statusMessageId: 2,
         dateTime: newDate,
         userCancel: false,
         request_details: this.state.request_detailsRequest,
         timestamp: Date.now()
       };
       this.props.requestSubmit(newReq)
     } else {
      alert("Please fill out first two fields!")
     }
   } else {
     alert("Please pick a valid date and time!")
   }
  };

  render() {
    return (
      <div className="userRequestApp-parentDiv">
        {this.props.isAuthenticated() && this.props.isUser() ? (
      <div className="userRequestApp-div">
            <h1>Request Appointment</h1>
          <div className="userRequestApp-formDiv">
            <form
              onSubmit={evt => {
                evt.preventDefault();
                this.createReqObj();
              }}
            >
                <label htmlFor="datePickerId">Day: </label>
              <div id="datePickerId" className="datePicker-div">
                <Datetime input={false} timeFormat={false} onChange={this.onDateSelect} />
              </div>
              <label htmlFor="timePickerId">Time (Hours: 6 a.m - 8 p.m.): </label>
              <div id="timePickerId" className="timePicker-div">
              <Datetime input={false} inputProps={{placeholder: "Time"}} dateFormat={false} onChange={this.onTimeSelect} timeConstraints={{hours: {min: 6, max: 20}}} defaultValue={new Date(Date.now())} />
              </div>
              <div className="form-group">
                <label htmlFor="serviceIdRequest">Service: </label>
                <select
                  id="serviceIdRequest"
                  className="serviceIdRequest-select"
                  onChange={this.handleFieldChange}
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
                <label htmlFor="request_detailsRequest">Details: </label>
                <textarea
                  onChange={this.handleFieldChange}
                  id="request_detailsRequest"
                  placeholder="Extra info or special requests"
                  className="form-control"
                  row={20}
                  cols={5}
                />
              </div>
              <button type="submit" className="submitReq-btn btn btn-primary hvr-shrink">Submit Request</button>
            </form>
          </div>
      </div>
        ) : (
          <p className="reqApp-nonUsr">
            <button className="hvr-underline-reveal" style={{background: "transparent", border: "none", color: "#0097c9"}} onClick={() => this.props.history.push("/login")}>Log In</button> or{" "}
            <button className="hvr-underline-reveal" style={{background: "transparent", border: "none", color: "#0097c9"}} onClick={() => this.props.history.push("/create/user")}>
              Create a Profile
            </button>{" "}
            to request an appointment!
          </p>
        )}
        </div>
    );
  }
}
