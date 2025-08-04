import React, { Component } from 'react';

export class Event extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "Welcome"
    };
  }

  // Correct way to declare a method inside class
  doSomething = () => {
    this.setState({
      message: "Thank you"
    });
  }

  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>
        <button onClick={this.doSomething}>Do something</button>
      </div>
    );
  }
}

export default Event;
