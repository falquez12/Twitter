import styled from "styled-components";
import { Col } from "react-bootstrap";

export const NewCommentContainer = styled(Col)`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #e6e6e6;
`;

export const Wrapper = styled.div`
  background: #fff;
  max-width: 600px;
  width: 100%;
  border-radius: 5px;
  padding: 25px 25px 15px 25px;
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
  min-height: 50px;
  max-height: 50px;
  max-width: 580px;
  width: 100%;
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
  max-height: 38px;
  display: flex;
  margin-top: 13px;
  align-items: center;
  justify-content: space-between;
  & > ul {
    display: inline-flex;
  }
`;

export const Icons = styled.div`
  cursor: pointer;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  transition: background 0.2s ease;
`;