import { observable } from 'mobx';

class VehicleMakes {

    @observable allVehicleMakes = [
        { name: 'Opel Ampera', id: '03246', abrv: 'OP - AM', year: 2011 },
        { name: 'Opel Tigra', id: '03244', abrv: 'OP - TI', year: 2000 },
        { name: 'Opel Karl', id: '03224', abrv: 'OP - KA', year: 2015 },
        { name: 'Mazda Challenge', id: '02244', abrv: 'MA - CH', year: 2017 },
        { name: 'Mazda3 Sedan', id: '01244', abrv: 'MA - SE', year: 2018 },
        { name: 'Ford Mondeo', id: '74565', abrv: 'FO - MO', year: 2017 },
    ];
}

export default new VehicleMakes();
