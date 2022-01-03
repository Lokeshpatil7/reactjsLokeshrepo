import React, {Component} from "react";
class Child extends Component{
    // state = {
    //     balance : 0,
    // };

    // balanceIncrement = (value) => {
    //     this.setState({balance: this.state.balance + value}
    //     );
    //    };
    render(){
        const {name , balanceIncrement ,balanceDecrement } = this.props;
        return( 
            <>
        
          <h1> 
                 {name}
          </h1> 
            <button onClick ={balanceIncrement} > 
             Profit
            </button>

            <button onClick ={balanceDecrement} > 
             Loss
            </button>
        
        </>
        );
    }
}

export default Child;