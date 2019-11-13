import React from 'react';

import Vehicle from './../components/Vehicle';
import Navbar from "../components/Navbar";


export default function VehiclePage() {
    return (
        <div>
            <Navbar />
            <div class="col-sm-12 col-md-12 col-lg-12 col-xl-12 text-center">
                <div class="home-text">
                    <p class="text-muted">Hello there</p>
                </div>
                <Vehicle />
                <div class="home-footer-text">
                    <p class="text-muted">   2019 Copyright:></p>
                </div>
            </div>
        </div>

    );
}
