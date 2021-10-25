import styled from "styled-components";
import { Col } from "react-bootstrap";

export const CommentsContainer = styled(Col)`
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

export const CommentBoxContainer = styled(Col)`
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

export const CommentName = styled.div`
  display: flex;
  flex-direction: row;
  & > p {
    margin-left: 5px;
  }
`;

export const CommentText = styled.p`
  width: 100%;
  left: 56px;
  top: 30px;
  font-style: normal;
  font-weight: normal;
  font-size: 15px;
  line-height: 22px;
  color: #333333;
`;