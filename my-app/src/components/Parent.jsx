import React, { Component } from 'react';
import Child from './Child';  // ✅ Import the child component

export class Parent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      erga: "parent"
    };

    // ✅ Bind handler OR use arrow function syntax to avoid binding
    this.handler = this.handler.bind(this);
  }

  handler(childname) {
    
      prompt(`hello ${this.state.erga} from ${childname}`)
    
  }

  render() {
    return (
      <div>
         {/* ✅ Show message */}
        <Child hand={this.handler} /> {/* ✅ Pass method as prop */}
      </div>
    );
  }
}

export default Parent;
