import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Posted from "./Components/Home page/MainSection/Post Section/Posted";
function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" Component={Posted} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
