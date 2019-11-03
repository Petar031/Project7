import React from 'react'
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
/*import VehicleMake from "./pages/VehicleMake";*/


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
          abrv: 'Short'
        });
      }
    }
    
    addProducts(100); 
    
    
   
   


 
        return (
            <div>
                  
    
                  
        <BootstrapTable data={ products } striped hover pagination insertRow>
          <TableHeaderColumn dataField='id' isKey={ true }>Product ID</TableHeaderColumn>
          <TableHeaderColumn dataField='name' filter={ { type: 'TextFilter', delay: 500 } }     >Product Name</TableHeaderColumn>
          <TableHeaderColumn dataField='abrv'>Abrv</TableHeaderColumn>
      </BootstrapTable>
    
    
            </div>
        );
    }
    
    
    export default VehicleMake; 
    