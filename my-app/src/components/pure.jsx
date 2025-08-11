import React, { PureComponent } from 'react';

export class Pure extends PureComponent {
  render() {
    console.log("Pure component rendered"); // This will show in the console
    return (
      <div>
        <h1>This is the Pure Component. Name: {this.props.name}</h1>
      </div>
    );
  }
}

export default Pure;
