import React, { Component } from "react";

class Wada extends Component {
  constructor() {
    super();
    this.state = {
      message: "Welcome to our channel"
    };
  }
  myfunction = () => {
    this.setState({
      message: "thankyou for subscribing"
    });
  };

  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>
        <button onClick={this.myfunction}>subscribe</button>
      </div>
    );
  }
}

export default Wada;
