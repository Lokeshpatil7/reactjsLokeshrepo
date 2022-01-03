import {createStore} from "redux";

//initialState
const initialState ={
    counter : 0,
};

//reducer
const reducer=(state=initialState, action)=>{
    const {type , value}= action;
    switch (type){
        case "increment" :
            //some code 
            return{
                counter: state.counter + value,
            } ;
        case "decrement" :
            return{
                counter : state.counter - value ,
            };
        case "multiply" :
            return{
                counter : state.counter * value,
            };
            case "division" :
            return{
                counter : state.counter / value ,
            };
            default :
            return state;
    } 
   // return{  counter:state.counter + 1 };  
};

//store
const store = createStore(reducer)

export default store;      