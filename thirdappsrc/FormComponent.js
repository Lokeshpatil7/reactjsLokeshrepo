import React ,{Component}from "react";

export default class FormComponent extends Component{
    state ={
        firstname :"",
        age :0,
    };

    // onNameChangeHandler = (event) =>{  //name handler
    //             this.setState({name: event.target.value});
    //         };

    // onAgeChangeHandler = (event) =>{   //age handler
    //             this.setState({age: event.target.value});
    //         };

    onValueChangeHandler = (event) =>{   //common handler using name={""} proprty
        console.log(event.target.name);
        this.setState({ [event.target.name]:  event.target.value});  //[event.target.name]:
    };

   onFormsSubmitHandler = (event)=>{   //submit handler
       event.preventDefault();
       console.log("onSubmit");
       console.log(this.state);
       
     };
    render(){
        return(
            <>
            <h1>Person Form</h1>
            <form onSubmit={this.onFormsSubmitHandler}>
            <label>Name : </label>
            <input 
            name={"firstname"}  //name={""} property
            value = {this.state.firstname }
            onChange={this.onValueChangeHandler} /> <br/> <br/> 

            <label>Age : </label>
            <input 
            name={"age"}
            value = {this.state.age}
            onChange={this.onValueChangeHandler} /> <br/> <br/>

            <button  type="submit">Submit</button>
            <br/>
            </form>
         </>
        );
    }

}
