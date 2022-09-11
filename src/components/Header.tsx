import React from "react";
import styled from "styled-components";
import ButtonConnect from "./ButtonConnect";
import {useNavigate, useLocation} from "react-router-dom";

export default function Header(){

    const history = useNavigate();
    const location = useLocation();
    
    function getNameLocation(nameLink:string):boolean{
        if(location.pathname == nameLink){
            return true;
        }
        return false;
    }

    return(
        
        <HeaderStyle>
            <LogoImg src={"/static/logoHome.png"} alt=""/>
            <ButtonList >
                <TitleStyle onClick={() => history("/")}  location={getNameLocation("/")} >Doe</TitleStyle>
                <TitleStyle onClick={() => history("/vote")} location={getNameLocation("/vote")}>Em votação</TitleStyle>
                <TitleStyle onClick={() => history("/redeem")} location={getNameLocation("/redeem")}>Resgate tokens</TitleStyle>
                <TitleStyle onClick={() => history("/dao")} location={getNameLocation("/dao")}>DAO</TitleStyle>
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
    h1{
        font-size: 21px;
        :hover{
            text-decoration: underline;
            cursor: pointer;
        }
    }
`;

const TitleStyle = styled.h1<{location: boolean}>`
    font-size: 21px;
    :hover{
        text-decoration: underline;
        cursor: pointer;
    }
    ${props => props.location==true ? 'color: #43B6A1;' : ""}
`;
