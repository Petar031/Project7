import React, { Component } from 'react'
import {FaHome} from 'react-icons/fa'

 
export default class Navbar extends Component {
  render() {
    return (
       <nav className="navbar navbar-expand-lg navbar-light bg-dark">
            <a className="navbar-brand text-white text-uppercase" href="/">Car Application</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
          <div className="collapse navbar-collapse" id="navbarText">
            <ul className="navbar-nav m-auto">
              <li className="nav-item active">
                <a className="nav-link text-white text-uppercase ml-5" href="/"> <FaHome/>Home Page<span className="sr-only">(current)</span></a>
              </li>
              <li className="nav-item">
              <a className="nav-link text-white text-uppercase ml-5" href="/Vehicles">Vehicles </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white text-uppercase ml-5" href="/VehicleModels">Vehicle Models</a>
              </li>
            </ul>
              <span className="navbar-text text-white">
                Established since 2012
              </span>
          </div>
      </nav>
        );
    }
}
