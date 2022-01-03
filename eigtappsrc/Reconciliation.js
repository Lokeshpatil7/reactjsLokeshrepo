import { useEffect, useState } from "react";

// export default () => {
//   const [value, SetValue] = useState(0);
//   useEffect(() => {
//     setInterval(() => {
//       console.log("hi");
//       SetValue(value + 1);
//     }, 2000);
//   });
//   //   return value % 2 ? <h1>In Reconcilaton</h1>
//   //   <div>In Recocilition</div>
//   // };

//   return (
//     <h1 style={{ backgroundColor: value % 2 ? "red" : "green" }}>
//       In Reconcilaton
//     </h1>
//   );
// };

export default () => {
  const [myArr, setMyArr] = useState(["a", "b", "c", "d"]);
  const addElementHandler = () => {
    setMyArr(["e", ...myArr]);
  };
  return <></>;
};
