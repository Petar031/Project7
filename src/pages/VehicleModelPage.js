import Navbar from "../components/Navbar";
import TableModel from '../components/TableModel';
import DefaultFooter from "../layouts/DefaultFooter";
import { observer } from 'mobx-react';
import React from 'react';

@observer
class VehicleModelPage extends React.Component {
    render() {
        return (
            <div>
                <Navbar />
                <div className="col-sm-12 col-md-12 col-lg-12 col-xl-12 text-center">
                    <TableModel /> 
                    <DefaultFooter />
                </div>
            </div>
        );
    }
}
export default VehicleModelPage;


