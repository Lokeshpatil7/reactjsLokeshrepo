import { Component } from "react";

import { connect } from "react-redux";
class CourseForm extends Component {
  state = {

    courseName: "",
    fees: 0,
  };

  onValueChangeHandler = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  onFormSubmitHandler = (event) => {
    event.preventDefault();
    console.log(this.state);
    this.props.addCourse(this.state);
  };
render() {
    return (
        <>
            <h1>CourseForm</h1>

            <form  onSubmit={this.onFormSubmitHandler}>
            <div className="mb-3">
            <label>CourseName : </label>

            <input
            className="form-control"
              name={"courseName"}
              value={this.state.courseName}
              onChange={this.onValueChangeHandler}
            /></div>
            <br />

            <div className="mb-3">
            <label>Fees </label>
            <input
            className="form-control"
              name={"fees"}
              value={this.state.fees}
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
        addCourse: (payload)=>
            dispatch({type: "COURSE_ADD" , payload: payload}),
        };
    };

export default connect (mapStateToProps , mapDispatchToProps)(CourseForm);