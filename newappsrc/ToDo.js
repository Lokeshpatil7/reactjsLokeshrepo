import axios from "axios";
import React , {Component} from "react";

export default class ToDo extends Component{
    state={
        completed:false,
        todos:[],
        todoObject:{
            title:" ",
            id:" ",
            userId:1, 
        },
        
    };

    onDeleteClickHandler =(id)=>{

        axios.delete("https://jsonplaceholder.typicode.com/todos/" + id)
    .then((response)=>{
       
        this.fetchData();
        alert("deleted")
    });
    };

    onChangeHandler = (event)=>{
        const{name , value}= event.target;
        const todoObjectCopy =this.state.todoObject;
        todoObjectCopy[name]=value;
        this.setState({todoObject: todoObjectCopy});
        
    };

    onEditClickHandler=(id)=>{
        //get the specific object by id from list
        const editObject = this.state.todos.find((todo)=> todo.id === id);
        if(editObject){
            //set the object to state.postObject
            this.setState({todoObject: editObject , completed:true});
        };
    }
    resetState(){
        this.setState({
            todoObject:{
                title:"",
                id:"",
                userId:"",
            },
            completed:false,
        });
    }

    onCancleClickHandler=(event)=>{
        event.preventDefault();
        this.setState({
            todoObject:{
                title:"",
                id:" ",
                userId:" ",
            },
            completed:false,
        });
    };

    onFormSubmitClick=(event)=>{
        event.preventDefault();
        console.log(this.state);

        if (this.state.completed){
            //edit 
            axios.put("https://jsonplaceholder.typicode.com/todos/" +
            this.state.todoObject.id,
            this.state.todoObject
            ).then((response) => {
                console.log(response);
                this.fetchData();
                alert("Updated");
                this.resetState();
            });
        } 
        else{
            //save
        axios.post("https://jsonplaceholder.typicode.com/todos",this.state.todoObject).then
        ((response)=>{
        console.log(response);
        this.fetchData();
        alert("Created");
        this.setState({
        todoObject:{
              title:" ",
              id:" ",
              userId:1,
        },
        
  }) 
      })
  }}

    
    render(){
        return(
<>         
<h1> In ToDo</h1>
<form onSubmit={this.onFormSubmitClick} >
    <label>Title</label>
    <input 
       name="title"
       value={this.state.todoObject.title}
       onChange={this.onChangeHandler}
    />

   <label>Id</label>
    <input 
       name="id"
       value={this.state.todoObject.id}
       onChange={this.onChangeHandler}
    />
    <button type="submit" >{this.state.completed ? "Update" : "Submit"}</button>

    <button onClick={this.onCancleClickHandler} >Cancle</button>
</form>

{this.state.todos.map((todo, index) =>(
    <div key ={index}>
        <div>
            {index+1}.{todo.title}
        </div>
        <button onClick={()=>{
            this.onDeleteClickHandler(todo.id);
        } }
        >Delete</button>

     <button onClick={()=>{
            this.onEditClickHandler(todo.id);
        } }
        >Edit</button>
        <br/>
    </div>
))}
</>
        );
    }

    componentDidMount(){
        this.fetchData();
        
    }

    fetchData() {
        axios.get("https://jsonplaceholder.typicode.com/todos").then((response) => {
            console.log(response.data);
            this.setState({ todos: response.data });
        });
    }
}