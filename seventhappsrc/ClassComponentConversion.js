import React, { Component } from "react";

export default class ClassComponentConversion extends Component {
  state = {
    value: 0,
  };
  onClickHandler = () => {
    this.setState({ value: this.state.value + 1 });
  };
  render() {
    return (
      <>
        <h1>Value: {this.state.value}</h1>
        <button onClick={this.onClickHandler}>Increment</button>
      </>
    );
  }
}
