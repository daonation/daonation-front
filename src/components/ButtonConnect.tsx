import React, {useState,useContext} from "react";
import styled from "styled-components";
import EthersContext from "../contexts/EthersContext";
import { connectMetamask } from "./connect";
 import { ethers} from "ethers"


interface propsButton {
    height: number,
    width: number
}


export default function ButtonConnect(  props:propsButton ){
    const [address, setAddres] = useState("");
    const {signer, provider, setSigner, setProvider, setBlock} = useContext (EthersContext);

    async function connect(){
        const [signerMeta, providerMeta] =  await connectMetamask();
        setSigner && setSigner(signerMeta);
        setProvider && setProvider(providerMeta);
        setAddres(await signerMeta.getAddress());
        providerMeta.on("block", (blockNumber:number) => {
            setBlock(blockNumber);
            console.log(blockNumber);
        });
    }
    
    return (
        <ConnectStyle onClick={connect}
        height={props.height} width={props.width}>
            <h3>{address == "" ? "CONECTAR WALLET" : address}</h3>
        </ConnectStyle>
    );
}

const ConnectStyle = styled.div<{height: number; width: number;}>`
    background: #2BFFD9;
    height: ${props => props.height}px;
    width: ${props => props.width}px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: ${props => props.width/15}px;
    cursor: pointer;
    color: #7C7C7C;
    overflow: hidden;
    h3{
        color: #7C7C7C;
        font-size: ${props => props.width*0.085}px;
        :hover{
            text-decoration: none;
            color: #7C7C7C;
        }
    }
`;