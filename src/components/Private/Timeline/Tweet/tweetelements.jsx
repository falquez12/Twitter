import styled from "styled-components";
import { Col } from "react-bootstrap";

export const TweetContainer = styled(Col)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  background: #ffffff;
  max-width: 490px;
  position: static;
  width: 100%;
  left: 0px;
  top: 0px;
`;

export const TweetName = styled.div`
  display: flex;
  flex-direction: row;
  & > p {
    margin-left: 5px;
  }
`;
export const TweetText = styled.p`
  width: 100%;
  left: 56px;
  top: 30px;
  font-style: normal;
  font-weight: normal;
  font-size: 15px;
  line-height: 22px;
  color: #333333;
`;

export const TweetIcons = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: center;
  margin-left: 10%;
  margin-top: 10px;
  & > * {
    margin-right: 20%;
    color: #828282;
    display: flex;
    justify-content: center;
  }
`;

export const Container = styled.div`
  padding: 12px 12px;
  display: flex;
  flex-direction: row;
  max-width: 600px;
  border-bottom: 0.2px solid #eeebeb;
  border-right: 0.2px solid #eeebeb;
  border-left: 0.2px solid #eeebeb;
  & > p {
    margin-left: 5px;
  }
`;
export const ProfilePicture = styled.img`
  border-radius: 52%;
  margin-right: 12px;
`;

export const AllTweets = styled.div``;

export const HomeH1 = styled.h1`
  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-weight: 900;
  font-size: 19px;
  line-height: 22px;

  color: #000000;
  margin-left: 32px;
  margin-top: 53px;
  margin-bottom: 27px;
`;
