import React, { Component } from "react";
import PersonForm from './PersonForm';
import PersonList from './PersonList';


export default class Person extends Component{
    render() {
        return (
            <>
            <h1>Person Master</h1>
            <br/>
            <div className="row">
                <div className="col-md-4"> <PersonForm/></div>
                <div className="col-md-8">  <PersonList/></div>
                </div>
            </>
        );
    }};