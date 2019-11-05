
import React from 'react'
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
/*import VehicleMake from "./pages/VehicleMake";*/
/*import 'react-bootstrap-table/dist/react-bootstrap-table-all.min.css';*/
import {FaSort} from 'react-icons/fa'

const VehicleMake = () => {


 

   
 const products = [];



    function addProducts(quantity) {


      const startId = products.length;
      for (let i = 0; i < quantity; i++) {
        const id = startId + i;
        products.push({
          id: id,
          name: 'Opel ' + id,
          /*price: 2100 + i,*/
          abrv: 'Short '+ id,
        });
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
    
 
    export default VehicleMake; 
    