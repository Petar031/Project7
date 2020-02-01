import React from 'react';
import TableModel from "./TableModel";



const VehicleModel = function(props){

    console.log(props);
    return (
        <div>
            <TableModel {...props}/>
        </div>
    );
}

export default VehicleModel;