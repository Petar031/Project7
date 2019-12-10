import React from 'react';
import VehicleModel from './../components/VehicleModel';
import Navbar from "../components/Navbar";
import DefaultFooter from "../layouts/DefaultFooter";

export default function VehicleModelsPage() {
    return (
        <div>
            <Navbar />
             <div class="col-sm-12 col-md-12 col-lg-12 col-xl-12 text-center">
                <div class="home-text">   
                </div>
                <VehicleModel />
                <DefaultFooter/>
            </div>
        </div>
    );
}
