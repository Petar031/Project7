import React from 'react';
import MaterialTable from 'material-table';
/*import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';*/
/*import Vehicles from "./pages/VehicleMake";*/
/*import 'react-bootstrap-table/dist/react-bootstrap-table-all.min.css';*/
/*import {FaSort} from 'react-icons/fa'*/
/*import { MDBDataTable } from 'mdbreact'; */





/*
export default class TableMake extends Component {

 
  
 

 render(){
 
   

     return (

      
      


      
     );


 }
} */


export default function MaterialTableDemo() {
  const [state, setState] = React.useState({
    columns: [
      { title: 'ID', field: 'id'},
      { title: 'Name', field: 'name'},
      { title: 'ABRV', field: 'abrv'},
       { title: 'Production', field: 'year'},

       
     
    ],
    data: [
      {  name: 'Opel Astra',
         id: '03244',
         abrv: 'AP-AS',
         year: 2004

    
    },

    {  
      
    name: 'Opel Astra',
    id: '03244',
    abrv: 'AP-AS',
    year: 2004
},


{  
      
  name: 'Opel Astra',
  id: '03244',
  abrv: 'AP-AS',
  year: 2004
},


{  
      
  name: 'Opel Astra',
  id: '03244',
  abrv: 'AP-AS',
  year: 2004
},

{  
      
  name: 'Opel Astra',
  id: '03244',
  abrv: 'AP-AS',
  year: 2004
},

      {
        name: 'Mazda Asuno',
        id: '34565',
        abrv: 'MA-AS',
        year: 2005
      },
    ],
  });

  return (
    <MaterialTable
      title="Editable Example"
      columns={state.columns}
      data={state.data}
      editable={{
        onRowAdd: newData =>
          new Promise(resolve => {
            setTimeout(() => {
              resolve();
              setState(prevState => {
                const data = [...prevState.data];
                data.push(newData);
                return { ...prevState, data };
              });
            }, 600);
          }),
        onRowUpdate: (newData, oldData) =>
          new Promise(resolve => {
            setTimeout(() => {
              resolve();
              if (oldData) {
                setState(prevState => {
                  const data = [...prevState.data];
                  data[data.indexOf(oldData)] = newData;
                  return { ...prevState, data }; 
                });
              }
            }, 600);
          }),
        onRowDelete: oldData =>
          new Promise(resolve => {
            setTimeout(() => {
              resolve();
              setState(prevState => {
                const data = [...prevState.data];
                data.splice(data.indexOf(oldData), 1);
                return { ...prevState, data };
              });
            }, 600);
          }),
      }}
    />
  );
}
