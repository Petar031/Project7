import React, {Component} from 'react';
import ReactTable from "react-table-6"; 
import '../layouts/Tables.css';
import 'react-table-6/react-table.css';
import { observer } from 'mobx-react';
import { inject } from 'mobx-react';

import VehicleMakes from "../stores/VehicleMakes";


@inject('VehicleMakes')
@observer
class TableMake extends Component {  
  
  constructor(props){
  super(props);
  console.log(JSON.stringify('VehicleMakes'));  /*za ovaj nisam siguran dali uistinu radi */
    
  this.state = {
  data: [],   /*this row possibly not needed */
    }

    /*const store = new VehicleMakes();*/  /*possible not needed */
    
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
   
        handleChange(e) {
          this.setState({ newTodoDescription: e.target.value });
        }  
       
        deleteTodo(todo) {
          this.setState({ todos: this.state.todos.filter(t => t !== todo) });
        }
      

      
    deleteRow(id) {
          console.log("id", id)
          const index = this.state.data.findIndex(data =>{
          return data.id === id 
        })
          console.log("index", index)
          this.setState({
            posts: [...this.state.data.filter(data => data.id !== id)]
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
          name: 'Mazda',  
          id: 26324,
          abrv: 'MA-ZD',
          year: 2010,

         
        
        },
      {
        name: 'Opel',  
        id: 36324,
        abrv: 'OP-EL',
        year: 2013
        
      
        }
      ]

        const columns = [



          {
            Header:"Name",   
            accessor:"name",
           
         },

       


          {
            Header:"ID",
            accessor:"id",
            sortable: true,
            filterable: true
          },

          {
            Header:"ABRV",
            accessor:"abrv",
            sortable: true,
            filterable: true
          },


          {
            Header:"Year",
            accessor:"year",
            sortable: true,
            filterable: true

            
           


          },

          {
            Header: "",
           
            Cell: props => {
              /*const id: string = row.original.userId;*/

              return(

               
               


              <React.Fragment>
                <button style={{backgroundColor: "red", color:"#fefefe"}}
                   onClick={() => {
                   this.deleteRow(props.VehicleMakes);
                  
                   }}>Delete</button>

                  <button onClick={this.props.deleteTodo}>Delete</button>




  

             </React.Fragment>
   /*pokušati ovdje ubacii i ondaa kada izbaci error vidjeti što bi mogao biti problem   */






                
              )





            },

        
              sortable:false,
              filterable: false,
              width: 280,
              minWidth: 100,
              maxWidth: 100


          },

        /*add new row  - samo se proširuje column*/

      /*  {
          Header:"Name",   
          accessor:"name",
         
       } */

        

          ]


         

        return (  
          <ReactTable 

         

            columns={columns}
            data={data.slice()}  /*možda će ovaj dio ići bez slice  */
            filterable={true}
            defaultPageSize = {10}
            showPagination= {true}

            
           




          >
                                                                               
          </ReactTable>
          );
        }
    
      }


  export default TableMake;  





   
    