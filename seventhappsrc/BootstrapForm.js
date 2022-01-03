import React, { Component } from "react";

export default class BootstrapForm extends Component {
  render() {
    return (
      <>
        <h1>User Form - in Bootstrap</h1>
        <form className="container">
          <div className="col-md-5">
            <label htmlFor="name" className="form-label">
              User Name
            </label>
            <input
              id="name"
              className="form-control"
              name="userName"
              placeholder="Please Enter Your Name"
            />
          </div>
          <div className="col-md-5">
            <label htmlFor="sourcelocation" className="form-label">
              Phone Number
            </label>
            <input
              id="sourcelocation"
              className="form-control"
              name="phoneNumber"
              placeholder="Please Enter Your Phone Number"
            />
          </div>
          <div className="col-md-5">
            <label htmlFor="destinationlocation" className="form-label">
              Email{" "}
            </label>
            <input
              id="destinationLocation"
              className="form-control"
              name="email"
              placeholder="Please EnterYour Email"
            />
          </div>
          <div className="col-md-5">
            <label htmlFor="arrivaldatetime" className="form-label">
              password
            </label>
            <input
              id="arrivaldatetime"
              className="form-control"
              placeholder="Please EnterYour Password"
              name="password"
            />
          </div>
          <div className="col-md-5">
            <label htmlFor="departuredatetime" className="form-label">
              Date Of Birth
            </label>
            <input
              id="departuredatetime"
              className="form-control"
              type="date"
              name="dateOfBirth"
              placeholder="Please EnterYour Date Of Birth"
            />
          </div>

          <div className="col-md-5">
            <label htmlFor="economyseatprice" className="form-label">
              Address
            </label>
            <input
              id="economyseatprice"
              className="form-control"
              name="address"
              placeholder="Please EnterYour Address"
            />
          </div>
          <br />
          <div>
            <button type="submit" class="btn btn-primary">
              Submit
            </button>
          </div>
        </form>
      </>
    );
  }
}
