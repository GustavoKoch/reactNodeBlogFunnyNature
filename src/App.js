import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import "./App.css";
import { useEffect } from "react";


import Article from "./components/Article/Article";
import Authors from "./components/Authors/Authors";




function App() {
/* 
  useEffect(( ) => { 
    fetch('http://localhost:5432/api/posts').then(res => res.json()).then(data => console.log(data)).catch(e => console.log(e.message))

  },[ ] ) */

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="api/posts-authors/:authorId" element={<Home />} />
        <Route path="api/postSearch" element={<Home />} />
        <Route path="/api/posts-tags/:tag" element={<Home />} />
        <Route path="/:articleId" element={<Article />} />
        <Route path="/Authors" element={<Authors />} />
      </Routes>
    </div>
  );
}

export default App;
