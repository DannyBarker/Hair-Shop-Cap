import React, { Component } from "react";
import DenyModule from "../admin/requests/DenyModule"
import EditModule from "../user/requestAppointment/EditModule"

export default class RequestCard extends Component {
  state = {
    saveDisabled: false,
    modal: false
  };

  toggle = () => {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  };

  findStatusMessages = () => {
    let strMessage = ""
    this.props.statusMessages.forEach( message => {
      if (message.id === this.props.request.statusMessageId) {
        strMessage = message.message
      } else {
        return ""
      }
    })
    return strMessage
  }

  createRemoveObj = () => {
    let remObj = {
      id: this.props.request.id,
      userId: this.props.request.userId,
      serviceId: this.props.request.serviceId,
      statusMessageId: 7,
      dateTime: this.props.request.dateTime,
      request_details: this.props.request.request_details,
      userCancel: true,
      timestamp: this.props.request.timestamp
    }
    return remObj
  }
  render() {
    return (
      <div key={this.props.request.id} className="hvr-glow adminRequest-card card">
        <h6 className="requestUser-Name" style={{textDecoration: "underline"}}>
          <strong>{this.props.getUser(this.props.request.userId)}</strong>
        </h6>
        <p className="request-dateTime"><b>Date:</b> {" "}{this.props.giveDate(this.props.request)}</p>
        <p className="request-service">
          <b>Service:</b> {" "}{this.props.getService(this.props.request.serviceId).type}
        </p>
        <p className="request-details"><b>Details:</b> {" "}{this.props.request.request_details}</p>
        {
          this.props.isUser() && this.props.request.statusMessageId > 2 ?
          <p className="request-details"><b>Deny Reason:</b> {" "}{this.findStatusMessages()}</p>
          : ""
        }
        {
          this.props.isAdmin() ?
          <div className="adminRequest-btn">
        <button
          id="acceptRequest-btn"
          className="accRequest-btn btn btn-primary hvr-shrink"
          onClick={() => {
            !this.props.acceptRequest(this.props.request) ? this.setState({ saveDisabled: false }) : this.setState({ saveDisabled: true })
          }}
          disabled={this.state.saveDisabled}
        >
          Accept
        </button>
        <button
            id="adminDenyRequest-btn"
            className="denyRequest-btn btn btn-danger hvr-shrink"
            onClick={() => {
              this.toggle();
            }}
          >
            <DenyModule
            modal={this.state.modal}
            toggle={this.toggle}
            status={this.props.status}
            request={this.props.request}
            denyRequests={this.props.denyRequests}
            userAccess={this.props.userAccess}
            requestEditSubmit={this.props.requestEditSubmit}
          />
          </button>
          </div>
          : ""
        }
        {
          this.props.isUser() && this.props.request.statusMessageId > 2 ?
          <React.Fragment>
          <button
            id="userEditRequest-btn"
            className="editRequest-btn btn btn-warning"
            onClick={() => {
              this.toggle();
            }}
          >
            <EditModule
            modal={this.state.modal}
            toggle={this.toggle}
            status={this.props.status}
            request={this.props.request}
            isAdmin={this.props.isAdmin}
            isAuthenticated={this.props.isAuthenticated}
            isUser={this.props.isUser}
            services={this.props.services}
            userAccess={this.props.userAccess}
            requestEditSubmit={this.props.requestEditSubmit}
          />
          </button> {" "}
          </React.Fragment>
          : ""
        }
        {
          this.props.isUser() && !this.props.request.userCancel ?
          <button
            id="userDelRequest-btn"
            className="delRequest-btn btn btn-danger"
            onClick={() => {
              this.props.userRemoveRequest(this.createRemoveObj())
            }}
          >
            Delete Request
          </button>
          : ""
        }

      </div>
    );
  }
}
