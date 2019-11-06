/*import React from './node_modules/react';*/
import React from 'react';
/*import backgroundImg from './assets/backgroundImg.jpeg'; */  /*na background se vratiti kasnije, uzeti kod koji radi, skroz ispod*/
import './App.css';

import HomePage from "./pages/HomePage";
import Vehicles from "./pages/Vehicles";
import VehicleModels from "./pages/VehicleModels";

import {Route} from "react-router-dom"  /*procijeniti dali tu ide Swithc ili ne 34min, on se inaće koristi ako u vehicle make imam još dosta stranica u koje ću ulaziti  */
import Navbar from "./components/Navbar";


import TableMake from "./components/TableMake";
import TableModel from "./components/TableModel";










function App() {

 
  

  return (
     <div class="container-fluid">  


       <Navbar />
       <Route exact path="/" component={HomePage} /> 
       <Route exact path="/Vehicles/" component={Vehicles}   />  
       <Route exact path="/VehicleModels/" component={VehicleModels}/>

       <Route path="/Vehicles/" component={TableMake}/>
       <Route path="/VehicleModels/" component={TableModel}/>
      

     </div>
   /* <div className="App">
      <header className="App-header">
        <img src={backgroundImg} className="Main-background" alt="backgroundImg" />
        <div class="bg-primary">
        <h3>
         Sarma je pala
        </h3>
        </div>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div> */


    


  );
} 





export default App; 








