import React from "react";
import RefChild from "./RefChild";

export default ()=>{
    const inputRef = React.createRef();
    const OnButtonClickHandler =()=>{
        console.log(inputRef);
        inputRef.current.focus();

    };
    return(
        <>
        <h1>In ErfParent</h1>
        <RefChild ref ={inputRef} />
        {/* <input  ref={inputRef} className= "my-custom-class" /> */}
        <button  onClick={OnButtonClickHandler} > Click Me</button>
        </>
    )
}