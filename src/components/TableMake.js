import React from 'react';
import MaterialTable from 'material-table';
import '../layouts/Tables.css';
import { inject, observer } from 'mobx-react';
import VehicleMakesStore from "../stores/VehicleMakes";


//@Observer (['Store'])  https://www.youtube.com/watch?v=ZAVSxBXnTr4 - 5:52
// inst https://www.npmjs.com/package/babel-plugin-transform-decorators-legacya , 7:00h
// when i write const{Store} = this.props; is the same as a  const Store = this.props.Store;

export default inject('VehicleMakes')(observer(function TableMake(props) {

    console.log(props);
    
    

    const store = new VehicleMakesStore();
    console.log(JSON.stringify(store.allVehicleMakes));
   

    const [state, setState] = React.useState({
        columns: [
            { title: 'ID', field: 'id' },
            { title: 'Name', field: 'name' },
            { title: 'Production', field: 'year' },
            { title: 'ABRV', field: 'abrv' },
        ],
        data: store.allVehicleMakes


    });


    /*const VehicleMakesStore = ({ row, fieldName, onCellValueChange }) => {
        const handleTextFieldChange = e => {
          onCellValueChange({
            fieldValue: e.target.value,
            fieldName: fieldName
          });
        };
    }*/

   /* var deleteIcon =                                        //prilagoditi navedene kod kodu koji se nalazi ispod
    (<IconButton onClick={console.log("delete")}>
      <DeleteIcon color="secondary" />
    </IconButton>
    );

   
    const editIcon = (
        <IconButton onClick={this.editItem}>
          <EditIcon color="primary" />
        </IconButton>
      ); */
  

   
    return (
        <MaterialTable      // nova linija koda key={n.id} onClick={this.getData.bind(this,n)}
        

            title="Vehicles Table"


           /* onChange={handleTextFieldChange} 
            id={fieldName}   
            defaultValue={row[fieldName]}  */


            
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

                                               //nova linija koda novo
                                return { ...prevState, data };
                                    });                                       //})} - prve tri lijevo novo });
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
            }
            }
        />
    );
    }          
)          
);
            