import React, {useContext, useState, useEffect} from "react";
import styled from "styled-components";
import Card from "./Card";
import Footer from "./Footer";
import Header from "./Header";
import {useNavigate} from "react-router-dom";
import { ethers } from "ethers";
import { getContracts } from "@daonations/typechain/deployed/index";
import EthersContext from "../contexts/EthersContext";

export default function Home(){

    const history = useNavigate();  
    const {signer, provider, block} = useContext(EthersContext);

    const [vaquinhas, setVaquinhas] = useState<Array<any>>([]);

    useEffect(() => {
        if(signer){
            const { daonation } = getContracts(null as any, signer);
            ((async () => {
                const vaquinhasCount = await  daonation.vaquinhasCount();
                const indices = [];
                for(let i:number = vaquinhasCount.toNumber() -1; i >=0; i--){
                    indices.push(i);
                }
                const allVaquinhas = await Promise.all(indices.map ( async(idx) => {
                    const donationVaquinhas = [];
                    
                    const vaquinhaInfo =  await daonation.vaquinhas(idx);

                    if(await daonation.isDonating(idx)){
                        donationVaquinhas.push(vaquinhaInfo);
                    }
                    return vaquinhaInfo;
                }));
                setVaquinhas(allVaquinhas);

            }))();
        }
    }, [block]);

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
