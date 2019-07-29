import React, {Component} from 'react';
import AppointmentCard from '../../cards/AppointmentCard'
import './Appointments.css'
import "bootstrap/dist/css/bootstrap.min.css"

export default class Appointments extends Component {
  render() {
    return (
      <React.Fragment>
        <h1>Appointments:</h1>
        <ul>
          <li>Name:</li>
          <li>Time:</li>
          <li>Service</li>
          <li>Details:</li>
        </ul>
        <div className="appointments-div">
          {
            this.props.appointments.map( appointment => <AppointmentCard key={appointment.id} appointment={appointment} getUser={this.props.getUser} getService={this.props.getService} />)
          }
        </div>
      </React.Fragment>
    )
  }
}