import React from "react";
import styled from "styled-components";
import Card from "./Card";
import Footer from "./Footer";
import Header from "./Header";
import {useNavigate} from "react-router-dom";


export default function Vote(){
    const history = useNavigate();
    return(
        <HomeStyle>
            <Header/>
            <HomeContent>
                <h1>Lista de Vaquinhas</h1>
                <CardsListStyle>
                    <CardStyle onClick={() => history("/descriptionvote")}><Card typeCard="voting" title="Ajude a EthSP"  initialDate={'09/09/2022'} finalDate={'17/09/2022'} price={1000} description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"/></CardStyle>
                    <Card typeCard="voting" title="Ajude a EthSP" price={1000} description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"/>
                    <Card typeCard="voting" title="Ajude a EthSP" price={1000} description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"/>
                </CardsListStyle>
            </HomeContent>
            <Footer/>
        </HomeStyle>
    );
}

const HomeStyle = styled.div`
    display: flex;
    flex-direction: column;
`;

const HomeContent = styled.div`
    position: fixed;
    display: flex;
    flex-direction: column;
    top: 100px;
    margin-top: 10px;
    bottom: 90px;
    left: 0;
    right: 0;
    align-items: center;
    padding-bottom: 15px;
    overflow-y: scroll;
    h1{
        font-size: 40px;
        padding-top: 2%;
        padding-bottom: 2%;
    }
`;

const CardsListStyle = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    width: 80%;
    margin-top: 15px;
`;

const CardStyle = styled.div`
display: flex;
flex-direction: row;
    :hover{
        cursor: pointer;
    }
`;