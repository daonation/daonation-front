import React from 'react';
import styled from "styled-components";

export default function Footer(){
    return(
        <FooterStyle>
            <p>Copyright <span>DAO.nation</span> 2022</p>
            <ImgSocial src="/static/socialMedias.png" alt=""/>
        </FooterStyle>
    );
}

const FooterStyle = styled.div`
    position: fixed;
    display: flex;
    flex-direction: row;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%;
    background: #2BFFD9;
    height: 80px;
    align-items: center;
    justify-content: space-between;
    padding-top: 10px;
    padding-bottom: 13px;
    padding-left: 10%;
    padding-right: 8.5%;
    margin-top: 15px;
    p{
        span{
            font-weight: bold;
            :hover{
                cursor: pointer;
            }
        }
    }

`;

const ImgSocial = styled.img`
    height: 70px;
    width: 15%;
`;