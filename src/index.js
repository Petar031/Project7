import React from 'react';
import ReactDOM from "react-dom";
import {BrowserRouter} from 'react-router-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-bootstrap-table/dist/react-bootstrap-table-all.min.css';
import { Provider } from 'mobx-react';
import RootStore from './stores/RootStore';

function run() {
    const rootStore = new RootStore();
    runApplication({ rootStore });
}

function runApplication({ rootStore }) {
    ReactDOM.render(
        <Provider rootStore={rootStore} vehicleMakeStore={rootStore.vehicleMakeStore} vehicleModelStore={rootStore.vehicleModelStore} >
          <BrowserRouter>
             <App />
          </BrowserRouter>
        </Provider>
        ,document.getElementById('root')
    ); 
}

run();

