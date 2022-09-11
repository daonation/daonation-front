import React from "react";
import styled from "styled-components";
import Card from "./Card";
import Footer from "./Footer";
import Header from "./Header";
import {useNavigate} from "react-router-dom";
import { ethers } from "ethers";
import { Daonation__factory } from "@daonations/typechain/typechain-types/factories/contracts/Daonation__factory";

export default function Home(){

    const history = useNavigate();
    //const dao = Daonation__factory.connect(ethers.constants.AddressZero, signer)
    //dao.filters.VoteAgainstVaquinha()
    return(
        <HomeStyle>
            <Header/>
            <HomeContent>
                <h1>Lista de Vaquinhas</h1>
                <CardsListStyle>
                    <Card onClick={() => history("/description")}  typeCard="home" title="Cruz Vermelha" price={1000} description="Atenuar o sofrimento humano sem distinção de raça, religião, condição social, gênero e opinião política."/>
                    <Card typeCard="home" title="Ajude a EthSP" price={1000} description="Invista no melhor evento do Brasil e ajude a crescer a comunidade web3 na América Latina."/>
                    <Card typeCard="home" title="Bia com a Seleção" price={1000} description="Ajude Bia Maximo, convocada para a seleção brasileira feminina de Polo Aquático SUB 16 na Colômbia."/> 
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
    flex-wrap: wrap;
    :hover{
        cursor: pointer;
    }

`;
