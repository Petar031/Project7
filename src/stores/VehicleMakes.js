import { observable, action } from 'mobx';
import { Component } from "react";


class VehicleMakes extends Component {
    @observable allVehicleMakes = [
        { name: 'Opel Ampera', id: '03246', abrv: 'OP - AM', year: 2011 },
        { name: 'Opel Tigra', id: '03244', abrv: 'OP - TI', year: 2000 },
        { name: 'Opel Karl', id: '03224', abrv: 'OP - KA', year: 2015 },
        { name: 'Mazda Challenge', id: '02244', abrv: 'MA - CH', year: 2017 },
        { name: 'Mazda3 Sedan', id: '01244', abrv: 'MA - SE', year: 2018 },
        { name: 'Ford Mondeo', id: '74565', abrv: 'FO - MO', year: 2017 },
    ]; 

    @action add(data){
        const existing = this.all;
        this.all = existing.concat(data);
    }
    /*@action onRowAdd */ 
    /* @action resetValues() {
        this.values.replace(VehicleMakes);
    }
    constructor() {
        this.resetValues()
    }*/
    /*@observable state = "pending"
    @action
    this.state.columns[]*/

    /*
  @observable dogList = ['Pluto', 'Oliver', 'Humphrey'];
  @observable view = 'listView';
  @action addDog(dog){
   this.dogList.push(dog);
  }*/

  
  /*
  @action onRowAdd(allVehicleMakes) {this.allVehicleMakes.push(allVehicleMakes)}
  @action setView(view){this.view = view;}
  */

} 

export default new VehicleMakes();