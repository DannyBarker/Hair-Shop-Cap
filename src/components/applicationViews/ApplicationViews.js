import { Route, withRouter, Redirect } from "react-router-dom";
import React, { Component } from "react";
import API from "../apiManager/api";
import "./ApplicationViews.css";
import About from "../about/About";
import Admin from "../admin/Admin";
import AdminAppointments from "../admin/appointments/Appointments";
import AdminUsers from "../admin/users/Users";
import AdminRequests from "../admin/requests/Requests";
import StylistNotesModal from "../admin/appointments/StylistNotesModal"
import Contact from "../contact/Contact";
import CreateUser from "../createUser/CreateUser";
import Home from "../home/Home";
import Login from "../login/Login";
import RequestAppointment from "../request-appointment/RequestAppointment";
import Services from "../services/Services";
import User from "../user/User";

class ApplicationViews extends Component {
  state = {
    appointments: [],
    requests: [],
    users: [],
    services: []
  };

  componentDidMount() {
    API.getExpand("users", "accessType")
      .then(users => this.setState({ users: users }))
      .then(() => API.getExpand("appointments", "request"))
      .then(appointments => {
        let sortedAppointments = this.sortAppointments(appointments)
        this.setState({ appointments: sortedAppointments })})
      .then(() => API.getAll("services"))
      .then(services => this.setState({ services: services }))
      .then(() => API.getAll("requests"))
      .then(requests => {
        let sortedRequests = this.sortRequests(requests)
        this.setState({requests: sortedRequests})})
  }

  sortRequests = arr => {
    return arr.sort((a, b) => Date.parse(a.day) - Date.parse(b.day));
  };
  sortAppointments = arr => {
    return arr.sort((a, b) => Date.parse(a.request.day) - Date.parse(b.request.day));
  };

  getUser = userId => {
    let user = "";
    this.state.users.forEach(userApp => {
      if (userApp.id === userId) {
        user = userApp;
      }
    });

    return user.name
  };

  getService = serviceId => {
    let service = "";
    this.state.services.forEach(serviceApp => {
      if (serviceApp.id === serviceId) {
        service = serviceApp;
      }
    });
    return service;
  };

  cancelAppointment = (resource, name) => {
    let button = false
    if (window.confirm(`Are you sure you'd like to cancel ${name}'s appointment?`)) {
      let newObj = {
        id: resource.id,
        requestId: resource.requestId,
        completed: true,
        checked: resource.checked,
        stylistNotes: "No Show."
      }
      API.put("appointments", newObj)
        .then(() => API.getExpand("appointments", "request"))
        .then(appointments => {
          let sortedAppointments = this.sortAppointments(appointments)
          this.setState({ appointments: sortedAppointments })})
          .then(() => {
            button = true
          })
    }
    return button
  }

  checkAppointment = (resource, TF) => {
    let newObj = {
      id: resource.id,
      requestId: resource.requestId,
      completed: resource.completed,
      checked: TF,
      stylistNotes: resource.stylistNotes
      }
    API.put("appointments", newObj)
      .then(() => API.getExpand("appointments", "request"))
      .then(appointments => {
        let sortedAppointments = this.sortAppointments(appointments)
        this.setState({ appointments: sortedAppointments })})
  }

  isAuthenticated = () => this.props.userAccess.userId !== null;
  isAdmin = () => this.props.userAccess.accessType === "admin";

  render() {
    return (
      <React.Fragment>
        <Route
          exact
          path="/"
          render={props => {
            return <Home />;
          }}
        />
        <Route
          exact
          path="/services"
          render={props => {
            return <Services />;
          }}
        />
        <Route
          exact
          path="/about"
          render={props => {
            return <About />;
          }}
        />
        <Route
          exact
          path="/contact"
          render={props => {
            return <Contact />;
          }}
        />
        <Route
          exact
          path="/new"
          render={props => {
            if (this.isAuthenticated()) {
              return <RequestAppointment />;
            } else {
              return <Redirect to="/" />;
            }
          }}
        />
        <Route
          exact
          path="/login"
          render={props => {
            if (!this.isAuthenticated()) {
              return (
                <Login
                  {...props}
                  setUserId={this.props.setUserId}
                  users={this.state.users}
                />
              );
            } else {
              return <Redirect to="/" />;
            }
          }}
        />
        <Route
          exact
          path="/create"
          render={props => {
            if (!this.isAuthenticated()) {
              return <CreateUser />;
            } else {
              return <Redirect to="/" />;
            }
          }}
        />
        <Route
          exact
          path="/profile"
          render={props => {
            return <User />;
          }}
        />
        {/* <Route
          exact
          path="/admin"
          render={props => {
            if (this.isAuthenticated() && this.isAdmin()) {
              return <Admin />;
            } else {
              return <Redirect to="/" />;
            }
          }}
        /> */}
        <Route
          exact
          path="/admin/appointments"
          render={props => {
            if (this.isAuthenticated() && this.isAdmin()) {
              return (
                <AdminAppointments
                  appointments={this.state.appointments}
                  getUser={this.getUser}
                  getService={this.getService}
                  cancelAppointment={this.cancelAppointment}
                  checkAppointment={this.checkAppointment}
                />
              );
            } else {
              return <Redirect to="/" />;
            }
          }}
        />
        {/* <Route
          exact
          path="/admin/stylistNotes"
          render={props => {
            if (this.isAuthenticated() && this.isAdmin()) {
              return (
                <StylistNotesModal {...props} />
              );
            } else {
              return <Redirect to="/" />;
            }
          }}
        /> */}
        <Route
          exact
          path="/admin/users"
          render={props => {
            if (this.isAuthenticated() && this.isAdmin()) {
              return <AdminUsers {...props} users={this.state.users} />;
            } else {
              return <Redirect to="/" />;
            }
          }}
        />
        <Route
          exact
          path="/admin/requests"
          render={props => {
            if (this.isAuthenticated() && this.isAdmin()) {
              return <AdminRequests requests={this.state.requests} getUser={this.getUser} getService={this.getService} />;
            } else {
              return <Redirect to="/" />;
            }
          }}
        />
      </React.Fragment>
    );
  }
}

export default withRouter(ApplicationViews);
