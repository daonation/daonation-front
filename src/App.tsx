import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyle from "./components/GlobalStyle";
import Home from "./components/Home";

function App() {
  return (
    <BrowserRouter>
    <GlobalStyle/>
    <Routes>
      <Route path="/" element={<Home/>}/>

    </Routes>
    </BrowserRouter>
  );
}

export default App;
