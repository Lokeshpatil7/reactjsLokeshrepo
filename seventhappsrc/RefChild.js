import React from "react";

export default React.forwardRef((props,ref) =>{
    return(
        <>
        <input   ref={ref} classname="my-custom-class" />
        </>
    );
} );