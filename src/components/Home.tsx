import React from "react";
import styled from "styled-components";
import Card from "./Card";
import Footer from "./Footer";
import Header from "./Header";
import { ethers } from "ethers";
import { Daonation__factory } from "@daonations/typechain/typechain-types/factories/contracts/Daonation__factory";

export default function Home(){

    //const dao = Daonation__factory.connect(ethers.constants.AddressZero, signer)
    //dao.filters.VoteAgainstVaquinha()
    return(
        <HomeStyle>
            <Header/>
            <HomeContent>
                <h1>Lista de Vaquinhas</h1>
                <CardsListStyle>
                    <Card typeCard="home" title="Ajude a EthSP" price={1000} description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the"/>
                    <Card typeCard="home" title="Ajude a EthSP" price={1000} description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the"/>
                    <Card typeCard="home" title="Ajude a EthSP" price={1000} description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the"/>
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
