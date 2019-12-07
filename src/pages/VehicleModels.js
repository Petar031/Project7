import React from 'react';
import VehicleModel from './../components/VehicleModel';
import Navbar from "../components/Navbar";


export default function VehicleModelsPage() {
    return (
        <div>
            <Navbar />
             <div class="col-sm-12 col-md-12 col-lg-12 col-xl-12 text-center">
                <div class="home-text">   
                </div>
                <VehicleModel />
                <div class="home-footer-text fixed-bottom">
                <p class="text-muted">© 2019 Copyright Petar Čučković</p>
                </div>
            </div>
        </div>
    );
}
