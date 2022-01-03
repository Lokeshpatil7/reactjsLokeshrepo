import react, { Component } from "react";
import { Link } from "react-router-dom";
export default class Footer extends Component {
  render() {
    return (
      <>
        <div className="container">
          <div className="row">
            <div className="col-4 col-lg-2"></div>
            <div className="col-md-8">
              <div className=""></div>
            </div>
          </div>
        </div>

        <div className="">
          <div className="col"></div>
        </div>

        <div className="shadow p-3 mb-5 bg-body rounded">
          <div className="container-md">
            <footer className="navbar navbar-expand-lg navbar-light bg-light">
              <div className="container-fluid">
                <div
                  className="collapse navbar-collapse"
                  id="navbarSupportedContent"
                >
                  <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                      <Link className="nav-link" to={"/features"}>
                        Features
                      </Link>
                    </li>

                    <li className="nav-item">
                      <Link className="nav-link" to={"/calculator"}>
                        Calculator
                      </Link>
                    </li>

                    <li className="nav-item">
                      <Link className="nav-link" to={"/document"}>
                        Document
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </footer>
          </div>
        </div>
        {/* <footer>
          <nav>
            <div class="logo">
              <h1 class="animated infinite heartBeat">
                {" "}
                <a href="./ContactandAbout/About.html">
                  to Share your experience click here
                </a>
              </h1>
            </div>
            <div class="menu">
              <a href="./cities/WEB2.HTML">Gallery</a>
              <a href="./ContactandAbout/About.html">About</a>
              <a href="./ContactandAbout/contact.html">Contact</a>
              <a href="./webpg.html">Home</a>
            </div>
          </nav>
        </footer> */}
      </>
    );
  }
}
