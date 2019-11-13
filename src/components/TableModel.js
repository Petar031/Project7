import React,{ Component } from 'react'
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
/*import Vehicles from "./pages/VehicleMake";*/
/*import 'react-bootstrap-table/dist/react-bootstrap-table-all.min.css';*/
import {FaSort} from 'react-icons/fa'





export default class TableModel extends Component {


  render(){


 

   
 const products = [];



    function addProducts(quantity) {


      const startId = products.length;
      for (let i = 0; i < quantity; i++) {
        const id = startId + i;
        products.push({
          id: 45432 + i,
          model: 'Opel ' + id,
          price: 180000 + i,
          abrv: 'Opel '+ id,
       
        },/*zaredz izbaciti  */

       { 
        id: 45678 + i,    
       model: 'Mazda ' + id, 
       price: 130000 + i,
       abrv: 'Mazda '+ id,
    },    /*ovaj cijeli red izbaciti  */


{
      
        id: 50000 + i,    
       model: 'Skoda ' + id, 
       price: 110000 + i,
       abrv: 'Skoda ' + id,
        /*ovaj cijeli red izbaciti */
},

{
        id: 60000 + i,    
        model: 'Honda ' + id, 
        price: 170000 + i,
        abrv: 'Honda ' + id,
},

{
        id: 70000 + i,    
        model: 'Volkswagen ' + id, 
        price: 170000 + i,
        abrv: 'Volkswagen ' + id,
}
        
        );
      }
    }


    addProducts(50); 
    
  
   
   
   



 
 
        return (
            <div>


                  
        <BootstrapTable data={ products } striped hover pagination insertRow version='4'>
      
          <TableHeaderColumn dataField='id' isKey={ true } dataSort= { true }> Vehicle ID <FaSort/></TableHeaderColumn>
          <TableHeaderColumn dataField='model' filter={ { type: 'TextFilter', delay: 500 } }     >Vehicle Model <FaSort/></TableHeaderColumn>
          <TableHeaderColumn dataField='price' filter={ { type: 'TextFilter', delay: 500 } }  dataSort = { true }> Price (KN) <FaSort/></TableHeaderColumn>
          <TableHeaderColumn dataField='abrv' dataSort = { true } > Abrv <FaSort/></TableHeaderColumn>
      </BootstrapTable>
    
    
            </div>
        );
    }
  }