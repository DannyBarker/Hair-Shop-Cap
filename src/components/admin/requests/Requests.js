import React, {Component} from 'react';
import RequestCard from '../../cards/RequestCard'
import './Requests.css'
import "bootstrap/dist/css/bootstrap.min.css"

export default class Requests extends Component {
  render() {
    return (
      <React.Fragment>
        <h1>Requests:</h1>
        <div className="adminRequests-Div">
          {
            this.props.requests.map( request => request.statusMessageId === 2 ? <RequestCard key={request.id} request={request} getUser={this.props.getUser} getService={this.props.getService} acceptRequest={this.props.acceptRequest} /> : "")
          }
        </div>
      </React.Fragment>

    )
  }
}