import React , {Component} from "react";
import { Link } from "react-router-dom";

export default class NavbarComponent extends Component{
    render(){
        return(
<>
 
<div>
   
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <Link class="navbar-brand" to={"/navbar"}>
        Navbar
        </Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to={"/posts"}>
              Posts
            </Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to={"/todo"}> 
           To Do
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