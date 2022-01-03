import logo from './logo.svg';
import './App.css';


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

//======================================================

import NavbarComponent from './NavbarComponent';
import HeaderComponent from './HeaderComponent';
import BodyComponent from './BodyComponent';
import FooterComponent from './FooterComponent';
import { Route, Routes } from 'react-router-dom';
import Posts from './Posts';
import ToDo from './ToDo';
function App() {
  
  return(
    <>

    <HeaderComponent/>
    <NavbarComponent/> 
    <Routes>
    <Route path={"/navbar"} element= { <NavbarComponent/> }/>
      <Route path={"/posts"} element= {<Posts/>}/>
      <Route path={"/todo"} element= {<ToDo/>}/>
    </Routes>
   
    <FooterComponent/>
    </>
  );
}

export default App;


