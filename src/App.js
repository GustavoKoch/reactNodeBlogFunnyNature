import React from 'react';
import {Routes, Route} from "react-router-dom";
import Home from "./components/Home/Home"
import './App.css';


function App() {
  return (
    <div className="App">       


        <Routes>
            <Route path="/" element={ <Home/>} />         
            <Route path="/:commentId" element={ <h2>Hello!</h2>} /> 

        </Routes>
    </div>
  );
}

export default App;
