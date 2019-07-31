import React, { Component } from "react";

export default class RequestAppointment extends Component {
  state = {
    userIdRequest: "",
    serviceIdRequest: "",
    statusMessageIdRequest: "",
    dayRequest: "",
    request_detailsRequest: ""
  };

  // Update state whenever an input field is edited
  handleFieldChange = evt => {
    const stateToChange = {};
    stateToChange[evt.target.id] = evt.target.value;
    this.setState(stateToChange);
  };

  // Simplistic handler for login submit
  createReqObj = () => {
    let reqDate = new Date(this.state.dayRequest);
    // let splitDate = reqDate.split(" ")
    let strReqDate = String(reqDate);
    let splitDate = strReqDate.split(" ");
    let newDate = `${splitDate[0]} ${splitDate[1]} ${splitDate[2]} ${splitDate[3]} ${splitDate[4]} ${splitDate[5]}`;
    let newReq = {
      userId: this.props.userAccess.userId,
      serviceId: +this.state.serviceIdRequest,
      statusMessageId: 2,
      dateTime: newDate,
      request_details: this.state.request_detailsRequest,
      timestamp: Date.now()
    };
    return newReq
  };

  //<div style={{overflow: "hidden"}}>
  //      <div className="form-group">
  //       <div className="row">
  //         <div className="col-md-8">
  //         <div id="datetimepicker12" />
  //     </div>
  // </div>
  //         </div>
  //     </div>
  //   <script type="text/javascript">
  //   $(function (){" "}
  //   {$("#datetimepicker12").datetimepicker({
  //     inline: true,
  //     sideBySide: true
  //   })}
  //   );
  // </script>

  render() {
    return (
      <div>
        <h1>Request Appointment</h1>
        <form onSubmit={(evt) => {
          evt.preventDefault()
          this.props.requestSubmit(this.createReqObj())
          }}>
          <div className="form-group">
            <label htmlFor="dayRequest">Day and Time: </label>
            <input
              onChange={this.handleFieldChange}
              type="datetime-local"
              id="dayRequest"
              placeholder="Day for appointment"
              className="form-control"
            />
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
          <button type="submit">Sign in</button>
        </form>
      </div>
    );
  }
}
