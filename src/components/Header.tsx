import React from "react";
import styled from "styled-components";
import ButtonConnect from "./ButtonConnect";
import {useNavigate} from "react-router-dom";

export default function Header(){

    const history = useNavigate();
    return(
        
        <HeaderStyle>
            <LogoImg src={"/static/logoHome.png"} alt=""/>
            <ButtonList >
                <h1 onClick={() => history("/")} >Doe</h1>
                <h2 onClick={() => history("/vote")}>Em votação</h2>
                <h2 onClick={() => history("/redeem")}>Resgate tokens</h2>
                <h2 onClick={() => history("/dao")}>DAO</h2>
                <ButtonConnect height={75} width={240}/>

            </ButtonList>
        </HeaderStyle>
    );
}

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

const LogoImg = styled.img`
    width: 280px;
    height: 62px;
`;

const ButtonList = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 60%;
    h1,h2{
        font-size: 21px;
        :hover{
            text-decoration: underline;
            cursor: pointer;
        }
    }
    h1{
        color: #2BFFD9;
    }
`;
