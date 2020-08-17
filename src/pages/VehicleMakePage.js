import Navbar from "../components/Navbar";
import TableMake from './../components/TableMake';
import DefaultFooter from "../layouts/DefaultFooter";
import { observer } from 'mobx-react';
import React from 'react';

@observer
class VehicleMakePage extends React.Component {
    render() {
        return (
            <div>
                <Navbar />
                <div className="col-sm-12 col-md-12 col-lg-12 col-xl-12 text-center">
                    <TableMake />
                    <DefaultFooter />
                </div>
            </div>
        );
    }
}
export default VehicleMakePage;







