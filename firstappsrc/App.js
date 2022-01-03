import logo from "./logo.svg";
import "./App.css";

import MyFirstComponent from "./MyFirstComponent";
import MySecondComponent from "./MySecondComponent";

function App() {
  const name = "Lokesh";
  // age = 24;

  //const surname = "Patil"; //{name} {surname}
  return (
    <div>
      {/* <h1> hello {name && name.length ? name : "World"}</h1> */}
      {/*<h2>{1 + 2}</h2>*/}
      <MyFirstComponent name={name} age={24} />
      {/*MySecondComponent/>*/}
    </div>
  );
}
export default App;

//============static to dynamic==================props
//======================19/11/21==================
// function App() {
//   const name = "Lokesh";
//   //const name1 = "Avinash";

//   return (
//     <div>
//       <h1> hello {name && name.length ? name : "World"}</h1>
//       {/*<h2>{1 + 2}</h2>*/}
//       <MyFirstComponent name={name} age={24}>
//         <h2>Some data passed from app Component</h2>
//       </MyFirstComponent>
//       {/* {< MySecondComponent name = {name1 } age = {26} />} */}
//     </div>
//   );
// }
// export default App;

//-------------------------task------------------------------------

// function App(){
//   const name = "Lokesh";

//   return (
//     <div>
//       <h1> Hello { name && name.length ? name :"World"}</h1>

//       <div><h1>MyFirstComponent</h1></div>
//       <div>------------------------------------------------------------------------------------------------------</div>
//       <MyFirstComponent parentComponentName = {"App"} > </MyFirstComponent>

//       <div><h1>MySecondComponent</h1></div>
//       <MySecondComponent parentComponentName = {"App"} > </MySecondComponent>
//       </div>
//   );
// }
//  export default App;

//========================proptypes===================================20/11/21
// import PropsValidate from "./PropsValidate";

// function App(){
//   const name = "Lokesh";
//   return(

//     <div>

//       <PropsValidate
//       name = {"Lokesh"}
//       age ={24}
//       renderable={ "some String"}
//       rollnumber ={10}
//       remark = {"some Remark"}
//       myArr ={[1,2,3,4 ]}
//       myObject ={{
//         name : "Lokesh",
//         age : 24,
//         mobile : "7304130499",
//       }}

//       >
//       <h1>Hello</h1>
//      </PropsValidate>
//     </div>
//   );
// }
// export default App;

//======================class component======================================
// import MySecondClassComponent from "./MySecondClassComponent";

// function App(){
//   const name = "Lokesh";
//   return(

//     <div>

// {/* <MyFirstClassComponent name = {"Lokesh"} age ={23}  />  */}

//  <MySecondClassComponent name = {"Lokesh"} age ={23} accountNumber={'SBI123'} />
// <MySecondClassComponent name = {"Avinash"} age ={22} accountNumber={'HDFC5678'} />

//     </div>
//   );
// }
// export default App;

//===========================task=======================================

// import Parent from "./Parent";

// function App() {
//   const name = "Lokesh";
//   return (
//     <div>
//       <Parent />
//     </div>
//   );
// }
// export default App;
