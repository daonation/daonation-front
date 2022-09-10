import React from "react";
import styled from "styled-components";
import { ethers } from "ethers";

interface propsButton {
    height: number,
    width: number
}


export default function ButtonConnect(  props:propsButton ){
    return (
        <ConnectStyle height={props.height} width={props.width}>
            <h3>CONECTAR WALLET</h3>
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
    color: #000000;
    h3{
        color: #000000;
        font-size: ${props => props.width*0.085}px;
        :hover{
            text-decoration: none;
            color: #000000;
        }
    }
`;