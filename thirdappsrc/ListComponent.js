//===========================Array)ListComponent====================23/11/21
// import { Component } from "react";

// export default class ListComponent extends Component{


//     render(){
//         const myList =["Lokesh", "Avinash","Ajinkya"];
//         return(
//             <>

//             <h1>From ListComponent</h1>

//             {myList.map((element, index) => (
//                 <div key = {index}>
//                     <h2>Inside the list item</h2>
//                     <div>{element }</div>

//                 </div>
//             ))}

//             </>
//         );
//     }
// }

//==========================add new element push()=============================
// import { Component } from "react";

// export default class ListComponent extends Component{

//     state = {
//          myList:["Lokesh", "Avinash","Ajinkya" ],
//     }

//     onAdd = () =>{
//         const myListCopy = this.state.myList;
//         myListCopy.push("abcd","pqr");
//        // myListCopy.push("xyz");
//         console.log("on Add");
//         this.setState({myList : myListCopy});
//     };
//     render(){
        
//         return(
//             <>

//             <h1>From ListComponent</h1>

//             <button onClick={this.onAdd}> Add</button>
//             {this.state.myList.map((element , index)=>(
//               <div key = {index}>
              
//               <div>{element }</div> 
//                 </div>
//             ))}

//             </>
//         );
//     }
// }

//=====================Add- to do list===================================
import { Component } from "react";

export default class ListComponent extends Component{

    state = {
         myList:[ ],
         inputValue:" ",
    };

    onAdd = () =>{
        const myListCopy = this.state.myList;
        myListCopy.push(this.state.inputValue);
       
        this.setState({myList : myListCopy, inputValue:""});
    };

    onInputTextChange =(event) =>{
        console.log(event.target.value);
        this.setState({inputValue: event.target.value})
    }
   
    render(){
        
        return(
            <>
            <h1>To Do List App</h1>
            <input 
            value = {this.state.inputValue}
            onChange={this.onInputTextChange}
                />

            <button onClick={this.onAdd}> Add</button>
            {this.state.myList.map((element , index)=>(
              <div key = {index}>
              
              <div>{element }</div> 
                </div>
            ))}

            </>
        );
    }
}
