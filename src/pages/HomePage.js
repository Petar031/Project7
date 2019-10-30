import React from 'react'
import {Link} from 'react-router-dom'
import MainImage from '../assets/backgroundImg.jpeg'

export default function HomePage() {

    return (
        
               
              <div class="container-fluid px-0">
                  <div class="row mx-0">
                      <div class="col-12 px-0">
                <img src={MainImage} alte="Car background image" class="img-fluid"></img>  
               <Link to="/VehicleMake">
               <button type="button" class="btn btn-secondary">Enter Application</button>
               </Link>
                </div>
               </div>
            </div>
     


       
    );
}