import { action } from 'mobx';

import data from './../components/data'; /*I added this*/


class VehicleMakeStore {

 


    vehicleMakeData = [ // this should be read from file (.json file) with function call that reads data from mockup file
    

        {
            name: 'Opel Ampera',
            id: '03246',
            abrv: 'OP - AM',
            year: 2011
        },
        {
            name: 'Opel Tigra',
            id: '03244',
            abrv: 'OP - TI',
            year: 2000
        },
        {
            name: 'Opel Karl',
            id: '03224',
            abrv: 'OP - KA',
            year: 2015
        },
        { name: 'Mazda Challenge', id: '02244', abrv: 'MA - CH', year: 2017 },
        { name: 'Mazda3 Sedan', id: '01244', abrv: 'MA - SE', year: 2018 },
        { name: 'Ford Mondeo', id: '74565', abrv: 'FO - MO', year: 2017 },
    ];

    

    columns = [
        { title: 'ID', field: 'id' },
        { title: 'Name', field: 'name' },
        { title: 'Abrv', field: 'abrv' },
    ];

   

    @action.bound
    onAdd(data) {
        this.vehicleMakeData.push(data); // this should call function that will write in file new data with the existing data
        //after writing to file, you need to read data from file again and save it to this.vehicleMakeData

        

        /*not nesesarry ti import data.json - i need to write and read from file - server/servis */
        /*{
            data.map((dataDetail, index) => {
                return
                {dataDetail.name}
                {dataDetail.id}
            })} */

    } //this stays

    @action.bound
    onEdit(data) {
        var itemForEdit;
        this.vehicleMakeData.forEach(item => {
            if (item.id == data.id) {
                return itemForEdit = item;
            }
        });
        if (itemForEdit != undefined) {
            this.vehicleMakeData.pop(itemForEdit);
            //$.extend(this.vehicleMakeData, data);
        }
    }

    @action.bound
    onDelete(data) {
        var itemForDelete;
        this.vehicleMakeData.forEach(item => {
            if (item.id == data.id) {
                return itemForDelete = item;
            }
        });
        if (itemForDelete != undefined) {
            this.vehicleMakeData.pop(itemForDelete);
        }
    }
} 

export default VehicleMakeStore;

