import React, { Component } from "react";
import ServiceCard from "./ServiceCard";
import "./Services.css";

export default class Services extends Component {
  render() {
    return (
      <div className="servicesPage-div">
        <h1>Services:</h1>
        <div className="serviceType-parent">
        {this.props.services.map(service => (
          <ServiceCard key={service.id} service={service}/>
        ))}
        </div>
      </div>
    );
  }
}
