import React from "react";
import styled from "styled-components";
import Footer from "./Footer";
import Header from "./Header";

export default function About(){
    return(
        <HomeStyle>
            <Header/>
            <BodyStyle>
            <BlockStyle1>
                <h1>Sobre</h1>
                <p>DAOnation vem como um intermediário entre as pessoas que procuram ajuda 
                    com vaquinhas (como ONGs) e pessoas que têm dinheiro para fazê-lo e 
                    querem ajudar, mas procuram fazer isso para projetos significativos e 
                    confiáveis. Nosso objetivo é criar uma plataforma onde você possa postar 
                    sua vaquinha e após ser votado pelos detentores de tokens de governança, 
                    ela estará disponível para os usuários doarem, garantindo o uso adequado 
                    de seus ativos em benefício de terceiros.</p>
                    <h1>Recursos</h1>
                    <BlockStyle2>
                    <p>Todos os doadores recebem tokens de governança proporcional às quantidades 
                    doadas. Quanto mais ajudar, mais tokens de governança para votar dentro 
                    da DAO podem ser resgatados</p>
                    </BlockStyle2>
                <BlockStyle2>
                <p>
                    Todos os integrantes da DAOnation que possuem tokens de governança tem 
                    direito de votar para apoiar ou rejeitar propostas de vaquinhas de modo 
                    a garantir a aprovação de projetos significativos e confiáveis
                    </p>
                </BlockStyle2>
                <BlockStyle2>
                    <p>
                    Os projetos aprovados pela DAOnation são levados para receberem doações 
                    no ecossistema Ethereum de modo a garantir que toda doação seja realizada 
                    de forma rápida e diretamente aos autores do projeto.
                    </p>
                </BlockStyle2>
            </BlockStyle1>
            <BlockStyle1>
                <h1>Documentação</h1>
                <p>Para ter acesso aos documentos técnicos da DAOnation e entender seu protocolo.</p>
                    <h1>Comunidade</h1>
                <p>A doação é simples e fácil e funciona imediatamente para apoiar os esforços 
                    de resposta humanitária. As contribuições da comunidade criptográfica 
                    ajudam a avançar em soluções inovadoras para atender emergências humanitárias.</p>
                    <h1>Faça Parte</h1>
                <p>Doe Ethereum e outras criptomoedas para organizações sem fins lucrativos, 
                    instituições de caridade, escolas, organizações religiosas e muito mais e reduza 
                    os encargos fiscais e aumente a segurança de que está investindo em um projeto validado.</p>
                    <ButtonStyle1>
            <p>DOAR</p>
            </ButtonStyle1>
            </BlockStyle1>
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
        padding-top: 40px;
        padding-bottom: 20px;
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
    margin-right: 10%;
    margin-top: 5%;
    text-align: justify;
    h1{
        font-weight:600;
    }

    `;
    const ButtonStyle1 = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 50px;
    padding-top: 2%;
    margin-top: 40px;
    border-radius: 20px;
    padding-bottom: 30px;
    text-align: center;
    background: #94CAFA;
    font-size: 120%;
    font-weight: 600;
    color: #555252;

    `;
    