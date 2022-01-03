import logo from './logo.svg';
import './App.css'
import FormComponent from './FormComponent';
import PersonComponent from './PersonComponent';
import ListComponent from './ListComponent';
import LifeCycle from './LifeCycle';
import LifeCycleUpdate from './LifeCycleUpdate';
import RefsExample from './RefsExample';
import RefsCallBack from './RefsCallBack';
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
// import ListComponent from './ListComponent';

// function App(){
//     const name ="Lokesh"
//     return(
//       <div>
  
//         <h1>From App</h1>
//         <ListComponent/>
        
//       </div>
//     )
//     };
//     export default App;

//===========================Forms=================================24/11/21
// function App(){
//       const name ="Lokesh"
//       return(
//         <div>
    
//           <h1>From App</h1>
         
          
//           <FormComponent/>
          
//         </div>
//       )
//       };
//       export default App;



//======================task=====================================

// export default function App(){
//         const name ="Lokesh"
//         return(
//           <div>
      
//             <h1>From App</h1>
           
            
//             <PersonComponent/>
           
            
//           </div>
//         )
//         };
         

      //=========================LifeCycle================================25/11/21

      // function App(){
      //   const name ="Lokesh"
      //   return(
      //     <div>
      
      //       <h1>From App</h1>
           
            
      //       {/* <LifeCycle/> */}
      //       <LifeCycleUpdate/>
           
            
      //     </div>
      //   )
      //   };
      //   export default App;
      //==============================ref========26/11/21============================
      // function App(){
      //   const name ="Lokesh"
      //   return(
      //     <div>
      
      //       <h1>From App</h1>
           
            
      //      <RefsExample/>
            
      //     </div>
      //   )
      //   };
      //   export default App;
        //===============================================
        
        // function App(){
        //   const name ="Lokesh"
        //   return(
        //     <div>
        
        //       <h1>From App</h1>
             
              
        //      <RefsCallBack/>
              
        //     </div>
        //   )
        //   };
        //   export default App;
        //===========================================
        import DynamicClass from './DynamicClass';
        import ResultClass from './ResultClasss'
        function App(){
          const name ="Lokesh"
          return(
            <div>
       
              <h1 className="my-app">From App</h1>
              {/* <div className="my-div">Im inside Div Block</div> */}
              {/* <DynamicClass/> */}
              <ResultClass/>
            </div>
          )
          };
          export default App;