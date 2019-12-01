import React from 'react';
import MaterialTable from 'material-table';
import '../layouts/Tables.css';




export default function TableModel() {
  const [state, setState] = React.useState({
    columns: [
      { title: 'ID', field: 'id'},
      { title: 'Make ID', field: 'makeID'},
      { title: 'Name', field: 'name'},
       { title: 'Abrv', field: 'abrv'},

       
     
    ],
    data: [
      {  name: 'Opel Ampera',
         id: '03244',
         abrv: 'OP - AM',
         makeID: '03246'
     
    
    },

    {  
      
    name: 'Opel Tigra',
    id: '03241',
    abrv: 'OP - TI',
    makeID: '03244'
},

{  
      
  name: 'Opel Karl',
  id: '032000',
  abrv: 'OP - KA',
  makeID: '03224'
},

{  
      
  name: 'Mazda Challenge',
  id: '02555',
  abrv: 'MA - CH',
  makeID: '02244'
},

{  
      
  name: 'Mazda3 Sedan',
  id: '01200',
  abrv: 'MA - SE',
  makeID: '01244'
},

      {
        name: 'Ford Mondeo',
        id: '74443',
        abrv: 'FO - MO',
        makeID: '74565'
      },
    ],
  });

  return (

    <MaterialTable
      title="Vehicles Model Table"
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










