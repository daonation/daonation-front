import React, {useContext, useState, useEffect} from "react";
import styled from "styled-components";
import Card from "./Card";
import Footer from "./Footer";
import Header from "./Header";
import {useNavigate} from "react-router-dom";
import { ethers } from "ethers";
import { getContracts } from "@daonations/typechain/dist/deployed/index";
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
                setVaquinhas(await Promise.all(indices.map ( (idx) => {
                    return daonation.vaquinhas(idx);
                })));
            }))();
    
        }
        
    }, [block]);

    console.log(vaquinhas);
    


    return(
        <HomeStyle>
            <Header/>
            <HomeContent>
                <h1>Lista de Vaquinhas</h1>
                <CardsListStyle>
                    
                    <CardStyle onClick={() => history("/description")}><Card typeCard="home" title="Ajude a EthSP" price={1000} description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the"/></CardStyle>
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
const CardStyle = styled.div`
display: flex;
flex-direction: row;
    :hover{
        cursor: pointer;
    }
`;
