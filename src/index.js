import React from 'react';
import ReactDOM from "react-dom";
import {BrowserRouter} from 'react-router-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-bootstrap-table/dist/react-bootstrap-table-all.min.css';
import { Provider } from 'mobx-react';
import VehicleMakes from './stores/VehicleMakes';
import VehicleModel from './stores/VehicleModel';



ReactDOM.render(

    <Provider VehicleMakes={VehicleMakes} VehicleModel={VehicleModel}>
      <BrowserRouter>
         <App />
      </BrowserRouter>
    </Provider>

,document.getElementById('root')
); 
serviceWorker.unregister(); 


