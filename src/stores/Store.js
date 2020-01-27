import { observable } from 'mobx';
import vehicleMakes from "./VehicleMakes";
import vehicleModels from "./VehicleModels";


// observable property that is read during the execution of a tracked function - ono što želimo nadgledati
//computed - are values that can be derived from the existing state of other computed values. They are very similar to formulas in spreadsheet
// action - is function where you change the value of the property which we observeaa





//https://www.youtube.com/watch?v=N5UU_Np2MJI - example of how to insert two stores and example for Mobx Persist !!!!!!!


const stores = observable({
  vehicleMakes,
  vehicleModels
});



export default stores;
//export default new Store(); - možda će tako ići export



//hydrate('stores', this.vehicleMakes);
//https://www.youtube.com/watch?v=N5UU_Np2MJI - check link on minute 3:00h
//hydrate ('vehicleMakes', this.vehicleMakes);  //check this line once again
//hydrate ('vehicleMakes', this.vehicleMakes);  //this part goes for second store
