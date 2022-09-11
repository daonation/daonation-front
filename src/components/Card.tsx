import styled from "styled-components";
import BarHorizontal from "./BarHorizontal";

interface propsCard {
    typeCard: string,
    title: string,
    price: number,
    description: string,
    initialDate?: Date,
    finalDate?: Date
}

export default function Card(props:propsCard){
 return(
    <CardStyle>
        <DataStyle>
            <ImgStyle src="http://www.cruzvermelha.org.br/wp-content/uploads/2020/03/WhatsApp-Image-2020-03-04-at-11.18.30-740x426.jpeg" alt=""/>
            {props.typeCard === "home" ? 
            <DataCardHomeStyle>
                <h1>{props.title}</h1>
                <div> <img src="/static/DAIcon.png" alt=""/> <h4>{props.price.toLocaleString("en-US")}</h4> </div>
                <p>{props.description}</p>

            </DataCardHomeStyle>
            :
            <></>}
        </DataStyle>
        <BarHorizontal type={props.typeCard} perc={75}/>

    </CardStyle>
 );
}

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

const CardStyle = styled.div`
    width: 45%;
    height: 250px;
    border: 1px solid #7C7C7C;
    border-radius: 10px;
    margin-bottom: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 8px;
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
`;