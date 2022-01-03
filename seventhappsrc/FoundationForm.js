import React, { Component } from "react";

export default class FoundationForm extends Component {
  render() {
    return (
      <>
        <h1>
          -------------------------------------------------------------------------------------
        </h1>
        <h1>User Form - using Foundation </h1>
        <div class="large-3 large-centered columns">
          <div class="login-box">
            <div class="row">
              <div class="large-12 columns">
                <form>
                  <div class="row">
                    <div>
                      <label>UserName</label>
                    </div>
                    <div class="large-12 columns">
                      <input
                        type="text"
                        name="username"
                        placeholder="Username"
                      />
                    </div>
                  </div>
                  <div class="row">
                    <div class="large-12 columns">
                      <input
                        type="password"
                        name="password"
                        placeholder="Password"
                      />
                    </div>
                  </div>
                  <div class="row">
                    <div class="large-12 large-centered columns">
                      <input
                        type="submit"
                        class="button expand"
                        value="Log In"
                      />
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
