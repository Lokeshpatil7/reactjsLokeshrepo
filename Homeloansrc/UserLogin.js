// import React, { Component } from "react";
// import { Link } from "react-router-dom";

// export default class UserLogin extends Component {
//   render() {
//     return (
//       <>
//         <h1>Admin Login</h1>
//         <h1>...</h1>

//         {/* <form className="loginform">
//           <div class="col-md-3">
//             <label for="inputEmail4" class="form-label">
//               Email ID
//             </label>
//             <input
//               placeholder="abc@xyz.com"
//               type="email"
//               class="form-control"
//               id="inputEmail4"
//             />
//           </div>

//           <div className="col-md-3">
//             <label for="inputPassword4" class="form-label">
//               Password
//             </label>
//             <input type="password" class="form-control" id="inputPassword4" />
//           </div>

//           <div class="">
//             <button type="submit" className="btn btn-success">
//               Sign in
//             </button>
//           </div>
//         </form> */}

//       </>
//     );
//   }
// }

import { Component } from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";

export default class UserLogin extends Component {
  render() {
    return (
      <>
        <div class="user-login">
          <h1> User Login</h1>
          <form>
            <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label">
                Email address
              </label>
              <input
                placeholder="enter your valid email"
                type="email"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
              <div id="emailHelp" class="form-text"></div>
            </div>
            <div class="mb-3">
              <label for="exampleInputPassword1" class="form-label">
                Password
              </label>
              <input
                type="password"
                class="form-control"
                id="exampleInputPassword1"
              />
            </div>
            <button type="submit" class="btn btn-success">
              Submit
            </button>
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            <Link to="./forgotpassword">
              <label> forgot password ?</label>
            </Link>
          </form>
        </div>
      </>
    );
  }
}
