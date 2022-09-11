import React from 'react';
import styled from "styled-components";
import {FaTwitter, FaDiscord, FaTelegram, FaGithub} from "react-icons/fa";

export default function Footer(){
    return(
        <FooterStyle>
            <p>Copyright <span>DAOnation</span> 2022</p>
            <div>
                <FaTwitter size={'2em'}/>
                <FaGithub size={'2em'}/>
                <FaDiscord size={'2em'}/>
                <FaTelegram size={'2em'}/>
            </div>
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
    padding-left: 1.5%;
    padding-right: 2.5%;
    margin-top: 15px;
    p{
        span{
            font-weight: bold;
            :hover{
                cursor: pointer;
            }
        }
    }
    div{
        display: flex;
        flex-direction: row;
        width: 15%;
        justify-content: space-between;
        align-items: center;
    }
`;