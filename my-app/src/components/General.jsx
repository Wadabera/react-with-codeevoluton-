import React, { Component } from 'react';
import Pure from './pure';
import Reular from './Reular';

export class General extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "wada abera chala"  // name stored here
    };
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({
        name: "wada abera chala"  // name doesn't change
      });
    }, 2000); // updates every 2 seconds
  }

  render() {
    return (
      <div>
        <Pure name={this.state.name} />
        <Reular name={this.state.name} />
      </div>
    );
  }
}

export default General;
