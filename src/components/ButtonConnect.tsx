import React from "react";
import internal from "stream";
import styled from "styled-components";

interface propsButton {
    height: number,
    width: number
}

export default function ButtonConnect(  props:propsButton ){
    return (
        <ConnectStyle height={props.height} width={props.width}>
            <h1>CONECTAR WALLET</h1>
        </ConnectStyle>
    );
}

const ConnectStyle = styled.div<{height: number; width: number;}>`
    background: #2BFFD9;
    height: ${props => props.height}px;
    width: ${props => props.width}px;
    color: #000000;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: ${props => props.width/15}px;
    cursor: pointer;
    h1{
        display: block;
        color: #000000;
        :hover{
            text-decoration: none;
        }
    }
`;