import React, { Component } from "react";
import ServiceModule from "./ServiceModule";
import { Card, CardBody, CardTitle } from "reactstrap";

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
        className="serviceType-div"
        onClick={this.toggle}
      >
        <Card>
          <CardBody
            style={{
              backgroundImage: "url(../serviceIMG/defaultServicePic.jpg)",
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat"
            }}
          >
            <CardTitle>
              <ServiceModule
                modal={this.state.modal}
                toggle={this.toggle}
                service={this.props.service}
              />
            </CardTitle>
          </CardBody>
        </Card>
      </div>
    );
  }
}
