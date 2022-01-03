import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Body extends Component {
  render() {
    return (
      <>
        <div className="bodydiv">
          <h2 className="animated infinite bounce">Home Loan </h2>
          <p></p>
          <Link className="" to={"/application"}>
            <button>
              <h2>Apply Now</h2>
            </button>
          </Link>
          <br />
        </div>
      </>
    );
  }
}
