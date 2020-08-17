import React from 'react';
import MaterialTable from 'material-table';
import '../layouts/Tables.css';
import { observer } from 'mobx-react';
import { VehicleMakeStore } from './../stores';
import 'material-table';
import 'react';

class TableMake extends React.Component {
    constructor(props) {
        super(props);
        this.vehicleMakeStore = new VehicleMakeStore();
    }

    render() {
        return (
            <MaterialTable
                title="Vehicle Make Table"
                columns={this.vehicleMakeStore.columns} 
                data={this.vehicleMakeStore.vehicleMakeData}
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

export default observer(TableMake);
