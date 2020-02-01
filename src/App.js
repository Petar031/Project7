/*import React from './node_modules/react';*/
import React from 'react';
/*import backgroundImg from './assets/backgroundImg.jpeg'; background*/  
import './App.css';
import HomePage from "./pages/HomePage";
import Vehicles from "./pages/Vehicles";
import VehicleModels from "./pages/VehicleModels";
import { Route } from "react-router-dom";




function App() {

 return (
    <div className="App">  
       <Route exact path="/" component={HomePage} /> 
         <Route exact path="/Vehicles/" component={Vehicles}   />  
       <Route exact path="/VehicleModels/" component={VehicleModels}/>
     </div>
  );
} 

export default App; 