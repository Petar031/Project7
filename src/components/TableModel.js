import React from 'react';
import MaterialTable from 'material-table';
import '../layouts/Tables.css';
import { inject, observer } from 'mobx-react';
import VehicleModelStore from "../stores/VehicleModel";


export default inject('VehicleModel')(observer(function TableModel(props) {

    console.log(props);
    const store = new VehicleModelStore();
    console.log(JSON.stringify(store.allVehicleModels));

    const [state, setState] = React.useState({
        columns: [
            { title: 'ID', field: 'id' },
            { title: 'Make ID', field: 'makeID' },
            { title: 'Name', field: 'name' },
            { title: 'Abrv', field: 'abrv' },
        ],
        data: store.allVehicleModels
    });


    return (

        <MaterialTable
      
            title="Vehicles Model Table"
            columns={state.columns}
            data={state.data}
            editable={{ 
                onRowAdd: newData =>
                    new Promise(resolve => {
                        setTimeout(() => {
                            resolve();
                            setState(prevState => {
                                const data = [...prevState.data];
                                data.push(newData);
                                return { ...prevState, data };
                            });
                        }, 600);
                    }),
                onRowUpdate: (newData, oldData) =>        
                    new Promise(resolve => {
                        setTimeout(() => {
                            resolve();
                            if (oldData) {
                                setState(prevState => {
                                    const data = [...prevState.data];
                                    data[data.indexOf(oldData)] = newData;
                                    return { ...prevState, data };
                                });
                            }
                        }, 600);
                    }),
                onRowDelete: oldData =>
                    new Promise(resolve => {
                        setTimeout(() => {
                            resolve();
                            setState(prevState => {
                                const data = [...prevState.data];
                                data.splice(data.indexOf(oldData), 1);
                                return { ...prevState, data };
                            });
                        }, 600);
                    }),
            }}
        />
    );
}
));