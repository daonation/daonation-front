import React from "react";
import styled from "styled-components";
import Header from "./Header";

export default function Home(){
    return(
        <RescueStyle>
        </RescueStyle>
    );
}

const RescueStyle = styled.div`
    display: fixed;
    flex-direction: column;
    height: 300px;
    width: 10%;

`;
const HeaderStyle = styled.div`
    display: flex;
    flex-direction: row;
    top: 0;
    left: 0;
    right: 0;
    width: 100%;
    height: 100px;
    border-bottom: 1px solid gray;
    padding-top: 25px;
    padding-left: 1.8%;
    padding-right: 1.8%;
    padding-bottom: 10px;
    align-items: center;
    justify-content: space-between;

`;