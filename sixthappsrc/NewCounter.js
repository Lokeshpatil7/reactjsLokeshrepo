import { Component } from "react";

import {connect} from "react-redux"

class NewCounter extends Component{
    state={
        inputvalue:0,
    };

    onValueChangehandler=(event)=>{
        this.setState({inputvalue: event.target.value});
    };

    render(){
        return(
        <>
       
        <h1>NewCounter : {this.props.counter}</h1>
        <input 
        value={this.state.inputvalue}
        onChange={this.onValueChangehandler}/>
        <br/>
        <button onClick={this.props.increment}>Increment</button>
        <button onClick={this.props.decrement}>Decrement</button>
        <button onClick={this.props.multiply}>Multiply</button>
        <button onClick={this.props.division}>Divide</button>
        </>
        );
    }
}

const mapStateToProps =(state) =>{
    return{
        counter:state.counter,
    };
};

const mapDispatchToProps=(dispatch)=>{
    return{
        increment:()=> dispatch({type:"increment"}),
        decrement:()=>dispatch({type: "decrement"}),
        multiply:()=> dispatch({type:"multiply"}),
        division:()=> dispatch({type:"division"}),
    }
}
export default connect(mapStateToProps , mapDispatchToProps)(NewCounter);