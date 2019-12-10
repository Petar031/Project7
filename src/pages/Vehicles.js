import React from 'react';
import Vehicle from './../components/Vehicle';
import Navbar from "../components/Navbar";
import DefaultFooter from "../layouts/DefaultFooter";

export default function VehiclePage() {
    
    return (
        <div>
            <Navbar />
             <div class="col-sm-12 col-md-12 col-lg-12 col-xl-12 text-center">
               <div class="home-text">
               </div>
                <Vehicle />
                <DefaultFooter/>
            </div>
        </div>
       );
    }
