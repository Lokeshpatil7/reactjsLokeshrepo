import {useEffect} from "react";
export default (value) =>{
    //useeffect 
    useEffect(()=>{
        console.log(value);
        //API call to log it at server side
    },[value]);
};