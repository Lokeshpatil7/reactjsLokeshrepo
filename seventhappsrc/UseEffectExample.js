import { useEffect,useState } from "react";
import useUserStatus from "./useUserStatus";

export default()=>{
 const [value,setValue] = useState(0);
 const [newValue,setNewValue] = useState(0);
// use MyLog (value);
//useMyLog(newValue);
const userStatus = useUserStatus(value);
 const onClickHandler = ()=>{
     setValue(value +1);
 };

 const onNewValueClickHandler = ()=>{
    setNewValue(newValue +1);
 };

useEffect(() =>{
    console.log("rendered");
});

// useEffect(()=>{
//     console.log("value updated");
// }, []);
 useEffect(()=>{
     console.log("value updated");
     return()=>{
         //clean up 
         console.log("clean up");
     };
 }, [value]); //execute only once after component is rendered

 return(
     <>
     <h1>use Effect Example component</h1>
     <div>Value : {value} </div>
     <div>New Value : {newValue} </div>
     <div>User Status :{userStatus}</div>
     <button onClick={onClickHandler}  >Click me</button>
     <button onClick={onNewValueClickHandler}  >Click me to Update new value</button>
     </>
 );
};