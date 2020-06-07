import { observable } from 'mobx';
import vehicleMakes from "./VehicleMakes";
import vehicleModel from "./VehicleModel";


const stores = observable({
  vehicleMakes,
  vehicleModel
});


export default stores;