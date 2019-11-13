/*import React from './node_modules/react';*/
import React from 'react';
/*import backgroundImg from './assets/backgroundImg.jpeg'; */  /*na background se vratiti kasnije, uzeti kod koji radi, skroz ispod*/
import './App.css';

import HomePage from "./pages/HomePage";
import Vehicle from "./pages/Vehicle";
import VehicleModel from "./pages/VehicleModel";

import {Route} from "react-router-dom"  /*procijeniti dali tu ide Swithc ili ne 34min, on se inaće koristi ako u vehicle make imam još dosta stranica u koje ću ulaziti  */


/*Ovaj dio ćemo ispod brisati   */
//import Navbar from "./components/Navbar";


/*import TableMake from "./components/TableMake";*/
//import TableModel from "./components/TableModel";


//import HomeNavbar from "./components/HomeNavbar";
/*Ovaj dio iznad brišemo   */






function App() {

 
  

  return (
     <div class="container-fluid">  


      
       <Route exact path="/" component={HomePage} /> 
       <Route exact path="/Vehicles/" component={Vehicle}   />  
       <Route exact path="/VehicleModels/" component={VehicleModel}/>

     
       
      

       

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


<Route path="/Vehicles/" component={TableMake}/>
       <Route path="/VehicleModels/" component={TableModel}/>
      
       <Route path="/" component={HomeNavbar}/> 

<Route path="/Vehicles/" component={TableMake}/>

   <Route path="/VehicleModels/" component={TableModel}/>
      
       <Route path="/" component={HomeNavbar}/> 
    </div> */


    


  );
} 





export default App; 








