import { useContext} from "react";
import styled from "styled-components";
import BarHorizontal from "./BarHorizontal";
import { getContracts } from "@daonations/typechain/dist/deployed/index";
import EthersContext from "../contexts/EthersContext";
interface propsCard {
    typeCard: string,
    title: string,
    price: number,
    description?: string,
    initialDate?: string,
    finalDate?: string,
    onClick?: any,
    children?: any,
    id?: any
}

export default function Card(props:propsCard){
    const {signer, provider, block} = useContext(EthersContext );
    //@ts-ignore
    const { daonation } = getContracts(null as any, signer);
    async function callFunc(){
        await daonation.donate(props.id, 1);
    }
 return(
    <CardStyle>
        <DataStyle>
            <ImgStyle src="/static/cruzvermelha.png" alt=""/>
            {props.typeCard === "home" ? 
            <DataCardHomeStyle>
                <h1>{props.title}</h1>
                <div> <img src="/static/DAIcon.png" alt=""/> <h4>{props.price.toLocaleString("en-US")}</h4> </div>
                <p>{props.description}</p>
                <ButtonSt onClick={callFunc}>Doar</ButtonSt>

            </DataCardHomeStyle>
            :
            <DataCardVoteStyle>
                <h5>{'Período: ' + props.initialDate + ' - ' + props.finalDate}</h5>
                <h1>{props.title}</h1>
                <div> <img src="/static/DAIcon.png" alt=""/> <h4>{props.price.toLocaleString("en-US")}</h4> </div>
                <p>{props.description}</p>
            </DataCardVoteStyle>}
        </DataStyle>
        <BarHorizontal type={props.typeCard} perc={75}/>

    </CardStyle>
 );
}

const ButtonSt = styled.button`
    border: none;
    margin-top: 10px;
    background: #2AFFD9;
    :hover{
        cursor:pointer;
    }
`;

const DataCardHomeStyle = styled.div`
    display: flex;
    flex-direction: column;
    width: 50%;
    div{
        display: flex;
        flex-direction: row;
        margin-top: 10px;
        margin-bottom: 10px;
        align-items: center;
        img{
            margin-right: 15px;
        }
    }
    h1{
        font-size: 21px !important;
    }
    h2{
        display: block;
       font-size: 15px;
       overflow: hidden;
    }
`;

const DataCardVoteStyle = styled.div`
    display: flex;
    flex-direction: column;
    width: 50%;
    div{
        display: flex;
        flex-direction: row;
        margin-top: 10px;
        margin-bottom: 10px;
        align-items: center;
        img{
            margin-right: 15px;
        }
    }
    h1{
        font-size: 21px !important;
    }
    h2{
        display: block;
       font-size: 15px;
       overflow: hidden;
    }
    h5{
        font-weight: bold;
        color: #43B6A1;
        display: block;
        margin-bottom: 5px;
    }
`;

const CardStyle = styled.div`
    width: 45%;
    height: 250px;
    border: 1px solid #7C7C7C;
    border-radius: 20px;
    margin-bottom: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 8px;
    box-shadow: 6px 6px #7C7C7C;
`;

const DataStyle = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    max-height: 180px;
    overflow: hidden;
`;



const ImgStyle = styled.img`
    width: 43%;
    aspect-ratio: 1;
    border: 1px solid #7C7C7C;
    border-radius: 9px;
    margin-left:2px;
`;