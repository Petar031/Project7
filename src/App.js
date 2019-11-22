/*import React from './node_modules/react';*/
import React from 'react';
/*import backgroundImg from './assets/backgroundImg.jpeg'; */  /*na background se vratiti kasnije, uzeti kod koji radi, skroz ispod*/
import './App.css';

import HomePage from "./pages/HomePage";
import Vehicles from "./pages/Vehicles";
import VehicleModels from "./pages/VehicleModels";

import {Route} from "react-router-dom"  /*procijeniti dali tu ide Swithc ili ne 34min, on se inaće koristi ako u vehicle make imam još dosta stranica u koje ću ulaziti  */


//  mobx obrisati import za App.css
//  import {inject, observer} from 'mobx-react';
//  @inject ('Store')  --injecatmo app sa Store, passes my store as a prop
//  @observer
//  class App extends Component {
//    handleSubmit = (e) => {
//      e.preventDefault();
//        const bird = this.bird.value;
//        this.props.Store.addStore(store)         
//    }
//  render(){
//      const {BirdStore} = this.props;  //accesing data from an object
//    <div className="App">
//        <h2>You have {Store.birdCount} birds </h2>  
//          <form onSubmit={e => this.handleSubmit(e)}>      //kreiramo event
//                 <input type="text" placeholder="Enter bird" ref={input => this.bird = input}/>
//                 <button>Add bird</button>
//          </form>
//         
//         
//
//    </div>
//           };
//          }
//         }
//   export default App;









/*Ovaj dio ćemo ispod brisati   */
//import Navbar from "./components/Navbar";

/*import TableMake from "./components/TableMake";*/
//import TableModel from "./components/TableModel";

//import HomeNavbar from "./components/HomeNavbar";
/*Ovaj dio iznad brišemo   */



function App() {

 
  

  return (
     <div class="App">  


       
       <Route exact path="/" component={HomePage} /> 
       <Route exact path="/Vehicles/" component={Vehicles}   />  
       <Route exact path="/VehicleModels/" component={VehicleModels}/>

    
      

       

     </div>
    // <FooterHome/>


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








