import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from './components/About';
import GlobalStyle from "./components/GlobalStyle";
import Home from "./components/Home";
import Rescue from './components/Rescue';
import Vote from './components/Vote';
import Description from './components/Description';
import DescriptionVote from './components/DescriptionVote';


function App() {
  return (
    <BrowserRouter>
    <GlobalStyle/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/redeem" element={<Rescue/>}/>
      <Route path="/vote" element={<Vote/>}/>
      <Route path="/dao" element={<About/>}/>
      <Route path="/description" element={<Description/>}/>
      <Route path="/descriptionvote" element={<DescriptionVote/>}/>

    </Routes>
    </BrowserRouter>
  );
}

export default App;
