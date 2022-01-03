import { Component } from "react";
import { Link } from "react-router-dom";
import "./index.css";

export default class Navbar extends Component {
  render() {
    return (
      <>
        <div className="container">
          <div className="row">
            <div className="col-4 col-lg-2"></div>
            <div className="col-md-8">
              <div className="nsp_header"></div>
            </div>
          </div>
        </div>

        <div className="nsp_header">
          <div className="col"></div>
        </div>

        <div className="shadow p-3 mb-5 bg-body rounded">
          <div className="container-md">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
              <div className="container-fluid">
                <div
                  className="collapse navbar-collapse"
                  id="navbarSupportedContent"
                >
                  <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                      <Link className="nav-link" to={"/home"}>
                        Home
                      </Link>
                    </li>

                    <li className="nav-item">
                      <Link className="nav-link" to={"/aboutUs"}>
                        AboutUs
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to={"/calculator"}>
                        Calculator
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to={"/application"}>
                        Application
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to={"/login"}>
                        Login
                      </Link>
                    </li>

                    <li className="nav-item">
                      <Link className="nav-link" to={"/FAQ"}>
                        FAQ
                      </Link>
                    </li>
                  </ul>
                  <form className="d-flex">
                    <input
                      className="form-control me-2"
                      type="search"
                      placeholder="Search"
                      aria-label="Search"
                    ></input>
                    <button className="btn btn-outline-success" type="submit">
                      Search
                    </button>
                  </form>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </>
    );
  }
}
