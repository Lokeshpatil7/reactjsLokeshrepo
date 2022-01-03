import React,{Component} from "react";
import CoureseForm from "./CourseForm"
import CoureseList from "./CourseList"


export default class Course extends Component{
 render() {
     return (
         <>
         <h1>From Course</h1>
             <CoureseForm/>
             <CoureseList/>
         </>
     );
 }
};