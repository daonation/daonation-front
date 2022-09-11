import React, {useContext, createContext, useState} from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from './components/About';
import GlobalStyle from "./components/GlobalStyle";
import Home from "./components/Home";
import Rescue from './components/Rescue';
import Vote from './components/Vote';
import Description from './components/Description';
import DescriptionVote from './components/DescriptionVote';
import {ethers} from "ethers";
import EthersContext, {contextEthers} from './contexts/EthersContext';



function App() {
  const [signer, setSigner] = useState<ethers.Signer | null>(null);
  const [provider, setProvider] = useState<ethers.providers.JsonRpcProvider | null>(null);
  const [block, setBlock] = useState<number>(0);

  const initialContext:contextEthers = {signer, provider, block, setSigner, setProvider, setBlock};
  return (
    <EthersContext.Provider value={initialContext}>
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
    </EthersContext.Provider>
    
  );
}

export default App;
