import React, { Component } from "react";

// export default class PersonComponent extends Component{


//     state={
//         name:"", age:"", mobileNo:" ", address:" ",
//         myList:[], 
//         inputValue:" ",

//     }

//     onValueChangehandler=(event)=>{
//         console.log(event.target.name);
//        this.setState({[event.target.name]: event.target.value});
//    };

//    onSubmitChangeHandler=(event)=>{
//       event.preventDefault();
//       console.log("In onSubmit");     
//       console.log(this.state);
//   this.setState({
//       personList:[...this.state.personList,
//     {name: this.state.name, age:this.state.age},],
//    });
// };

//    onDeleteByIndex = (index) =>{
//        const myListCopy=this.state.myList;
//        myListCopy.splice(index,1);
//        this.setState({myList:myListCopy});
//    }

//    onSubmit=()=>{
//     const myListCopy = this.state.myList;
//     myListCopy.push( <h1 > Hello my Name is {this.state.name} ,Iam  {this.state.age} years Old, My contact No. Is {this.state.mobileNo},Im from {this.state.address} </h1> );
//     this.setState({myList:myListCopy, name:"",age:"" ,  mobileNo:"" , address:""});


// };

//     render(){
//         return(
//             <>
//             <h2>Person Details</h2>
//             <form  onSubmit={this.onSubmitChangeHandler}>
                
//             <label>Name : </label>
//             <input 
//                   name={"name"}
//                   value={this.state.name}
//                   onChange={this.onValueChangehandler} />
//             <br/>
//             <br/>
//             <label>Age : </label>
//             <input
//                    name={"age"}
//                    value={this.state.age}
//                    onChange={this.onValueChangehandler}/>
//             <br/>
//             <br/>
//             <label>Mobiole No : </label>
//             <input
//                    name={"mobileNo"}
//                    value={this.state.mobileNo}
//                    onChange={this.onValueChangehandler}/>
//             <br/>
//             <br/>
//             <label>Address : </label>
//             <input
//                    name={"address"}
//                    value={this.state.address}
//                    onChange={this.onValueChangehandler}/>
//             <br/>
//             <br/>
//             <button type={"submit"}  onClick={this.onSubmit}>Submit</button>
//             </form>
//             {this.state.myList.map((element, index)=>(
//                 <div key={index}> 
//                 <div>{element}</div>
//                 </div>
//             ))}

//             </>
    
//         );
//     };
// };

//===================================================================
//===================================================================

  export default class PersonComponent extends Component {
    state = {
    name: "",
    age: "",
    mobile: "",
    personList: []
    };
    
    onValueChangehandler = (event) => {
    console.log(event.target.name);
    this.setState({ [event.target.name]: event.target.value });
    };

    onSubmitHandler = (event) => {
    event.preventDefault();
    console.log("On Submit");
    this.setState({
    personList:[...this.state.personList,{name:this.state.name, age:this.state.age, mobile:this.state.mobile}]
    })
    
    this.setState({name: (this.state.name = "")});
    this.setState({age: (this.state.age ="")});
    this.setState({mobile: (this.state.mobile ="")});
    };
    // onAdd = () => {
    // console.log("On Add");
    // const personListCopy = this.state.personList;
    // console.log(personListCopy);
    // personListCopy.push(this.state);
    // this.setState({ personList: personListCopy });
    // console.log("list updated");
    // };
    
    onDelete=(index)=>{
    const personListCopy=this.state.personList;
    personListCopy.splice(index,0);
    this.setState({personList:personListCopy});
    }
    
    render() {
    return (
    <>
    {/* <h1>Form Component</h1> */}
    <form onSubmit={this.onSubmitHandler}>
    <label>Name : </label>
    <input
    name={"name"}
    value={this.state.name}
    onChange={this.onValueChangehandler}
    /> <br/>
    <br />
    <label>Age : </label>
    <input
    name={"age"}
    value={this.state.age}
    onChange={this.onValueChangehandler}
    /><br/>
    <br />
    <label>Mobile No : </label>
    <input
    name={"mobile"}
    value={this.state.mobile}
    onChange={this.onValueChangehandler}
    /><br/>
    <br />
    
        <button type="submit">Submit </button>
    
    </form>

           {this.state.personList.map((person,index) => (
      <p key={index}>
          Hi I am {person.name}, I am {person.age}. Contact me on {person.mobile} 
      <button onClick={()=>{
                 this.onDelete(index);
                      }}> Delete</button>
      </p>
    ))}
        </>
    );
    }
  }
    