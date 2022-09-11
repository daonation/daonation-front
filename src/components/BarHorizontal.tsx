import { stringify } from "querystring";
import React from "react";
import styled from "styled-components";

interface Bar {
    type: string,
    perc: number
}

export default function BarHorizontal(props:Bar){
    return(
            <BarStyle perc={props.perc} type={props.type}>
                <BarSmall  perc={props.perc} type={props.type}/>
                {props.type === "voting" ? "":<p> {props.perc + "%"}</p>}
            </BarStyle>
        
    );
}

const BarStyle = styled.div<Bar>`
    height: 25px;
    width: ${props => props.type === "voting" ? '100%' : '43%'};
    background: ${props => props.type === "voting" ? '#FF6B6B' : "#FFFFFF"};
    border: 1px solid #7C7C7C;
    border-radius: 10px;
    ${props => props.type === "voting" ? "" : "display: flex; flex-direction: row; justify-content:space-between;align-items:center;"}
    p{
        font-size: 12px;
    }
    #parent{
        overflow: visible;
    }
`;
const BarSmall = styled.div<Bar>`
    border: 1px solid #7C7C7C;
    border-top: 0;
    border-bottom: 0;
    border-radius: 10px;
    height: 25px;
    background: #2AFFD9;
    z-index: 1;
    width: calc(100% * ${props => props.perc/100});
`;
