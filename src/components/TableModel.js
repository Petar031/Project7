/*import { MDBTable, MDBTableBody, MDBTableHead } from 'mdbreact'; */
import React from 'react'; 
/*import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table'; */
/*import Vehicles from "./pages/VehicleMake";*/
/*import 'react-bootstrap-table/dist/react-bootstrap-table-all.min.css';*/
/*import {FaSort} from 'react-icons/fa' */
import {FaSort} from 'react-icons/fa'
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
        ID : '01453', 
        Model: 'Opel Chevette',
        Price: '100000',
        Abrv: 'OP CH'
        
      },
      {
        ID: '02435',
        Model: 'Opel Corsa',
        Price: '120000',
        Abrv: 'OP CO'
      },
      {
        ID: '03345',
        Model: 'Opel Tigra',
        Price: '130000',
        Abrv: 'OP TI'
      },
      {
        ID: '04564',
        Model: 'Opel Agila',
        Price: '160000',
        Abrv: 'OP AG'
      },
      {
        ID: '05987',
        Model: 'Opel Adam',
        Price: '200000',
        Abrv: 'OP AD'
      },
      {
        ID: '06654',
        Model: 'Opel Olympia',
        Price: '210000',
        Abrv: 'OP OL'
      },
      {
        ID: '07213',
        Model: 'Opel Ampera',
        Price: '220000',
        Abrv: 'OP AM'
      },
      {
        ID: '08545',
        Model: 'Opel Ascona',
        Price: '240000',
        Abrv: 'OP AS'
      },
      {
        ID: '09890',
        Model: 'Mazda CX-5 G165 Emotion ',
        Price: '260000',
        Abrv: 'MA EM'
      },
      {
        ID: '10009',
        Model: 'Hundai CX-5 CD150 Challenge',
        Price: '250000',
        Abrv: 'HU CH'
      }
    
  ]
};

return (
  <MDBDataTable   hover striped bordered  order={['ID', 'asc', ]} data={data} />
  );
}

export default TableModel;


