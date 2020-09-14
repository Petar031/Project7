import { action } from 'mobx';

class VehicleModelStore {
    vehicleModelData = [
		{ name: 'Opel Ampera', id: '03244', abrv: 'OP - AM', makeID: '03246'},
		{ name: 'Opel Tigra', id: '03241', abrv: 'OP - TI', makeID: '03244'},
		{ name: 'Opel Karl', id: '032000', abrv: 'OP - KA', makeID: '03224' },
		{ name: 'Mazda Challenge', id: '02555', abrv: 'MA - CH', makeID: '02244'},
		{ name: 'Mazda3 Sedan', id: '01200', abrv: 'MA - SE', makeID: '01244'},
		{ name: 'Ford Mondeo', id: '74443', abrv: 'FO - MO', makeID: '74565'},
	];

    columns = [
        { title: 'ID', field: 'id' },
        { title: 'Make ID', field: 'makeID' },
        { title: 'Name', field: 'name' },
        { title: 'Abrv', field: 'abrv' },
    ];

    @action.bound
    onAdd(data) {
        this.vehicleModelData.push(data);
    }

    @action.bound
    onEdit(data) {
        var itemForEdit;
        this.vehicleModelData.forEach(item => {
            if (item.id == data.id) {
                return itemForEdit = item;
            }
        });
        if (itemForEdit != undefined) {
            var arrWithout = this.vehicleModelData.pop(itemForEdit);
            this.vehicleModelData = arrWithout;
            this.vehicleModelData.push(data);
        }
    }

    @action.bound
    onDelete(data) {
        var index = this.vehicleModelData.indexOf(data);
        if (index > -1) {
            this.vehicleMakeData = this.vehicleModelData.splice(index, 1);
        }
    }
}

export default VehicleModelStore;

