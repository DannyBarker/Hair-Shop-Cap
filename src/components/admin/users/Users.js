import React, {Component} from 'react';
import UserCard from './UserCard'
import './Users.css'
import "bootstrap/dist/css/bootstrap.min.css"

export default class Users extends Component {

  userDetails = (id) => {
    this.props.history.push(`/admin/user/${id}/details`)
  }

  render() {
    return (
      <React.Fragment>
      <header className="adminUsers-header">
        <h1>Users</h1>
        <input type="text" placeholder="Search Users" />
      </header>
      <div className="adminUsers-Div">
        {
          this.props.users.map( user => user.accessTypeId === 2 ? <UserCard key={user.id} user={user} userDetails={this.userDetails} /> : "")
        }
      </div>


      </React.Fragment>
    )
  }
}