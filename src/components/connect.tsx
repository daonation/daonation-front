import React from "react";
import { ethers } from "ethers";

export async function connectMetamask(onConnected:any){
    //@ts-ignore
    if(!window.ethereum){
        alert("Baixe a Metamask!");
        return;
    }
    //@ts-ignore
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    await provider.send("eth_requestAccounts", []);
    const signer = provider.getSigner();
    onConnected(provider)
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