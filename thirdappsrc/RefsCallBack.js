
import React , {Component} from "react";

export default class RefsCallBack extends Component{
    constructor(){
        super();
        this.inputRef = null;

    }
    onClickHandler =()=>{
        console.log("In handler");
        console.log(this.inputRef.value);
    };
    render(){
        return(
            <>
            <h1>In RefsCallBack</h1>
            <input 
            type ="text"
            ref={(ref) => {
                this.inputRef =ref;
            }}
            />
            <button onClick={this.onClickHandler}>Click Me</button>
            </>
        );
    }
 componentDidMount(){
     console.log(this.inputRef);
     this.inputRef.focus();
 }
}