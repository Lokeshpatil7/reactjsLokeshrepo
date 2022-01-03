import axios from "axios";
import React , {Component} from "react";


export default class Posts extends Component{
    state ={
        isEditMode:false,
        posts:[],
        postObject:{
            title:" ",
            body:" ",
            userId:1, 
        },
    };

    onDeleteClickHandler =(id) =>{
        axios.delete("https://jsonplaceholder.typicode.com/posts/" + id)
        .then((response)=>{
        console.log("response");
        this.fetchData();
        alert("Deleted")
        });
    };

    onChangeHandler =(event)=>{
        const{name , value}= event.target;
        const postObjectCopy =this.state.postObject;
        postObjectCopy[name]=value;
        this.setState({postObject: postObjectCopy});
        
    }; 

    onEditClickHandler=(id)=>{
        //get the specific object by id from list
        const editObject = this.state.posts.find((post)=> post.id === id);
        if(editObject){
            //set the object to state.postObject
            this.setState({postObject: editObject , isEditMode:true});
        };
    }

    resetState(){
        this.setState({
            postObject:{
                title:"",
                body:"",
                userId:"",
            },
            isEditMode:false,
        });
    }
        onCancleClickHandler=(event)=>{
            event.preventDefault();
            this.setState({
                postObject:{
                    title:"",
                    body:" ",
                    userId:" ",
                },
                isEditMode:false,
            });
        };
    
    onFormSubmitClick=(event)=>{
        event.preventDefault();
        console.log(this.state);

        if (this.state.isEditMode){
            //edit 
            axios.put("https://jsonplaceholder.typicode.com/posts/" +
            this.state.postObject.id,
            this.state.postObject
            ).then((response) => {
                console.log(response);
                this.fetchData();
                alert("Updated");
                this.resetState();
            });
        } 
        else{
            //save
        axios.post("https://jsonplaceholder.typicode.com/posts",this.state.postObject).then
        ((response)=>{
        console.log(response);
        this.fetchData();
        alert("Created");
        this.setState({
        postObject:{
              title:" ",
              body:" ",
              userId:1,
        },
        
  }) 
      })
  }}

    render(){
        return(
<>
<h1> In Posts</h1>
<form onSubmit={this.onFormSubmitClick} >
    <label>Title</label>
    <input 
       name="title"
       value={this.state.postObject.title}
       onChange={this.onChangeHandler}
    />

   <label>Body</label>
    <input 
       name="body"
       value={this.state.postObject.body}
       onChange={this.onChangeHandler}
    />
    <button type="submit" >{this.state.isEditMode ? "Update" : "Submit"}</button>

    <button onClick={this.onCancleClickHandler} >Cancle</button>
</form>

{this.state.posts.map((post, index) =>(
    <div key ={index}>
        <div>
            {index+1}.{post.title}
        </div>
        <button onClick={()=>{
            this.onDeleteClickHandler(post.id);
        } }
        >Delete</button>

     <button onClick={()=>{
            this.onEditClickHandler(post.id);
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
        axios.get("https://jsonplaceholder.typicode.com/posts").then((response) => {
            console.log(response.data);
            this.setState({ posts: response.data });
        });
    }
}

