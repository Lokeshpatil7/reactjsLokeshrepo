import logo from "./logo.svg";
import "./App.css";
import NormalProps from "./NormalProps";
import Incrementer from "./Incrementer";
import Increment from "./Increment";
import NewIncrement from "./NewIncrement";
import Decrementer from "./Decrementer";
import NewDecrement from "./NewDecrement";
import Decrement from "./Decrement";
import DemoComponent from "./DemoComponent";
import Reconciliation from "./Reconciliation";
import "./style.scss";
import "./SassDemo";
import SassDemo from "./SassDemo";
import RadiumDemo from "./RadiumDemo";
import TestComponent from "./TestComponent";
import JqueryDemo from "./JqueryDemo";
import { UserDetail } from "./UserDetail";

//mport ConditionalRenderedComponent from "./ConditionalRenderedComponent";

function App() {
  return (
    <div className="App">
      <h1>From App </h1>
      <user-detail></user-detail>
      {/* <JqueryDemo /> */}
      {/* <TestComponent name={"Lokesh"} /> */}

      {/* <RadiumDemo /> */}
      {/* <SassDemo /> */}
      {/* <br /> <button onClick={onClickHandler}> Toggle Component</button>
      {showComponent && <ConditionalRenderedComponent />} */}
      {/* <Reconciliation /> */}
      {/* <DemoComponent /> */}
      {/* <NormalProps
        render={(someValue) => {
          return "old name " + someValue;
        }}
      /> */}
      {/* <Incrementer
      render = {(value , onClickHandler)=>{
        return <Increment value={value} onClickHandler={onClickHandler} 
      />;
     }}/> */}
      {/* <Incrementer
      render = {(value , onClickHandler)=>{
        return <NewIncrement value={value} onClickHandler={onClickHandler} 
      />;
     }}/> */}
      {/* <Decrementer 
render={(value, onClickHandler)=>{
  return<Decrement  value={value} onClickHandler={onClickHandler} />;
}}
/> */}
      {/* <Decrementer 
render={(value, onClickHandler)=>{
  return<NewDecrement  value={value} onClickHandler={onClickHandler} />;
}}
/> */}
    </div>
  );
}

export default App;
