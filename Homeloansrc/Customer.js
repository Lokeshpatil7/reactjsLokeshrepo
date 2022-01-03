import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Customer extends Component {
  render() {
    return (
      <>
        <h2>(Customer) Enter Your Details</h2>
        <br />
        <div class="border">
          <form className="container row align-items-start">
            <div className="col-md-3">
              <label for="name" className=" form-label">
                First Name
              </label>
              <input type="text" class="form-control" id="name" />
            </div>

            <div className="col-md-3">
              <label for="name" className="form-label">
                Middle Name
              </label>
              <input type="text" className="form-control" id="name" />
            </div>

            <div className="col-md-3">
              <label for="name" className="form-label">
                Last Name
              </label>
              <input type="text" className="form-control" id="name" />
            </div>

            <div className="col-md-4">
              <label for="inputEmail4" className="form-label">
                Email
              </label>
              <input
                placeholder="abc@xyz.com"
                type="email"
                className="form-control"
                id="inputEmail4"
              />
            </div>

            <div className="col-md-4">
              <label for="inputPassword4" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="inputPassword4"
              />
            </div>
            {/* <div className="col-md-4">
              <label for="inputPassword4" className="form-label">
                Confirm Password
              </label>
              <input
                type="password"
                className="form-control"
                id="inputPassword4"
              />
            </div> */}

            <div className="col-md-3">
              <label for="phone" className="form-label">
                Phone No.
              </label>
              <input type="tel" className="form-control" id="phone" />
            </div>

            <div className="col-md-3">
              <label for="date" className="form-label">
                BirthDate
              </label>
              <input type="date" className="form-control" id="date" />
            </div>

            <div className="col-md-3">
              <label for="inputNationality" className="form-label">
                Nationality
              </label>
              <select id="inputState" className="form-select">
                <option selected>Choose...</option>
                <option>India</option>
                <option>Nepal</option>
                <option>ShriLanka</option>
                <option>Bhutan</option>
              </select>
            </div>

            <div className="col-md-3">
              <label for="adhaarno" className="form-label">
                Adhaar No.
              </label>
              <input
                placeholder="1111-2222-3333-4444"
                type="number"
                className="form-control"
                id="adhaarno"
              />
            </div>

            <div className="col-md-3">
              <label for="panno" className="form-label">
                PAN No.
              </label>
              <input type="text" className="form-control" id="panno" />
            </div>
            <div className="">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="gridCheck"
                />
                <label className="form-check-label">Check me out</label>
              </div>
            </div>
            <div className="">
              <button type="submit" className="btn btn-success">
                Sign in
              </button>
              <button type="submit" className="btn btn-primary">
                Reset
              </button>
              <h5>
                <Link to="/document">
                  <button>UploadDocuments</button>
                </Link>
              </h5>
            </div>
          </form>
        </div>
      </>
    );
  }
}
