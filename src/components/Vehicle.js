import React from 'react';
import TableMake from "./TableMake";

/*import MaterialTable from 'material-table';*/
/*import VehicleMakesStore from "../stores/VehicleMakes";*/




const Vehicle = function (props) {

    console.log(props);

   

    return (
            <div>  
                 
                <TableMake {...props} /> 

              

            </div>

        );  
    }


    

export default Vehicle; 


 /*<button onClick={this.on_change.bind(this)}>Change</button>



/*div onClick = {VehicleMakesStore.updateElement} novo */
/*<button>add record</button>
<button onClick>clear table</button> */
/* <button>add record</button>
<button onClick>clear table</button> */

/*<h2>You have {VehicleMakes.addVehicleMakes} birds</h2>*/