import styled from "styled-components";
import { Row, Col } from "react-bootstrap";
import { H1 ,P, A } from "../../../../lib/ui/text";

export const TrendingContainer = styled(Col)`
  
    align-items: center;
    padding: 14px 0px;
    position: static;
    width: 280px;
    height: 645px;
    left: 0px;
    top: 64px;
    background: #F6F8FA;
    border-radius: 12px;

`;

export const TrendingTitle = styled(H1)`
    display:block;
    width: 120px;
    height: 40px;
    left: 90.5px;
    top: 14px;
    margin: 0px auto;
    text-align: center;
    font-family: Roboto;
    font-style: normal;
    font-weight: 900;
    font-size: 19px;
    line-height: 22px;
    font-family: 'Roboto', sans-serif;
    color: #000000;
`;

export const Showmore = styled(Col)`
    font-family: 'Roboto', sans-serif;
    font-size: 14px;
    font-style: normal;
    font-weight: 500px;
    line-height: 16px;
    letter-spacing: 0em;
    text-align: left;
    color: #1DA1F2;
    position: static;
    width: 71px;
    height: 40px;
    left: 104.5px;
    top: 546px;
    margin: 0px auto;
    text-align:center;
    vertical-align: middle;
    line-height: 40px;
`;



export const ElementContainer = styled(Col)`
    display: flex;
    flex-direction: column;
    width: 270px;
    height: 81px;
    margin-top:10px;
    margin-left:10px;
    border-bottom: 2px solid rgba(0, 0, 0, 0.08);;

`;

export const ElementWord = styled(Col)`
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 6px;
    color: #828282;
`;


export const ElementH1 = styled(H1)`
    width: 105px;
    height: 18px;
    font-family: 'Roboto', sans-serif;
    font-style: normal;
    font-weight: 700p-x;
    font-size: 17px;
    line-height: 6px;
    color: #333333;
`;


