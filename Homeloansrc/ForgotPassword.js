import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class ForgotPassword extends Component {
  render() {
    return (
      <>
        <h1>User ForgotPassword</h1>
        <h1>...</h1>

        <form>
          <div class="row mb-3">
            <label for="inputEmail3" class="col-sm-2 ">
              Email
            </label>
            <div class="col-sm-3">
              <input
                placeholder="Enter your valid Email"
                type="email"
                class="form-control"
                id="inputEmail3"
              />
            </div>
          </div>
          <div class="row mb-3">
            <label for="inputPassword3" class="col-sm-2 col-form-label">
              Set New Password
            </label>
            <div class="col-sm-3">
              <input type="password" class="form-control" id="inputPassword3" />
            </div>
          </div>

          <button type="submit" class="btn btn-success">
            Sign in
          </button>
        </form>
      </>
    );
  }
}
