import { Component } from "react";

import { connect } from "react-redux";
class CourseList extends Component{

    render() {
        return (
            <>
            <h1>Course List</h1> 
            <table  className={'table'}> 
            <thead>
         <tr>
             <th>Sr.No.</th>
             <th>CourseName</th>
             <th>CourseFees</th>
             <th>Option</th>
         </tr>
         </thead>
         <tbody>
             {this.props.courseList.map((person, index) =>{
                 return(
                     <tr key ={index}>
                         <td>{index+ 1}</td>
                         <td>{person.courseName}</td>
                         <td>{person.fees}</td>
                         <td>
                         <button className="btn btn-danger"
                                onClick={()=>{
                                this.props.deletePersonByIndex(index);
                                     }} 
                             >Delete</button>
                         </td>
                     </tr>
                 );
             })}
         </tbody>
        </table>
            </>
        )
    }
}
const mapStateToProps = (state)=>{
    return{
        courseList : state.courseList,
    };
};

const mapDispatchToProps = (dispatch)=>{
    return{
  deletePersonByIndex :(index)=>
  dispatch({type:"COURSE_DELETE" , payload:index}),
    };
};

export default connect(mapStateToProps , mapDispatchToProps)(CourseList);