import { observable, action } from "mobx";
import { Component } from "react";






class VehicleMakes extends Component {
     

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

@observable data = [];
@observable columns = [];

@action deleteRow(value) {
        this.text.push(value)
    }
 
  



} 
export default VehicleMakes;



