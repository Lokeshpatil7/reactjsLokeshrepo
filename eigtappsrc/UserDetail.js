import React, { Component } from "react";
import ReactDom from "react-dom";
import reactToWebComponent from "react-to-webcomponent";

export class UserDetail extends Component {
  render() {
    return <h1>In Userdetail with webComponent</h1>;
  }
}

const UserDetailComponent = reactToWebComponent(UserDetail, React, ReactDom);

window.customElements.define("user-detail", UserDetailComponent);
