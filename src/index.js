import React from 'react';
import ReactDOM from "react-dom";
import {BrowserRouter as Router} from 'react-router-dom'
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-bootstrap-table/dist/react-bootstrap-table-all.min.css';





/*
import { Provider } from 'mobx-react';
import Store from './stores/Stores';
import vehicleMakes from "./VehicleMakes";
import vehicleModels from "./VehicleModels";

const stores = (
<Provider stores={vehicleMakes}>   
<App/>
</Provider>
);
*/


ReactDOM.render(
<Router>
  <App />
</Router>, document.getElementById('root')); 


serviceWorker.unregister();
