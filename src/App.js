import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Components/Login page/Login";
import SignUp from "./Components/Register page/SignUp";
import LeftSidebar from "./Components/Home page/LeftSidebar/LeftSidebar";
import Header from "./Components/Home page/Header/Header";
import RightSidebar from "./Components/Home page/RightSidebar/RightSidebar";
function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" Component={RightSidebar} />
          <Route path="/login" Component={Login} />
          <Route path="/register" Component={SignUp} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
