import React, { Component } from 'react';

export class Reular extends Component {
  render() {
    console.log("Regular component rendered"); // This will show every time
    return (
      <div>
        <h1>This is the Regular Component. Name: {this.props.name}</h1>
      </div>
    );
  }
}

export default Reular;
