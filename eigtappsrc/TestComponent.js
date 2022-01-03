// import React,{Component} from "react";

var createReactClass = require("create-react-class");

//class TestComponent extends Componenet{
// render(){
// return<h1>In TestComponent</h1>
// }
// }

var TestComponent = createReactClass({
  render: function () {
    return (
      <>
        <h1>In TestComponent with old way:{this.props.name}</h1> Count:
        {this.state.count}
        <br />
        <button onClick={this.onClickHandler}>Increment</button>
      </>
    );
  },

  getInitialState: function () {
    return {
      count: 0,
    };
  },

  onClickHandler: function () {
    this.setState({ count: this.state.count + 1 });
  },
});
export default TestComponent;
