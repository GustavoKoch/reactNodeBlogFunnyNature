import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import "./App.css";

import Article from "./components/Article/Article";
import Authors from "./components/Authors/Authors";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/byAuthors/:authorId" element={<Home />} />
        <Route path="/byTags/:tag" element={<Home />} />
        <Route path="/:articleId" element={<Article />} />
        <Route path="/Authors" element={<Authors />} />
      </Routes>
    </div>
  );
}

export default App;
