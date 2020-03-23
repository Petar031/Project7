import React from 'react';
import MaterialTable from 'material-table';
import '../layouts/Tables.css';
import { inject, observer } from 'mobx-react';
import VehicleModelStore from "../stores/VehicleModel";
import Button from "@material-ui/core/Button";


export default inject('VehicleModel')(observer(function TableModel(props) {

    console.log(props);
    const store = new VehicleModelStore();
    console.log(JSON.stringify(store.allVehicleModels));

    const [state, setState] = React.useState({  
        columns: [
            { title: 'ID', field: 'id' },
            { title: 'Name', field: 'name' },
            { title: 'Production', field: 'year' },
            { title: 'ABRV', field: 'abrv' },
        ],
        data: store.allVehicleMakes

    });
        
      
    return (
        <div className="App">
            <MaterialTable
                title="Vehicles Model Table"
                columns={store.columns} 
                data={store.data}
            />
            <Button onClick={store.addRow}>Add Row</Button> 
        </div>
         ); 
        }
));