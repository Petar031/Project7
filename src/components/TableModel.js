/*import { MDBTable, MDBTableBody, MDBTableHead } from 'mdbreact'; */
import React from 'react'; 
/*import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table'; */
/*import Vehicles from "./pages/VehicleMake";*/
/*import 'react-bootstrap-table/dist/react-bootstrap-table-all.min.css';*/
/*import {FaSort} from 'react-icons/fa' */

import { MDBDataTable } from 'mdbreact'; 



const TableModel = () => {
  const data = {
    columns: [
      {
        label: 'ID',
        field: 'ID',
        sort: 'asc',
        width: 150
      },
      {
        label: 'Model',
        field: 'Model',
        sort: 'asc',
        width: 270
      },
      {
        label: 'Price',
        field: 'Price',
        sort: 'asc',
        width: 200
      },
      {
        label: 'Abrv',
        field: 'Abrv',
        sort: 'asc',
        width: 100
      },
    ],
    rows: [
      {
        ID: '01',
        Model: 'Opel Astra',
        Price: '100000',
        Abrv: 'OP AS'
        
      },
      {
        ID: '01',
        Model: 'Opel Astra',
        Price: '100000',
        Abrv: 'OP AS'
      },
      {
        ID: '01',
        Model: 'Opel Astra',
        Price: '100000',
        Abrv: 'OP AS'
      },
      {
        ID: '01',
        Model: 'Opel Astra',
        Price: '100000',
        Abrv: 'OP AS'
      },
      {
        ID: '01',
        Model: 'Opel Astra',
        Price: '100000',
        Abrv: 'OP AS'
      },
      {
        ID: '01',
        Model: 'Opel Astra',
        Price: '100000',
        Abrv: 'OP AS'
      },
      {
        ID: '01',
        Model: 'Opel Astra',
        Price: '100000',
        Abrv: 'OP AS'
      },
      {
        ID: '01',
        Model: 'Opel Astra',
        Price: '100000',
        Abrv: 'OP AS'
      },
      {
        ID: '01',
        Model: 'Mazda',
        Price: '200000',
        Abrv: 'MA'
      },
      {
        ID: '01',
        Model: 'Hundai',
        Price: '200000',
        Abrv: 'HU'
      }
    
  ]
};

return (
  <MDBDataTable hover striped bordered  order={['price', 'asc' ]} data={data} />
  );
}

export default TableModel;


