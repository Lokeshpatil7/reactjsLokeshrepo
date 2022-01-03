import $ from "jquery";
import { useState } from "react";

export default () => {
  //const [showElement , setShowElement]= useState(true);
  const onClickHandler = () => {
    const element = document.getElementById("jquery-operation");
    if (element) {
      console.log("element found");
      $(element).slideToggle();
    } else {
      console.log("in handler");
    }
  };

  return (
    <>
      <h1>In Jquery</h1>
      <div style={{ backgroundColor: "orange" }} id="jquery-operation">
        Some Content in this div
      </div>
      <button onClick={onClickHandler}>Click Me </button>
    </>
  );
};
