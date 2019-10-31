import React, { Component } from 'react'
import {FaHome} from 'react-icons/fa'

 

export default class Navbar extends Component {
    render() {


     


        return (

          


            <nav class="navbar navbar-expand-lg navbar-light bg-dark">
            
  <a class="navbar-brand text-white text-uppercase" href="/">Car Application</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarText">
    <ul class="navbar-nav m-auto">
      <li class="nav-item active">
       <a class="nav-link text-white text-uppercase ml-5" href="/"> <FaHome/> Home Page<span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
       <a class="nav-link text-white text-uppercase ml-5" href="/VehicleMake">VehicleMake </a>
      </li>
      <li class="nav-item">
        <a class="nav-link text-white text-uppercase ml-5" href="/VehicleModel">   Vehicle Model</a>
      </li>
    </ul>
    <span class="navbar-text">
      Navbar text with an inline element
    </span>
  </div>
    
</nav>
 

        );
    }
}