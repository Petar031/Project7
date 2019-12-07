import React from 'react';
import MaterialTable from 'material-table';
import '../layouts/Tables.css';

/*import {observer} from 'mobx-react'; -priprema za mobx*/


//@Observer (['Store'])  https://www.youtube.com/watch?v=ZAVSxBXnTr4 - 5:52
// navodi potrebnu instalacije https://www.npmjs.com/package/babel-plugin-transform-decorators-legacya , postavljanje u 7:00h


// ili se voditi ovom metodom https://www.youtube.com/watch?v=Dp75-DnGFrU minuta 17:25
// import {inject, observer} from 'mobx-react';
//@inject ('Store')
//@observer
// kada napišem const{Store} = this.props; je isto što i const Store = this.props.Store;

export default function TableMake() {
//const {Store} = this.props;
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