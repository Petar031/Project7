import React from 'react';
import './App.css';
import HomePage from "./pages/HomePage";
import VehicleMakePage from "./pages/VehicleMakePage";
import VehicleModelPage from "./pages/VehicleModelPage";
import { Route } from "react-router-dom";

function App() {

 return (
    <div className="App">  
       <Route exact path="/" component={HomePage} /> 
         <Route exact path="/Vehicles/" component={VehicleMakePage} />  
       <Route exact path="/VehicleModels/" component={VehicleModelPage}/>
     </div>
  );
} 

export default App; 

 