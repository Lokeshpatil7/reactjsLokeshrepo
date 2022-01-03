import logo from "./logo.svg";
import "./App.css";

import { Route, Routes } from "react-router-dom";
import Customer from "./Customer";
import Header from "./Header";
import Footer from "./Footer";
import Body from "./Body";
import Navbar from "./Navbar";
import AboutUs from "./AboutUs";
import Login from "./Login";
import AdminLogin from "./AdminLogin";
import UserLogin from "./UserLogin";
import Documents from "./Documents";
import ForgotPassword from "./ForgotPassword";
import Calculator from "./Calculator";
import User from "./User";

function App() {
  return (
    <div className="App">
      <Header />
      <Navbar />

      {/* <AdminLogin /> */}
      {/* <Calculator /> */}

      <Routes>
        <Route path={"/home"} element={<Body />}></Route>
        <Route path={"/application"} element={<Customer />}></Route>
        <Route path={"/calculator"} element={<Calculator />}></Route>
        <Route path={"/aboutUs"} element={<User />}></Route>
        <Route path={"/login"} element={<Login />}></Route>
        <Route path={"/document"} element={<Documents />}></Route>
        <Route path={"/login/adminlogin"} element={<AdminLogin />}></Route>
        <Route path={"/login/userlogin"} element={<UserLogin />}></Route>
        <Route
          path={"/login/userlogin/forgotpassword"}
          element={<ForgotPassword />}
        ></Route>
        <Route path={"/application"} element={<UserLogin />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
