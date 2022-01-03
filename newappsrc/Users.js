import axios from "axios";
import React, {Component} from "react"



export default class users extends Component {
    state ={
        isEditMode:false,
        users:[],
        userObject:{
            id:"",
            name:" ",
            username:"",
            email:" ",
            address: {
                      street: "",
                      suite: "",
                      city: "",
                      zipcode: "",
                      geo: {
                        lat: "",
                        lng: "",
                      }
                    },
            phone:"",
            website:"",
        },
    };
    // {
    //     "id": 1,
    //     "name": "Leanne Graham",
    //     "username": "Bret",
    //     "email": "Sincere@april.biz",
    //     "address": {
    //       "street": "Kulas Light",
    //       "suite": "Apt. 556",
    //       "city": "Gwenborough",
    //       "zipcode": "92998-3874",
    //       "geo": {
    //         "lat": "-37.3159",
    //         "lng": "81.1496"
    //       }
    //     },
    //     "phone": "1-770-736-8031 x56442",
    //     "website": "hildegard.org",
    //     "company": {
    //       "name": "Romaguera-Crona",
    //       "catchPhrase": "Multi-layered client-server neural-net",
    //       "bs": "harness real-time e-markets"
    //     }
    //   },


    onDeleteClickHandler =(id) =>{
        axios.delete("https://jsonplaceholder.typicode.com/users/" + id)
        .then((response)=>{
        console.log("response");
        this.fetchData();
        alert("Deleted");
        });
    };

    onChangeHandler =(event)=>{
        const{name , value}= event.target;
        const userObjectCopy =this.state.userObject;
        const addressCopy =this.state.address;
        userObjectCopy[name]=value;
        this.setState({userObject: userObjectCopy});
        
    }; 

    onEditClickHandler=(id)=>{
        //get the specific object by id from list
        const editObject = this.state.users.find((user)=> user.id === id);
        if(editObject){
            //set the object to state.postObject
            this.setState({userObject: editObject , isEditMode:true});
        };
    }

    resetState(){
        this.setState({
            userObject:{
                id:"",
                name:"",
                username:"",
                phone:"",
                website:"",
                email:"",
                address: {
                    street: "",
                    suite: "",
                    city: "",
                    zipcode: "",
                    geo: {
                      lat: "",
                      lng: "",
                    }
                  },
             
            },
            isEditMode:false,
        });
    }
        onCancleClickHandler=(event)=>{
            event.preventDefault();
            this.setState({
                userObject:{
                    id:"",
                    name:"",
                    username:"",
                    phone:"",
                    website:"",
                 address: {
                    street: "",
                    suite: "",
                    city: "",
                    zipcode: "",
                     geo: {
                          lat: "",
                          lng: "",
                         }
                      },    
                    
                    email:" ",
                },
                isEditMode:false,
            });
        };
    
    onFormSubmitClick=(event)=>{
        event.preventDefault();
        console.log(this.state);

        if (this.state.isEditMode){
            //edit 
            axios.put("https://jsonplaceholder.typicode.com/users/" +
            this.state.userObject.id,
            this.state.userObject
            ).then((response) => {
                console.log(response);
                this.fetchData();
                alert("Updated");
                this.resetState();
            });
        } 
        else{
            //save
        axios.post("https://jsonplaceholder.typicode.com/users",this.state.userObject).then
        ((response)=>{
        console.log(response);
        this.fetchData();
        alert("Created");
        this.setState({
        userObject:{
            id:"",
            name:" ",
              email:" ",
              username:"",
              address: {
                street: "",
                suite: "",
                city: "",
                zipcode: "",
                 geo: {
                      lat: "",
                      lng: "",
                     }
                  },  
              phone:"",
              website:"",
            
        },
        
  }) 
      })
  }} 

    render(){
        return(
<>
<h1> In Users</h1>

<form onSubmit={this.onFormSubmitClick} >
<label>ID :</label>
    <input 
       name="id"
       value={this.state.userObject.id}
       onChange={this.onChangeHandler}
    />
    <label>Name : </label>
    <input 
       name="name"
       value={this.state.userObject.name}
       onChange={this.onChangeHandler}
    />

   <label>Email : </label>
    <input 
       name="email"
       value={this.state.userObject.email}
       onChange={this.onChangeHandler}
    /><br/>
    <label>UserName : </label>
    <input 
       name="username"
       value={this.state.userObject.username}
       onChange={this.onChangeHandler}
    />
    <label>Phone : </label>
    <input 
       name="phone"
       value={this.state.userObject.phone}
       onChange={this.onChangeHandler}
    />
    <label>Website : </label>
    <input 
       name="website"
       value={this.state.userObject.website}
       onChange={this.onChangeHandler}
    /><br/>
   
    

    <button type="submit" >{this.state.isEditMode ? "Update" : "Submit"}</button>

    <button onClick={this.onCancleClickHandler} >Cancle</button><br/><br/>
</form>

{this.state.users.map((user, index) =>(
    <div key ={index}>
        <div>
            {index+1}.{user.name}
        </div>
        <button onClick={()=>{
            this.onDeleteClickHandler(user.id);
        } }
        >Delete</button>

     <button onClick={()=>{
            this.onEditClickHandler(user.id);
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
        axios.get("https://jsonplaceholder.typicode.com/users").then((response) => {
            console.log(response.data);
            this.setState({ users: response.data });
        });
    }
}

