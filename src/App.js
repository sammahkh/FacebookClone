import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./Components/Home page/MainSection/Main";
function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" Component={Main} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
