import styled from "styled-components";
import { Col } from "react-bootstrap";

export const NewTweetContainer = styled(Col)`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Wrapper = styled.div`
  background: #fff;
  max-width: 600px;
  width: 100%;
  border-radius: 5px;
  padding: 25px 25px 15px 25px;
  box-shadow: 0px 3px 5px rgba(0,0,0,0.1);
`;

export const InputBox = styled.div`
  padding-top: 10px;
  border-bottom: 1px solid #e6e6e6;
  max-width: 580px;
  width: 100%;
  & > ::placeholder{
    font-size: 17px;
    color: #98A5B1;
    pointer-events: none;
  }
`;

export const StyledTextArea = styled.textarea`
  min-height: 80px;
  max-height: 80px;
  overflow-y: auto;
  border: none;
  overflow: auto;
  outline: none;
  resize: none;
  & > input {
    outline: none;
    font-size: 17px;
  }
`;

export const Bottom = styled.div`
  display: flex;
  margin-top: 13px;
  align-items: center;
  justify-content: flex-end;
`;


