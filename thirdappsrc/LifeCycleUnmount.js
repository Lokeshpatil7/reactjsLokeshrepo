import React , {Component} from "react";

export default class LifecycleUnmount extends Component{
    render(){
        console.log("in render");
        return(
            <> 
            <h1>
                In LifecycleUnmount
            </h1>
            </>
        );
    }
    componentWillUnmount(){
        console.log("componentwillunmount");
    }
}