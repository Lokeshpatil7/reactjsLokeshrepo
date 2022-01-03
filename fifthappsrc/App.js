import logo from "./logo.svg";
import "./App.css";
import { render } from "@testing-library/react";

import { Routes, Route } from "react-router-dom";

import Header from "./Header";
import Footer from "./Footer";
import Post from "./Post";
import Todo from "./Todo";
import Navbar from "./Navbar";
import Body from "./Body";
import User from "./User";
import Accesibility from "./Accesibility";
import { PersonProvider } from "./PersonContext";
import ContextConsumer from "./ContextConsumer";
import { Suspense } from "react";
import React from "react";
//import CodeSplitting from './CodeSplitting';
const CodeSplitting = React.lazy(() => import("./CodeSplitting"));

function App() {
  const name = "Lokesh";
  return (
    <div className="container-fluid">
      <>
        <Header />
        <Navbar />
        <Suspense fallback={<h1>Loading...</h1>}>
          <CodeSplitting />
          <Routes>{/* <Route path={"/post"} element = {<Posts} /> */}</Routes>
        </Suspense>
      </>
    </div>
  );
}
export default App;
