import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Header extends Component {
  render() {
    return (
      <>
        <div className="logo">
          <h1 className="animated infinite heartBeat">Home Loan</h1>
        </div>

        <h1>Nurture Your Home Dreams Here...</h1>
      </>
    );
  }
}
