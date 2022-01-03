import { Component } from "react";

class Child extends Component{
    state = {
        balance : 0,
    };

    onChildProfit = () => {
        this.setState({balance: this.state.balance + 1}
        );
      };

      onChildExpense = () => {
        if(this.state.balance === 0){
           return;
        }
        this.setState({balance: this.state.balance - 1}
        );
      };

    render(){
        const {name, balanceIncrement, balanceDecrement  } = this.props;
        
        const onTotalProfit =() =>{
           
            this.onChildProfit();
            balanceIncrement();
        };
                                        
        const onTotalExpense =() =>{ 
            this.onChildExpense();
            balanceDecrement();
        };
        return(
            <>
            <h1>
                {name} :-   {this.state.balance}
            </h1>
            
            <button onClick = {onTotalProfit} >Profit</button>
            <button onClick = {onTotalExpense} >Expense</button>

            </>
        )
    }
}
export default Child;