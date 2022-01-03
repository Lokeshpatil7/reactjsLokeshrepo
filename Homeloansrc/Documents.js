import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Documents extends Component {
  render() {
    return (
      <>
        <div class="upload-document">
          <h1>Upload Your Documents</h1>

          <form className="container ">
            <table>
              <tr>
                <td>
                  <label for="customFile" className="form-label">
                    Pan Card :-
                  </label>
                </td>
                <td>
                  <input type="file" className="form-control" id="customFile" />
                </td>
              </tr>
              <tr>
                <td>
                  <label for="customFile" className="form-label">
                    Voter Id :-
                  </label>
                </td>
                <td>
                  <input type="file" className="form-control" id="customFile" />
                </td>
              </tr>
              <tr>
                <td>
                  <label for="customFile" className="form-label">
                    Salary Slip :-
                  </label>
                </td>
                <td>
                  <input type="file" className="form-control" id="customFile" />
                </td>
              </tr>
              <tr>
                <td>
                  <label for="customFile" className="form-label">
                    LOA :-
                  </label>
                </td>
                <td>
                  <input type="file" className="form-control" id="customFile" />
                </td>
              </tr>
              <tr>
                <td>
                  <label for="customFile" className="form-label">
                    NOC from Builder:-
                  </label>
                </td>
                <td>
                  <input type="file" className="form-control" id="customFile" />
                </td>
              </tr>
              <tr>
                <td>
                  <label for="customFile" className="form-label">
                    Agreement To Sale :-
                  </label>
                </td>
                <td>
                  <input type="file" className="form-control" id="customFile" />
                </td>
              </tr>
              <div className="container row align-items-start">
                <button type="submit" className="btn btn-success">
                  Submit
                </button>
              </div>
            </table>
          </form>
          <br></br>
        </div>
      </>
    );
  }
}
