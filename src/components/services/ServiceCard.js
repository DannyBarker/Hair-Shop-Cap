import React, { Component } from "react";
import ServiceModule from "./ServiceModule";
import { Card, CardBody } from "reactstrap";

export default class ServiceCard extends Component {
  state = {
    modal: false
  };

  toggle = () => {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  };

  render() {
    return (
      <div
        key={this.props.service.id}
        className="serviceType-div hvr-shrink hvr-ripple-out"
        onClick={this.toggle}
      >
        <Card>
          <CardBody
        style={{
              backgroundImage: `url(${this.props.service.serviceImg})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat"
            }}>
              <ServiceModule
                modal={this.state.modal}
                toggle={this.toggle}
                service={this.props.service}
              />
          </CardBody>
        </Card>
      </div>
    );
  }
}
