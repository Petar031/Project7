import React from 'react';

import Vehicles from '../components/Vehicles';
import Navbar from "../components/Navbar";


export default function VehiclePage() {
    return (
        <div>
            <Navbar />
            <div class="col-sm-12 col-md-12 col-lg-12 col-xl-12 text-center">
                <div class="home-text">
                    <p class="text-muted">Hello there</p>
                </div>
                <Vehicles />
                <div class="home-footer-text">
                    <p class="text-muted">   2019 Copyright:></p>
                </div>
            </div>
        </div>

    );
}
