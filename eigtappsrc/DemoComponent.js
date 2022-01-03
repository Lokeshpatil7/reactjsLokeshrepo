import React from "react";

export default () => {
  // return <h1>In DemoComponent</h1>

  // return React.createElement("h1", null ,"In DemoComponent");

  //   return(
  //   /* <div
  //   <h1>In DemoComponent</h1>
  //   </div> */
  //   );

  //   return(
  //       <div>
  //           <h1  style={{backgroundColor: "red"} }>In DemoComponent</h1>
  //           <h2>In DemoComponent</h2>
  //       </div>
  //   );

  //   return React.createElement(
  //     "div",
  //     null,
  //     React.createElement(
  //       "h1",
  //       { style: { backgroundColor: "red" } },
  //       "In DemoComponent"
  //     ),
  //     React.createElement(
  //       "h2",
  //       { style: { backgroundColor: "green" } },
  //       "In DemoComponent"
  //     )
  //   );
  //   return (
  //     <div>
  //       <h1 style={{ backgroundColor: "red" }}>First Heading</h1>
  //       <h2 style={{ backgroundColor: "green" }}>Second Heading</h2>
  //       <div style={{ backgroundColor: "yellow" }}>
  //         <p style={{ color: "blue" }}>First Paragraph</p>
  //         <p style={{ color: "orange" }}>Second Paragraph</p>
  //       </div>
  //     </div>
  //   );

  return React.createElement(
    "div",
    null,
    React.createElement(
      "h1",
      { style: { backgroundColor: "red" } },
      "First Heading"
    ),
    React.createElement(
      "h2",
      { style: { backgroundColor: "green" } },
      "Second Heading"
    ),
    React.createElement(
      "div",
      { style: { backgroundColor: "yellow" } },
      React.createElement("p", { style: { color: "blue" } }, "First Paragraph"),
      React.createElement(
        "p",
        { style: { color: "orange" } },
        "Second Paragraph"
      )
    )
  );
};
