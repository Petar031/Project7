import React from 'react';
import MaterialTable from 'material-table';
import '../layouts/Tables.css';




export default function TableMake() {
  const [state, setState] = React.useState({
    columns: [
      { title: 'ID', field: 'id'},
      { title: 'Name', field: 'name'},
      
      {title: 'Production', field:'year'},
      {title: 'ABRV', field: 'abrv'},
      

       
     
    ],
    data: [
      {  name: 'Opel Ampera',
         id: '03246',
         abrv: 'OP - AM',
         year: 2011

    
    },

    {  
      
    name: 'Opel Tigra',
    id: '03244',
    abrv: 'OP - TI',
    year: 2000
},

{  
      
  name: 'Opel Karl',
  id: '03224',
  abrv: 'OP - KA',
  year: 2015
},

{  
      
  name: 'Mazda Challenge',
  id: '02244',
  abrv: 'MA - CH',
  year: 2017
},

{  
      
  name: 'Mazda3 Sedan',
  id: '01244',
  abrv: 'MA - SE',
  year: 2018
},

      {
        name: 'Ford Mondeo',
        id: '74565',
        abrv: 'FO - MO',
        year: 2017
      },
    ],
  });

  return (
    <MaterialTable
      title="Vehicles Table"
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







