import React , { Component } from 'react';
import { VehicleModelStore } from './../stores';
import MaterialTable from 'material-table';
//import '../layouts/Tables.css';
import { observer } from 'mobx-react';

class TableModel extends Component {
    render() {
        var vehicleModelStore = new VehicleModelStore();
        var {
            vehicleModelData,
            columns
        } = vehicleModelStore;
        console.log(vehicleModelData);
        return (
            <MaterialTable
                title="Vehicle Model Table"
                columns={columns}
                data={vehicleModelData}
                editable={{
                    onRowAdd: (data) =>
                        new Promise(resolve => {
                            setTimeout(() => {
                                resolve();
                                this.vehicleMakeStore.onAdd(data);
                            }, 600);
                        }),
                    onRowUpdate: (data) =>
                        new Promise(resolve => {
                            setTimeout(() => {
                                resolve();
                                this.vehicleMakeStore.onEdit(data);
                            }, 600);
                        }),
                    onRowDelete: (data) =>
                        new Promise(resolve => {
                            setTimeout(() => {
                                resolve();
                                this.vehicleMakeStore.onDelete(data);
                            }, 600);
                        })
                }}
            />
        );
    }
};

export default observer(TableModel);