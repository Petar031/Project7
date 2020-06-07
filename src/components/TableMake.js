import React from 'react';
import MaterialTable from 'material-table';
import '../layouts/Tables.css';
import { inject, observer } from 'mobx-react';
import { action } from 'mobx';
/*import VehicleMakes from '../stores/VehicleMakes';*/

export default inject('VehicleMakes')(observer(function TableMake(props) {

    console.log(props.allVehicleMakes);
      /*Declare a new state varibale, which we will call state */
      /*setState je metoda koja će nam pomoći da updejtamo state, tu metodu možemo koristiti bilo gdje kako bi updejtali state*/
    const [state, setState] = React.useState({
        //*And have this structure columns table:// /*columns and data are property here koje imaju svoje vrijednosti*/
        columns: [
            { title: 'ID', field: 'id' },
            { title: 'Name', field: 'name' },
            { title: 'Abrv', field: 'abrv' },
        ],
        /*prikazuje allVehicleMakes u tablici iz storea */
        /*props are beeing used for passing data from one component to another*/
        data: props.allVehicleMakes
    });
    return (
        <MaterialTable
        /*Then, I need to pass these columns into my Material-table like this*/
            title="Vehicle Make Table"
            columns={state.columns} //radimo passing columns to MaterialTable//
            data={state.data} /*I have to use the list of state data*/
            editable={{ 
            //onRowAdd: newData => new Promise((resolve) => console.log("onrowadd", newData)),
            //onRowUpdate: (newData, oldData) => new Promise((resolve) => console.log("onRowUpdate", newData, oldData)),
            //onRowDelete: (oldData) => new Promise((resolve) => console.log("onRowDelete", oldData)),

            /*potrebno nekako izvesti add new rok zakačiti u debugger*/
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
        />);
    }
));
