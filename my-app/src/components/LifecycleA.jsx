import React, { Component } from "react";

export class LifecycleA extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: "this is the react life cycle",
    };
    console.log("this is the lifecycle of in the construcor");
  }
  static getDerivedStateFromProps(props, state) {
    console.log("getdrivedstatefromprops");
    return null;
  }

  componentDidMount() {
    console.log("this is component did mount");
  }

  render() {
    console.log("this is rendering  one block");
    return <div>LifecycleA</div>;
  }
}

export default LifecycleA;
