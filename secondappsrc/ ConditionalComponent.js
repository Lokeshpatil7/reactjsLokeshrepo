import React, {Component} from "react";

class ConditionalComponent extends Component{
    state = {
        showText : true,
    };

    onToggleShowText = () =>{
        this.setState({showText : ! this.state.showText})
    }
    render(){

        return(
            <>
            {this.state.showText && <h1>Hello Lokesh</h1>}

            <button onClick={this.onToggleShowText}> {this.state.showText ? "Hide" :"Show" }</button>
            </>

        );     

    }
};
export default ConditionalComponent;