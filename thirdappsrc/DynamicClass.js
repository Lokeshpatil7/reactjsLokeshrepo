import React , {Component} from "react";
import testUtils from "react-dom/test-utils";

export default class DynamicClass extends Component{
    state ={
        isTrue : true,
        colorList:["red" , "yellow","green","aqua" ,"orange"],
        incrementer:0,
    };
    onClickHandler =()=>{
        this.setState({isTrue: !this.state.isTrue});
    };

    onUpdateHandler =() =>{
        console.log("In Update hamdler");
        console.log((this.state.incrementer + 1) % 5);//will give remainder
        this.setState({incrementer:(this.state.incrementer + 1) % 5});
    };
 render(){
     return(
         <>
         <h1 className="my-class">In DynamicClass</h1>

         <div  className= {this.state.isTrue ? "my-true-div" : "my-false-div"}>  
             In div with {this.state.isTrue ? "true" : "false"} conndition</div>
             <br/>
             <button onClick={this.onClickHandler} > Toggle</button>  <br/> 
         <br></br>

      <div style={{ backgroundColor: this.state.colorList[this.state.incrementer]}}>
          In My Dynamic Style Div
      </div>
         <br></br>
        
         <button onClick={this.onUpdateHandler}> Update</button>
         </>
     );
 }
}