import styled, { keyframes } from "styled-components";
const fadein = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;
export const Div = styled.div`
  background: #1da1f2;
  position: absolute;
  top: 10vh;
  color: white;
  display: flex;
  justify-content: center;
  flex-direction: row;
  padding: 10px;
  border-radius: 10px;
  justify-items: center;
  animation: ${fadein} 0.5s linear;
  align-items: flex-start;
  padding: 10px 20px 0px 20px;
`;

export const StyledLabel = styled.label`
  color: #4a5568;
`;
