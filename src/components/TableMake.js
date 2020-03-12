import React, {Component} from 'react';
import ReactTable from "react-table-6"; 
import '../layouts/Tables.css';

import 'react-table-6/react-table.css';
/*import { observer } from 'mobx-react';*/
/*import { inject } from 'mobx-react';*/

/*import VehicleMakesStore from "../stores/VehicleMakes";*/




class TableMake extends Component {  

  constructor(props){
    super(props);

    



    this.state = {
         posts: [],

    }
  }
  

  
  


   /*  addRow = () => {
        const table = this.state.table.slice()
        table.push()
        this.setState({ table })
      } */



       /* componentDidMount(){
            const url = "https://jsonplaceholder.typicode.com/posts";
            fetch(url,{ method: "GET"
          }).then(reponse => reponse.json()).then(posts => {
              this.setState({posts: posts})
          })
        } */
   
        

       
      

      
      deleteRow(id) {
          console.log("id", id)
          const index = this.state.posts.findIndex(post =>{
          return post.id === id 
        })
          console.log("index", index)
          this.setState({
            posts: [...this.state.posts.filter(post => post.id !== id)]
            })
      
      }
    

    /*  onClickHandler = (e) => {
        const song = e.target.getAttribute('data-item');
        console.log('We need to get the details for ', song);
    }*/

     
/*primjerr za dodavanje novoga reda  */
/*addRow(id) {
  console.log("id", id)
  const index = this.state.posts.findIndex(post =>{
  return post.id === id 
})
  console.log("index", index)
  this.setState({
    posts: [...this.state.posts.filter(post => post.id !== id)]
    })

}*/

/*addRow(id) {
  console.log("id", id)
  const index = this.state.posts.slice(post =>{
    post.push(id);
})
  console.log("index", index)
  this.setState({
    posts: [...this.state.posts.push(post => post.id !== id)]
    })

}*/


       


      render() {
        /*const { data } = this.state ;*/
       
/*taj dio ispod će ići u store i provjeriti slice ili peek  */
        const data = [{
          name: 'Tanner Linsley',
          age: 26,
          friend: {
            name: 'Jason Maurer',
            age: 23,
          }
        }]

        const columns = [



          {
            Header:"Name",   /*ovdje bi trebalo ubaciti add new row  */
            accessor:"name",
          
 
          
         },
          {
            Header:"Make ID",
            accessor:"Id",
            sortable: false,
            filterable: false
          },

          {
            Header:"Name",
            accessor:"title",
            sortable: false,
            filterable: false
          },


          {
            Header:"Abrv",
            accessor:"body",
            sortable: false,
            filterable: false,

            
           


          },

          {
            Header: "",
           
            Cell: props => {
              /*const id: string = row.original.userId;*/

              return(

               
               


              <React.Fragment>
                <button style={{backgroundColor: "red", color:"#fefefe"}}
                   onClick={() => {
                   this.deleteRow(props.original.id);
                  
                   }}>Delete</button>

                  

  

             </React.Fragment>
   /*pokušati ovdje ubacii i ondaa kada izbaci error vidjeti što bi mogao biti problem   */






                
              )





            },

        
              sortable:false,
              filterable: false,
              width: 280,
              minWidth: 100,
              maxWidth: 100


          }

        


          ]


          

        return (  
          <ReactTable 

         

            columns={columns}
            data={data}
            filterable={true}
            defaultPageSize = {10}
            showPagination= {true}

           
            




          >
                                                                               
          </ReactTable>
          );
        }
    
      }


  export default TableMake;  





   
    