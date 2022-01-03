import logo from './logo.svg';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
//================================================21/11/21===============================
//import './App.css';

// import Parent from './Parent';

// function App() {
  
//   return(
//     <>
//     <Parent />
//     </>
//   );
// }

// export default App;

//=====================for true false conndition=============================

import './App.css';
// import TrueComponent from './TrueComponent';
// import FalseComponent from './FalseComponent';
// function App(){
// const name ="Lokesh"
// return(
//   <div>
//     <h1>From App</h1>
//     {/* {name === "Lokesh" ?  <TrueComponent/> : <FalseComponent/> } */}
//     {/* {name === "Lokesh" && <TrueComponent/>} */}
//   </div>
// )
// };
// export default App;

//========================================================

// import ConditionalComponent from './ ConditionalComponent';
// function App(){
//   const name ="Lokesh"
//   return(
//     <div>

//       <h1>From App</h1>
      
//       <ConditionalComponent/>
      
//     </div>
//   )
//   };
//   export default App;


//======================(Array)ListComponent===================23/11/21=============
import ListComponent from './ListComponent';

//to do list
function App(){
    return(
      <div>
  
        <h1>From App</h1>
        <ListComponent/> 
      </div>
    )
    };
    export default App;