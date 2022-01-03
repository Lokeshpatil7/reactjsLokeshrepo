import React , {Component} from "react";
import LifecycleUnmount from "./LifeCycleUnmount";   //component getting

export default class LifeCycleUpdate extends Component{
 state = {
     showText:true,
 };
 
 onClickHandler = ()=>{
     this.setState({showText:! this.state.showText});
 };
 render(){
     console.log("in render");
     return(
         <>
         {this.state.showText && (
         <>
         <h1>In LifeCycleUpdate</h1>
         <LifecycleUnmount/>
          </>
         )}
         <button onClick={this.onClickHandler}>Toggle</button>
         </>
     );
 }
 componentDidUpdate(){
     console.log("in componentDidUpdate");
 }
}