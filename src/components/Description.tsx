import React from "react";
import styled from "styled-components";
import Footer from "./Footer";
import Header from "./Header";
import BarHorizontal from "./BarHorizontal";

export default function Description(){
    return(
        <HomeStyle>
            <Header/>
            <TitleStyle>
                <p>Cruz Vermelha Brasileira</p>
                </TitleStyle>
            <BodyStyle>
                
            <BlockStyle1>
            <DonationImg src={"/static/cruzvermelha.png"} alt="Donation Image"/>
                <h1>Sobre</h1>
                <p>DAOnation vem como um intermediário entre as pessoas que procuram ajuda 
                    com vaquinhas (como ONGs) e pessoas que têm dinheiro para fazê-lo e 
                    querem ajudar, mas procuram fazer isso para projetos significativos e 
                    confiáveis. Nosso objetivo é criar uma plataforma onde você possa postar 
                    sua vaquinha e após ser votado pelos detentores de tokens de governança, 
                    ela estará disponível para os usuários doarem, garantindo o uso adequado 
                    de seus ativos em benefício de terceiros.</p>
                    
            </BlockStyle1>
            <BlockStyle3>
            <BlockStyle2>
            <BarHorizontal type="voti" perc={75}/>
            <p>Meta</p>
            <DaiImg src="/static/DAIcon.png" alt=""/> <InstitutionStyle>10000000</InstitutionStyle>
            <br></br>
            <br></br>
            <p>Apoiadores</p>
            <p>12345</p>
            <ButtonStyle1>
            <p>DOAR</p>
            </ButtonStyle1>
            </BlockStyle2>
            <BlockStyle2>
            <InstitutionImg src={"/static/instituicao.png"} alt="Donation Image"/>
            <InstitutionStyle>
            <p>Cruz Vermelha Brasileira
            <br></br>
Rio de Janeiro/DF
<br></br>
Ativo na DAOnation desde abril de 2022
<br></br><br></br>
2 vaquinhas criadas e 1 vaquinha apoiada</p>
</InstitutionStyle>
            </BlockStyle2>
            </BlockStyle3>
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

const TitleStyle = styled.div`
font-size: 400%;
padding-top: 30px;
text-align: center;
color: #95CAFA;
font-weight:600;
`;


const BlockStyle1 = styled.div`
    display: inline-block;
    flex-direction: column;
    width: 100%;
    height: 100px;
    padding-top: 2%;
    padding-left: 5%;
    padding-right: 5%;
    padding-bottom: 100px;
    text-align: justify;
    h1{
        font-size: 150%;
        padding-top: 40px;
        padding-bottom: 20px;
        text-align: left;
        font-weight: 600;
    }
    `;
    const BlockStyle2 = styled.div`
    display: inline-block;
    flex-direction: column;
    width: 100%;
    height: 250px;
    padding-top: 30px;
    padding-left: 5%;
    margin-right: 10%;
    margin-top: 5%;
    border: 1px solid #7C7C7C;
    border-radius: 30px;
    text-align: left;
    h1{
        font-weight:600;
    }
    `;

    const ButtonStyle1 = styled.div`
    display: flex;
    flex-direction: column;
    width: 20%;
    height: 60px;
    padding-top: 2%;
    margin-top: 10px;
    border-radius: 20px;
    padding-bottom: 30px;
    text-align: center;
    background: #94CAFA;
    font-size: 120%;
    font-weight: 600;
    color: #555252;
    `;

    const DonationImg = styled.img`
    width: 100%;
    height: 350px ;
    background-size: cover;
    border-radius: 20px;
`;

const DaiImg = styled.img`
display: inline-block;
width: 4%;
vertical-align:top;
`;

const InstitutionImg = styled.img`
    width: 20%;
    background-size: cover;
    display: inline-block;
    vertical-align:top;
`;

const BlockStyle3 = styled.div`
display: inline-block;
flex-direction: column;
color: #7C7C7C;
width: 100%;
margin-right: 5%;
`;

const InstitutionStyle = styled.div`
display: inline-block;
padding-left: 2%;
padding-top: 2%;
`;