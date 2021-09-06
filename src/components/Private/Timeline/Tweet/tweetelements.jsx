import styled from "styled-components";
import { Row, Col } from "react-bootstrap";
import { H1 ,P, A } from "../../../../lib/ui/text";

export const TweetContainer = styled(Col)`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0px;
    background: #FFFFFF;

    position: static;
    width: 692px;
    height: 432px;
    left: 0px;
    top: 0px;
`;


export const TweetName = styled.div`
    display:flex;
    flex-direction:row;
    & > p { 
        margin-left:5px;
    }
`;
export const TweetText = styled.p`
    width: 574px;
    height: 66px;
    left: 56px;
    top: 30px;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 15px;
    line-height: 22px;
    color: #333333;
`;


export const TweetImage = styled.p`
    border-radius: 12px;
    & > span {
        .icon-verified:before {
        content: "\e900";
        }
    }
`;


export const TweetIcons = styled.div`
    display:flex;
    flex-direction:row;
    & > p {
        color:#828282;
         margin-left:134px;
    }
    & > div { 
        margin-left:25px;
        color:#828282;
    }
`;

export const Container = styled.div`
    display:flex;
    flex-direction:row;
    & > p { 
        margin-left:5px;
    }
`;
export const ProfilePicture = styled.img`
    border-radius: 52%;
`;

export const AllTweets = styled.div`
    height: 2462px;
    left: -1px;
    right: -1px;
    top: -54px;
    background: #FFFFFF;
    box-shadow: inset -1px 0px 0px rgba(0, 0, 0, 0.08), inset 1px 0px 0px rgba(0, 0, 0, 0.08);

`;