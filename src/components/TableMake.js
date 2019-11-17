
import React, { Component } from 'react';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
/*import Vehicles from "./pages/VehicleMake";*/
/*import 'react-bootstrap-table/dist/react-bootstrap-table-all.min.css';*/
import {FaSort} from 'react-icons/fa'








export default class TableMake extends Component {


 render(){


  /*var name = "Opel Astra";
  var abrv = name.split(" ").map(function(str) {
   return str.substring(0, 2).toUpperCase();
 }).join(" ");
 console.log(abrv);  */
   
 const products = [];

 

    function addProducts(quantity) {

    

      const startId = products.length;
      for (let i = 0; i < quantity; i++) {
        const id = startId + i;
       
        products.push({
          id: id,
          name: 'Opel Agila',      //name: 'Opel Agila' + id,
          abrv: '',                           /*price: 2100 + i,*/
                           // abrv: 'Opel Agila'.substring(0,2)
        },


        {

          id: id,
          name: 'Opel Adam',
          /*price: 2100 + i,*/
          abrv: 'Short '+ id,
        },

        {
          id: id,
          name: 'Opel Chevette',
          /*price: 2100 + i,*/
          abrv: 'Short '+ id,
        },
        {
        id: id,
          name: 'Opel Corsa' ,
          /*price: 2100 + i,*/
          abrv: 'Short '+ id,
        }
        );
      }
    }


    addProducts(50); 
    
  
   
   
   



 
 
        return (
            <div>


                  
        <BootstrapTable data={ products } striped hover pagination insertRow  version='4'>
      
          <TableHeaderColumn dataField='id' isKey={ true } dataSort= { true }> Product ID <FaSort/></TableHeaderColumn>
          <TableHeaderColumn dataField='name' filter={ { type: 'TextFilter', delay: 500 } }     >Product Name</TableHeaderColumn>
          <TableHeaderColumn dataField='abrv' dataSort = { true }> Abrv <FaSort/></TableHeaderColumn>
      </BootstrapTable>
    
    
            </div>
        );
    }
  }
 
    
    