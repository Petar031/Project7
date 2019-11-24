
import React, { Component } from 'react';

/*import {FaSort} from 'react-icons/fa';*/
import { MDBCard, MDBCardHeader, MDBCardBody, MDBDataTable } from "mdbreact";







export default class TableMake extends Component {


 render(){


  /*var name = "Opel Astra";
  var abrv = name.split(" ").map(function(str) {
   return str.substring(0, 2).toUpperCase();
 }).join(" ");
 console.log(abrv);  */
   
 const columns = ["Person Name", "Age", "Company Name", "Country", "City"];

const data = [
  ["Aurelia Vega", 30, "Deepends", "Spain", "Madrid"],
  ["Guerra Cortez", 45, "Insectus", "USA", "San Francisco"],
  ["Guadalupe House", 26, "Isotronic", "Germany", "Frankfurt am Main"],
  ["Elisa Gallagher", 31, "Portica", "United Kingdom", "London"]
];
    

        return (
           
          <MDBCard>
          <MDBCardHeader tag="h3" className="text-center font-weight-bold text-uppercase py-4">
            Table Editable
          </MDBCardHeader>
          <MDBCardBody>
            <MDBDataTable data={data} columns={columns} striped bordered />
          </MDBCardBody>
        </MDBCard>


        );
    }
  }
 
    
    