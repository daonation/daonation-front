import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyle from "./components/GlobalStyle";
import Home from "./components/Home";
import Rescue from './components/Rescue';
import Vote from './components/Vote';


function App() {
  return (
    <BrowserRouter>
    <GlobalStyle/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/redeem" element={<Rescue/>}/>
      <Route path="/vote" element={<Vote/>}/>

    </Routes>
    </BrowserRouter>
  );
}

export default App;
