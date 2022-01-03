import { Component } from "react";
import "./index.css";
export default class ChangePW extends Component {
  render() {
    return (
      <>
        <b>
          <div className="title-changepwd">Set New Password</div>
        </b>
        <br />

        <div className="container-sm">
          <div class="row mb-3">
            <div class="row">
              <label
                for="loginpwd"
                class="col-sm-2 col-form-label col-form-label-lg"
              >
                Login Pwd :
              </label>
              <div class="col-sm-10">
                <input
                  type="password"
                  class="form-control form-control-lg"
                  id="loginpwd"
                  placeholder="type login password here"
                />
              </div>
            </div>
          </div>

          <div class="row mb-3">
            <div class="row">
              <label
                for="confirmloginpwd"
                class="col-sm-2 col-form-label col-form-label-lg"
              >
                Confirm Login Pwd :
              </label>
              <div class="col-sm-10">
                <input
                  type="password"
                  class="form-control form-control-lg"
                  id="confirmloginpwd"
                  placeholder="confirm login password here"
                />
              </div>
            </div>
          </div>
          <br />

          <div class="row mb-3">
            <div class="row">
              <label
                for="transpwd"
                class="col-sm-2 col-form-label col-form-label-lg"
              >
                Transaction Pwd :
              </label>
              <div class="col-sm-10">
                <input
                  type="password"
                  class="form-control form-control-lg"
                  id="transpwd"
                  placeholder="type transaction password here"
                />
              </div>
            </div>
          </div>

          <div class="row mb-3">
            <div class="row">
              <label
                for="confirmtranspwd"
                class="col-sm-2 col-form-label col-form-label-lg"
              >
                Confirm Transaction Pwd :
              </label>
              <div class="col-sm-10">
                <input
                  type="password"
                  class="form-control form-control-lg"
                  id="confirmtranspwd"
                  placeholder="confirm transaction password here"
                />
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
