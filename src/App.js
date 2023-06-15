import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./Components/Home page/MainSection/Main";
import Login from "./Components/Login page/Login";
import SignUp from "./Components/Register page/SignUp";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" Component={Main} />
          <Route path="/login" Component={Login} />
          <Route path="/register" Component={SignUp} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
