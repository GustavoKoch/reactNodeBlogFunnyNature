import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import "./App.css";

import Article from "./components/Article/Article";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:articleId" element={<Article />} />
      </Routes>
    </div>
  );
}

export default App;
