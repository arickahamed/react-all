import React, { Component } from "react";

class Welcome extends Component {
  render() {
    return (
      <h1>
        welcome{this.props.name} a.k.a {this.props.play}
      </h1>
    );
  }
}

export default Welcome;
