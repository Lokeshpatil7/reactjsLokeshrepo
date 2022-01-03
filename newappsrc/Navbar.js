import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Navbar extends Component {
  render() {
    return (
      <>
        <div>
          <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="container-fluid">
              <a class="navbar-brand" href="#">
                Navbar
              </a>
              <button
                class="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                  <li class="nav-item">
                    <Link
                      class="nav-link active"
                      aria-current="page"
                      to={"/posts"}
                    >
                      Post
                    </Link>
                  </li>
                  <li class="nav-item">
                    <Link class="nav-link" to={"/todos"}>
                      ToDo
                    </Link>
                  </li>
                  <li class="nav-item">
                    <Link
                      class="nav-link active"
                      aria-current="page"
                      to={"/users"}
                    >
                      User
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </>
    );
  }
}
