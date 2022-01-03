//=====================event handler======================================
//========================button========================
import React, {Component} from "react";

// class MySecondClassComponent extends Component{
//     state = {
//         balance : 0,
//     };

//     balanceIncrement = (value) => {
//   this.setState({balance: this.state.balance + value}
//     );
//     };

//         onProfitClickHandler =() =>{
//             console.log("I Im clicked now");
//             this.balanceIncrement(1);

//             // this.setState({
//             //     balance: this.state.balance +1,
//             // });  //internally
//             // this.state ={...this.state, balance: this.state.balance + 1};
//         };

//         onDoubleProfitClickHandler =() =>{
//             this.balanceIncrement(100);

//             // this.setState({
//             //     balance: this.state.balance +100,
//             //});
//         }; 

//     render(){
//         const {name , age ,accountNumber } = this.props;
//         return( 
//             <>
//         <h1> 
//             Hello Im {name} Im {age} years old and 
//             my balance 
//             {this.state.balance} in account {accountNumber} 
//         </h1>

//         <button onClick ={this.onProfitClickHandler} >
//                Profit
//         </button>
        
//         <button onClick ={this.onDoubleProfitClickHandler} >
//             DoubleProfit
//         </button>
        
//         </>
//         );
//     }
// }

// export default MySecondClassComponent;

//========================task=============================

class MySecondClassComponent extends Component{
    state = {
        balance : 0,
    };

    render(){
        const {name , age   } = this.props;
        return( 
            <>
        
          <h1> 
            {name}
            <button onClick ={this.onProfitClickHandler} > 
             Profit
            </button>
        </h1>     
        </>
        );
    }
}

export default MySecondClassComponent;