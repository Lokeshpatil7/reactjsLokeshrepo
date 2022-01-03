import reactDom from "react-dom";
import recatDom from "react-dom";

export default() =>{
    //return <h1> in portaldom<h1/>;
    return reactDom.createPortal(
        <h1>In PortalDemo</h1>,
        document.getElementById("root-portal")
    );
};