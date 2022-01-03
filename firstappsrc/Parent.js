import React, {Component} from "react";
import Child from "./Child";
class Parent extends Component{
    state = {
        balance : 0,
    };

    balanceIncrement = () => {
          this.setState({balance: this.state.balance + 1}
          );
         };

         balanceDecrement = () => {
            this.setState({balance: this.state.balance - 1}
            );
           };

    render(){
        const {name , age   } = this.props;
        return( 
            <>
        
          <h1> 
              In Parent {this.state.balance }
          </h1> 

          <button onClick ={this.balanceIncrement} > 
             Family Profit
          </button>

          <button onClick ={this.balanceDecrement} > 
             Family Loss
          </button>
     <Child name = {"Lokesh"} age ={23} accountNumber={'SBI123'} balanceIncrement={this.balanceIncrement} balanceDecrement={this.balanceDecrement} /> 
     <Child name = {"Chiranjiv"} age ={23} accountNumber={'HDFC5678'} balanceIncrement={this.balanceIncrement} balanceDecrement={this.balanceDecrement}/> 
           
        </>
        );
    }
}

export default Parent;