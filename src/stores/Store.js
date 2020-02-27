import { observable } from 'mobx';
import vehicleMakes from "./VehicleMakes";
import vehicleModels from "./VehicleModels";


const stores = observable({
  vehicleMakes,
  vehicleModels
});


export default stores;



//export default new Store(); 



/*
export default {
  UserStore: new UserStore(),
  ChatStore: new ChatStore(),
}; */

