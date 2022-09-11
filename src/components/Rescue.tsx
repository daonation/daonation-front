import React from "react";
import styled from "styled-components";
import Footer from "./Footer";
import Header from "./Header";

export default function Home(){
    return(
        <HomeStyle>
            <Header/>
            <BodyStyle>
            <BlockStyle1>
                <h1>Resgate Tokens</h1>
                <h2>Sobre a DAOnation</h2>
                <p>DAOnation vem como um intermediário entre as pessoas 
                    que procuram ajuda com vaquinhas (como ONGs) e pessoas 
                    que têm dinheiro para fazê-lo e querem ajudar, mas 
                    procuram fazer isso para projetos significativos e confiáveis. 
                    Nosso objetivo é criar uma plataforma onde você possa postar 
                    sua vaquinha e após ser votado pelos detentores de tokens de 
                    governança, ela estará disponível para os usuários doarem, 
                    garantindo o uso adequado de seus ativos em benefício de terceiros.</p>
                    <h2>Sobre os tokens de governança</h2>
                    <p>São um tipo de token que permite a quem o possui contribuir com a 
                    organização responsável pela emissão dele de forma direta. A contribuição 
                    ocorre através de votações, que podem ser voltadas para diversas decisões, 
                    como, por exemplo, parâmetros e atualizações de protocolos.</p>
                    <h2>Sobre a política de votação</h2>
                    <p>Todos os integrantes da DAOnation que possuem tokens de governança 
                        têm direito de votar para apoiar ou rejeitar propostas de vaquinhas 
                        de modo a garantir a aprovação de projetos significativos e confiáveis.</p>
            </BlockStyle1>
            <BlockStyle2>
            <p>Quantidade de Tokens distribuídos</p>
            <p>3141592/ 65358979</p>
            <br ></br>
            <p>Quantidade de tokens resgatados</p>
            <p>323846</p>
            <br ></br>
            <p>Quantidade de tokens para resgatar</p>
            <p>26433</p>
            <ButtonStyle1>
            <p>RESGATE</p>
            </ButtonStyle1>
            <BlockStyle3>
            <BlockStyle4>
            <h1>Para adquirir mais tokens</h1>
            <ButtonStyle2>
            <p>DOAR</p>
            </ButtonStyle2>
            </BlockStyle4>
            <BlockStyle4>
            <h1>Para participar de votações</h1>
            <ButtonStyle3>
            <p>VOTAR</p>
            </ButtonStyle3>
            </BlockStyle4>
            </BlockStyle3>
            </BlockStyle2>
            </BodyStyle>
            <Footer></Footer>
        </HomeStyle>
        
    );
}

const HomeStyle = styled.div`
    display: flex;
    flex-direction: column;
    color: #7C7C7C;

`;
const BodyStyle = styled.div`
    display: flex;
    flex-direction: row;

`;

const BlockStyle1 = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100px;
    padding-top: 5%;
    padding-left: 5%;
    padding-right: 5%;
    padding-bottom: 100px;
    text-align: justify;
    h1{
        font-size: 300%;
        padding-bottom: 50px;
        text-align: center;
    }
    h2{
        font-size: 200%;
        padding-top: 25px;
        padding-bottom: 25px;
    }

    `;
    const BlockStyle2 = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 250px;
    padding-top: 30px;
    margin-right: 10%;
    margin-top: 7%;
    border: 1px solid #7C7C7C;
    border-radius: 30px;
    text-align: center;
    h1{
        font-size: 150%;
        padding-top: 25px;
        text-align: center;
    }

    `;

    const ButtonStyle1 = styled.div`
    display: flex;
    flex-direction: column;
    width: 30%;
    height: 50px;
    padding-top: 2%;
    margin-top: 20px;
    margin-left: 35%;
    border: 1px solid #7C7C7C;
    border-radius: 20px;
    padding-bottom: 30px;
    text-align: center;
    background: #94CAFA;
    font-size: 120%;
    font-weight: 600;
    color: #555252;

    `;
    const ButtonStyle2 = styled.div`
    display: flex;
    flex-direction: column;
    width: 30%;
    height: 50px;
    padding-top: 5%;
    margin-top: 20px;
    margin-left: 35%;
    border: 1px solid #7C7C7C;
    border-radius: 20px;
    padding-bottom: 30px;
    text-align: center;
    background: #2AFFD9;
    font-size: 120%;
    font-weight: 600;
    color: #555252;

    `;
    const ButtonStyle3 = styled.div`
    display: flex;
    flex-direction: column;
    width: 30%;
    height: 50px;
    padding-top: 5%;
    margin-top: 20px;
    margin-left: 35%;
    border: 1px solid #7C7C7C;
    border-radius: 20px;
    padding-bottom: 30px;
    text-align: center;
    background: #43B6A1;
    font-size: 120%;
    font-weight: 600;
    color: #FFFFFF;

    `;

 
    const BlockStyle3 = styled.div`
    display: flex;
    flex-direction: row;
    color: #7C7C7C;

`;

const BlockStyle4 = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 200px;
    padding-top: 30px;
    padding-left: 5%;
    padding-right: 0%;
    margin-right: 5%;
    margin-top: 30px;
    border: 1px solid #7C7C7C;
    border-radius: 30px;
    text-align: center;
    h1{
        font-size: 150%;
        padding-top: 25px;
        text-align: center;
    }

    `;


