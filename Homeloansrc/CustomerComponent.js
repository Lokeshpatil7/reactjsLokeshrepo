import React, { Component } from "react";

export default class CustomerComponent extends Component {
  render() {
    return (
      <>
        <form>
          <div className="">
            <label>Name : </label>
            <input className="" />
          </div>
          <br />
          <div className="mb-3">
            <label className="form-label">Age : </label>
            <input className="form-control" />
          </div>
          <br />
          <button className="btn btn-success" type="submit">
            Submit
          </button>
        </form>

        {/* <form className="">
<h1 style="color: blue;">Contact Form </h1>

<tr>
<td> <label for="">Name : </label> </td>
<td> <input type="text" name="" id=""/> </td>
</tr>
<tr>
<td> <label for="">Email : </label> </td>
<td> <input type="email" name="" id=""/> </td>
</tr>
<tr>
<td> <label for="">Password : </label> </td>
<td> <input type="password" name="" id=""/></td>
</tr>
<tr>
<td> <label for="">Number : </label></td>
<td> <input type="tel" name="" id=""/></td>
</tr>
<tr>
<td> <label for=""> Gender : </label></td>
<td> <label for="">Male</label>
<input type="radio" name="Gender" id="Male"/>
<label for="">Female</label>
<input type="radio" name="Gender" id="Female"><td/>
<tr/>
<tr>
<td><label for=""> Date of Birth :</label></td>
<td><input type="date" name="" id=""/></td>
<tr/>




</form> */}
      </>
    );
  }
}
