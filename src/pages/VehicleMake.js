import React from 'react'

import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';



const VehicleMake = () => {


    var products = [{
        id: 1,
        name: "Product1",
        price: 120
    }, {
        id: 2,
        name: "Product2",
        price: 80
    }];



    return (
        <div>
               hello from VehicleMake

              


               <BootstrapTable data={products} striped hover>
        <TableHeaderColumn dataField='id' isKey>Product ID</TableHeaderColumn>
        <TableHeaderColumn dataField='name'>Product Name</TableHeaderColumn>
        <TableHeaderColumn dataField='price'>Product Price</TableHeaderColumn>
        <TableHeaderColumn dataField='arb'>Abrv</TableHeaderColumn>
      </BootstrapTable>



        </div>
    );
}

export default VehicleMake; 



