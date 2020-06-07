import React from 'react';
import VehicleModel from './../components/VehicleModel';
import Navbar from "../components/Navbar";
import DefaultFooter from "../layouts/DefaultFooter";
/*import VehicleModelStore from "../stores/VehicleModel";*/
import Store from "../stores/Store";

 
class VehicleModelPage extends React.Component {
    render() {
        console.log(Store);
        return (
            <div>
                <Navbar />
                <div className="col-sm-12 col-md-12 col-lg-12 col-xl-12 text-center">
                    <div className="home-text">
                    </div>
                    <VehicleModel {...Store.vehicleModel} /> 
                    <DefaultFooter />
                </div>
            </div>
        );
    }
}
export default VehicleModelPage;


