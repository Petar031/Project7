import { extendObservable } from "mobx";








class VehicleMakes {
     
constructor () {
  extendObservable(this, {
        data: []

    });
  }

/*  @observable addMode = false;
  @observable selectedEmployees = [];

  @action
  toggleCheckbox(employeeId) {
    const index = this.selectedEmployees.indexOf(employeeId);
    if (index === -1) {
      this.selectedEmployees.push(employeeId);
    } else {
      this.selectedEmployees.splice(index, 1);
    }
  }

  @action
  toggleAddEmployee(){
    this.addMode = !this.addMode;
  } */




  /*@observable data = [];
@observable columns = [];

@action deleteRow(value) {
        this.text.push(value)
    } */
 
  



} 



export default new VehicleMakes();



