import React from 'react'
import {Link} from 'react-router-dom'
/*import MainImage from '../assets/backgroundImg.jpeg'*/


export default function HomePage() {

    return (
        
              
              <div class="HomePage">
                  <div class="col-sm-12 col-md-12 col-lg-12 col-xl-12 text-center">
                      <div class="home-text">
                <p class="text-muted">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>  
             <Link to="/VehicleMake">
               <button type="button" class="btn btn-secondary">Enter Application</button>
               </Link>
               </div>
               <div class="home-footer-text">
              <p class="text-muted"> © 2019 Copyright:></p>
              </div>
               </div>
                </div>
              
              
     
      

       
    );
}
