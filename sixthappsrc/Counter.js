import { Component } from "react";

import { connect } from "react-redux";

class Counter extends Component {
  state = {
    inputvalue: 0,
  };

  onChangeHandler = (event) => {
    this.setState({ inputvalue: event.target.value });
  };

  render() {  
    console.log(this.props);
    return (
      <>
        <h1>Counter :{this.props.counter}</h1>
        <input value={this.state.inputvalue} onChange={this.onChangeHandler} />
        <br />
        <br />

        <button onClick= {()=>{
           this.props.increment(parseInt(this.state.inputvalue));
        }} 
         >
             Increment
            </button>

        <button onClick={()=>{
           this.props.decrement(parseInt(this.state.inputvalue));
        }} >Decrement</button>

        <button onClick={()=>{
           this.props.multiply(parseInt(this.state.inputvalue));
        }}>Multiply</button>

        <button onClick={()=>{
           this.props.division(parseInt(this.state.inputvalue));
        }}>Divide</button>
      </>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    counter: state.counter,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    increment: (value) => dispatch({ type: "increment" , value: value}),
    decrement: (value) => dispatch({ type: "decrement" ,value: value}),
    multiply: (value) => dispatch({ type: "multiply", value: value }),
    division: (value) => dispatch({ type: "division", value: value }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
