import React, {Component} from 'react';
import ReactTable from "react-table-6"; 
import '../layouts/Tables.css';
/*import VehicleMakesStore from "../stores/VehicleMakes"; */
import 'react-table-6/react-table.css';


class TableMake extends Component {  


      constructor(props){
        super(props);

        this.state = {
             posts: []

        }

      }

        componentDidMount(){
            const url = "https://jsonplaceholder.typicode.com/posts";
            fetch(url,{ method: "GET"
          }).then(reponse => reponse.json()).then(posts => {
              this.setState({posts: posts})
          })
        }
   
      
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
    

/*primjerr za dodavanje novoga reda  */
      addRow=(id)=> {
       /* let dataArray = this.state.posts;
        dataArray.push(id);
        this.setState({data: dataArray});*/
        this.setState({
          posts: [...this.state.posts.filter(post => post.id !== id)]
          })

     }
      
      

         
       
      render() {
        const columns = [
          {
            Header:"User ID",
            accessor:"userId"
         },
          {
            Header:"ID",
            accessor:"Id",
            sortable: false,
            filterable: false
          },

          {
            Header:"Title",
            accessor:"title",
            sortable: false,
            filterable: false
          },


          {
            Header:"Content",
            accessor:"body",
            sortable: false,
            filterable: false
          },

          {
            Header: "Actions",
            Cell: props => {
              return(


                <button style={{backgroundColor: "red", color:"#fefefe"}}
                   onClick={() => {
                   this.deleteRow(props.original.id);
                  
                }}>Delete</button>


            
   /*pokušati ovdje ubacii i ondaa kada izbaci error vidjeti što bi mogao biti problem   */
                
              )
            },




            Cell: props => {
              return(


                <button style={{backgroundColor: "red", color:"#fefefe"}}
                   onClick={() => {
                   this.addRow(props.original.id);
                  
                }}>Add</button>


            
   /*pokušati ovdje ubacii i ondaa kada izbaci error vidjeti što bi mogao biti problem   */
                
              )
            },








            
              sortable:false,
              filterable: false,
              width: 100,
              minWidth: 100,
              maxWidth: 100


          }

          ]
        return (  
          <ReactTable 
            columns={columns}
            data={this.state.posts} 
            filterable
            defaultPageSize = {10}
            showPagination= {true}
          >

                                                                               


          </ReactTable>
          );
        }
    
      }
  export default TableMake;  





   
    