import { Component } from "react";
import Child from "./Child";

class Parent extends Component{
  state ={
      balance : 0,
  }; 

   balanceIncrement = () => {
    this.setState({balance: this.state.balance + 1}
    );
  };
   
   balanceDecrement = () => {
       if(this.state.balance === 0){
           return;
       }
    this.setState({balance: this.state.balance - 1}
    );
  };

  render(){
      const {name , balanceIncrement, balanceDecrement} = this.props

      return(
          <>

          <h1>
              Parent :- {this.state.balance}
          </h1>

          <button onClick ={this.balanceIncrement} >Family Profit  </button>
          <button onClick ={this.balanceDecrement} >Family Expences</button> 

          <Child name = {"Lokesh"}      balanceIncrement={this.balanceIncrement} balanceDecrement ={this.balanceDecrement} /> 
          <Child name = {"Chiranjiv"}   balanceIncrement={this.balanceIncrement} balanceDecrement ={this.balanceDecrement} /> 
       
       </>
      );
  }
}
export default Parent;