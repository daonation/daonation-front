import React, {useContext} from "react";
import { ethers } from "ethers";

export async function connectMetamask():Promise<any>{
    //@ts-ignore
    if(!window.ethereum){
        alert("Baixe a Metamask!");
        return [null, null];
    }
    //@ts-ignore
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    await provider.send("eth_requestAccounts", []);
    //@ts-ignore
    await window.ethereum.request({
        method: 'wallet_switchEthereumChain',
        params: [{ chainId: `0x${Number(80001).toString(16)}` }],
      });
    const signer = provider.getSigner();
    return [signer, provider];
}

export async function verifyMetamaskConnection(onConnected:any){
    //@ts-ignore
    if(!window.ethereum){
        alert("Baixe a Metamask!");
        return;
    }
    //@ts-ignore
    const accounts = await window.ethereum.request({
        method: "eth_accounts",
    });

    if(accounts.length > 0){
        const account = accounts[0];
        onConnected(account);
        return;
    }
}