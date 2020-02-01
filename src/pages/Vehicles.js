import React from 'react';
import Vehicle from './../components/Vehicle';
import Navbar from "../components/Navbar";
import DefaultFooter from "../layouts/DefaultFooter";
import VehicleMakesStore from "../stores/VehicleMakes";



const VehiclePage = function() {                               
    
    return (

        <div>
            <Navbar />
             <div className="col-sm-12 col-md-12 col-lg-12 col-xl-12 text-center">
               <div className="home-text"></div>
                <Vehicle {...VehicleMakesStore} />
                <DefaultFooter/>
            </div>
        </div>

       );
}

export default VehiclePage;






