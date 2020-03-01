import React, {Component} from 'react';
import ReactTable from "react-table-6"; 
import '../layouts/Tables.css';
/*import VehicleMakesStore from "../stores/VehicleMakes"; */
import 'react-table-6/react-table.css';


class TableMake extends Component {  
  
      constructor(props){
        super(props);

        this.state = {
          items: [],
          currentItem: {text:'', key:''},
        }



        this.state = {
             posts: [],

        }
      }
      

      addItem = e => {
        e.preventDefault()
        const newItem = this.state.currentItem
        if (newItem.text !== '') {
          console.log(newItem)
          const items = [...this.state.items, newItem]
          this.setState({
            items: items,
            currentItem: { text: '', key: '' },
          })
        }
      }




        componentDidMount(){
            const url = "https://jsonplaceholder.typicode.com/posts";
            fetch(url,{ method: "GET"
          }).then(reponse => reponse.json()).then(posts => {
              this.setState({posts: posts})
          })
        }
   
        
        componentDidUpdate() {
          this.props.inputElement.current.focus()
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

/*addItem(e){
  e.preventDefault();
  const newItem = this.state.currentItem;
  if(newItem.text !==""){
    const items = [...this.state.items, newItem];
  this.setState({
    items: items,
    currentItem:{
      text:'',
      key:''
    }
  })
  }
}

handleInput(e){
  this.setState({
    currentItem:{
      text: e.target.value,
      key: Date.now()
    }
  })
}
  */      
       


      render() {
        const columns = [
          {
            Header:"User ID",
            accessor:"userId",
           
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

              <React.Fragment>
                <button style={{backgroundColor: "red", color:"#fefefe"}}
                   onClick={() => {
                   this.deleteRow(props.original.id);
                  
                }}>Delete</button>



<form onSubmit={this.state.items}>
            <input
              placeholder="Task"
              ref={this.props.inputElement}
              value={this.props.currentItem.posts}
              onChange={this.props.handleInput}
            />
            <button type="submit"> Add Task </button>
          </form>



             </React.Fragment>
   /*pokušati ovdje ubacii i ondaa kada izbaci error vidjeti što bi mogao biti problem   */
                
              )
            },





          ////////////*************** */  
         
////////////*************** */  







            
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





   
    