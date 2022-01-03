import React , {Component} from "react";

export default class LifeCycle extends Component{
    constructor(){
        super();//internally we are invoking base class constructor 
        //first the constructor og base class will be invoked
        //and then the constructor of child class will get invoked
        console.log("In constructor");
    }
    render(){
        console.log("in render");
        return <h1>In LifeCycle</h1>;

    }
    componentDidMount(){
        console.log("in componentDidMount");
    }

}