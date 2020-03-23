import { observable, action } from 'mobx';
import { Component } from "react";


class VehicleModel extends Component{

    @observable llVehicleModels = [

		{ name: 'Opel Ampera', id: '03244', abrv: 'OP - AM', makeID: '03246'},
		{ name: 'Opel Tigra', id: '03241', abrv: 'OP - TI', makeID: '03244'},
		{ name: 'Opel Karl', id: '032000', abrv: 'OP - KA', makeID: '03224' },
		{ name: 'Mazda Challenge', id: '02555', abrv: 'MA - CH', makeID: '02244'},
		{ name: 'Mazda3 Sedan', id: '01200', abrv: 'MA - SE', makeID: '01244'},
		{ name: 'Ford Mondeo', id: '74443', abrv: 'FO - MO', makeID: '74565'},

		];

	/*const initialData = [
			{ title: "Dak", fiedl: "Prescott"}
		  ];

	const addData = [
       
            { title: 'ID', field: 'id' },
            { title: 'Make ID', field: 'makeID' },
            { title: 'Name', field: 'name' },
            { title: 'Abrv', field: 'abrv' }
		]; */
		
	/*@action	addRow = () => {
			if (this.index < this.data.length) {
			  this.data = [...this.data, addData[this.index++]];   
			} 
		  }  */
	}
export default VehicleModel;
