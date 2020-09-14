import { action } from 'mobx';

import data from './../components/data.json'; 


class VehicleMakeStore {

   
    vehicleMakeData = [   // this should be read from file (.json file) with function call that reads data from mockup file // this part below shoud be deleted becuase od data.json (this part still not working)
    


    ];     

  
    @action.bound
    onAdd(data) {
        this.vehicleMakeData.push(data); // this should call function that will write in file new data with the existing data
        //after writing to file, I need to read data from file again and save it to this.vehicleMakeData
    } 

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

