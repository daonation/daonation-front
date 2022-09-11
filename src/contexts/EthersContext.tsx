import React, {useState, createContext} from 'react';

import { ethers } from "ethers";

export interface contextEthers {
    signer: ethers.Signer | null,
    provider: ethers.providers.JsonRpcProvider | null,
    setSigner: React.Dispatch<React.SetStateAction<ethers.Signer | null>> | null,
    setProvider: React.Dispatch<React.SetStateAction<ethers.providers.JsonRpcProvider | null>> | null,
    block: number,
    setBlock: React.Dispatch<React.SetStateAction<number>>
}
const nullContextInitial:contextEthers = {
    signer: null,
    provider: null,
    setSigner: null,
    setProvider: null,
    block: 0,
    setBlock: () => {}
}
const EthersContext = createContext<contextEthers>(nullContextInitial);

export default EthersContext;