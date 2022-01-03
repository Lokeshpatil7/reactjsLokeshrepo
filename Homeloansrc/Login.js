import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Login extends Component {
  render() {
    return (
      <>
        <h1>Login Here</h1>

        <Link className="nav-link" to={"/login/userlogin"}>
          <button>User Login</button>
        </Link>
        <Link className="nav-link" to={"/login/adminlogin"}>
          <button>Admin Login</button>
        </Link>

        {/* <form className="loginform">
          <div class="col-md-3">
            <label for="inputEmail4" class="form-label">
              Email ID
            </label>
            <input
              placeholder="abc@xyz.com"
              type="email"
              class="form-control"
              id="inputEmail4"
            />
          </div>

          <div className="col-md-3">
            <label for="inputPassword4" class="form-label">
              Password
            </label>
            <input type="password" class="form-control" id="inputPassword4" />
          </div>

          <div class="">
            <button type="submit" className="btn btn-success">
              Sign in
            </button>
          </div>
        </form> */}
      </>
    );
  }
}
