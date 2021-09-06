import styled from "styled-components";
import { Row, Col } from "react-bootstrap";
import { H1, P, A } from "../../../../lib/ui/text";

export const TweetContainer = styled(Col)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  background: #ffffff;
  max-width: 574px;
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
  width: 100%;;
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
  margin: 12px 12px;
  display: flex;
  flex-direction: row;
  & > p {
    margin-left: 5px;
  }
`;
export const ProfilePicture = styled.img`
  border-radius: 52%;
`;

export const AllTweets = styled.div`
  left: -1px;
  right: -1px;
  top: -54px;
  background: #ffffff;
  box-shadow: inset -1px 0px 0px rgba(0, 0, 0, 0.08),
    inset 1px 0px 0px rgba(0, 0, 0, 0.08);
`;
