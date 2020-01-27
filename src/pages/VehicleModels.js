import React from 'react';
import VehicleModel from './../components/VehicleModel';
import Navbar from "../components/Navbar";
import DefaultFooter from "../layouts/DefaultFooter";
import VehicleModelStore from "../stores/VehicleModel";

 
class VehicleModelsPage extends React.Component {
    render() {
        return (
            <div>
                <Navbar />
                <div className="col-sm-12 col-md-12 col-lg-12 col-xl-12 text-center">
                    <div className="home-text">
                    </div>
                    <VehicleModel {...VehicleModelStore} />

                   
                    <DefaultFooter />
                </div>
            </div>
        );
    }
    /*on_change = () => {
        this.props.VehicleModelStore.change_me();
    }*/
}
export default VehicleModelsPage;

/*<button onClick={this.on_change}>Change</button> */