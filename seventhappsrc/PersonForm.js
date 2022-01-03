import { Component } from "react";

import { connect } from "react-redux";
class PersonForm extends Component {
  state = {
    name: "",
    age: 0,
  };

  onValueChangeHandler = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  onFormSubmitHandler = (event) => {
    event.preventDefault();
    console.log(this.state);
    this.props.addPerson(this.state);
  };

  render() {
    return (
      <>
       
          <h1>Add Person</h1>
          <br />
          <br />
          <form onSubmit={this.onFormSubmitHandler}>
          <div className="mb-3">
            <label>Name : </label>
            <input
            className="form-control"
              name={"name"}
              value={this.state.name}
              onChange={this.onValueChangeHandler}
            /></div>
            <br />
            <div className="mb-3">
            <label className="form-label">Age : </label>
            <input
            className="form-control"
              name={"age"}
              value={this.state.age}
              onChange={this.onValueChangeHandler}
            /></div>
            <br />
            <button className="btn btn-success" type="submit">Submit</button>
          </form>
        
      </>
    );
  }
} 
const mapStateToProps = (state)=>{
    return{ };
};
const mapDispatchToProps =(dispatch)=>{
    return{
        addPerson: (payload)=>
            dispatch({type: "PERSON_ADD" , payload: payload}),
        };
    };


export default connect (mapStateToProps , mapDispatchToProps)(PersonForm);