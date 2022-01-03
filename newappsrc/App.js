import logo from './logo.svg';
import './App.css';
//import Posts from './Posts';
import Navbar from './Navbar';
import Header from './Header';
import Body from './Body';
import { Route, Routes } from 'react-router-dom';
//import ToDo from './ToDo';
import Footer from './Footer';
import Users from './Users';
import { Suspense } from 'react';
import React from 'react';
import SampleError from './SampleError';
import ErrorBoundry from './ErrorBoundry';
//import CodeSplitting from './CodeSplitting';


const CodeSplitting = React.lazy(()=> import("./CodeSplitting"));
const Posts = React.lazy(()=> import("./Posts"));
const ToDo = React.lazy(()=>import("./ToDo"));

function App() {
  const name = "Lokesh";
  return (
    <>
   <div className ="container-fluid"></div>
    <Header/>
    <Navbar/>
    <SampleError/>
    {/* <ErrorBoundry>
    <SampleError/>
    </ErrorBoundry> */}               

    {/* <Suspense fallback={<h1>Loading....</h1>}>
      <CodeSplitting />
    <Routes>
    <Route path={"/posts"} element= { <Posts/> }/>
    <Route path={"/todos"} element= { <ToDo/> }/>
    <Route path={"/users"} element= { <Users/> }/>
    </Routes>
    </Suspense> */}

    {/* <Footer/> */}
                                                    
    </>
  );
}

export default App;



