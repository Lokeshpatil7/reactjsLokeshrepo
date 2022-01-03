import React, {Component} from "react";

export default class ErrorBoundry extends Component{
    state={
        hasError:false,
    };
    static getDerivedStateFromError(error){
        return{
            hasError:true,

        };
    }

    componentDidCatch(error,info){
        //send error to server via service
        console.log(error);
        console.log(info);
    }
    render(){
        if (this.state.hasError){
            return<h1>Somenthing went Wrong please check!!!!</h1>;
        }else{
            return this.props.children;
        }
    }
   
}