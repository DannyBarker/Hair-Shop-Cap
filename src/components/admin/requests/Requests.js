import React, { Component } from "react";
import RequestCard from "../../cards/RequestCard";
import "./Requests.css";
import "bootstrap/dist/css/bootstrap.min.css";

export default class Requests extends Component {
  render() {
    return (
      <React.Fragment>
      <div className="adminReaust-parentDiv">
      <div className="adminRequest-header">
        <h1>Requests</h1>
        </div>
        <div className="adminRequests-Div">
          {this.props.requests.map(request =>
            request.statusMessageId === 2 ? (
              <RequestCard
                key={request.id}
                request={request}
                getUser={this.props.getUser}
                getService={this.props.getService}
                acceptRequest={this.props.acceptRequest}
                status={this.props.status}
                denyRequests={this.props.denyRequests}
                isAdmin={this.props.isAdmin}
                giveDate={this.props.giveDate}
                isUser={this.props.isUser}
                userRemoveRequest={this.props.userRemoveRequest}
                statusMessages={this.props.statusMessages}
              />
            ) : (
              ""
            )
          )}
        </div>
        </div>
      </React.Fragment>
    );
  }
}
