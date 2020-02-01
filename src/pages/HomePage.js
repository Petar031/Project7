import React from 'react'
import FooterHome from "./../layouts/FooterHome";
import HomeBody from "./../layouts/HomeBody";


export default function HomePage() {
    
    return (
            <div className="home-page">
              <div className="col-sm-12 col-md-12 col-lg-12 col-xl-12 text-center">
                 <HomeBody/>
                 <FooterHome/>      
              </div>
            </div>  
          );
        }