import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Components/Login page/Login";
import SignUp from "./Components/Register page/SignUp";
import Header from "./Components/Home page/Header/Header";
function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" Component={Header} />
          <Route path="/login" Component={Login} />
          <Route path="/register" Component={SignUp} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
