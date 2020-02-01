import React from 'react';
import MaterialTable from 'material-table';
import '../layouts/Tables.css';
import { inject, observer } from 'mobx-react';
import VehicleMakesStore from "../stores/VehicleMakes";


export default inject('VehicleMakes')(observer(function TableMake(props) {

    console.log(props);
    const store = new VehicleMakesStore();
    console.log(JSON.stringify(store.allVehicleMakes));
   
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

        <MaterialTable      
        
            title="Vehicles Table"
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
            }
            }
        />
    );
    }          
)          
);
            