import styled from "styled-components";

export const Main = styled.div`
  border-bottom: 0.2px solid #eeebeb;
  border-right: 0.2px solid #eeebeb;
  border-left: 0.2px solid #eeebeb;
  height: 3rem;
  position: fixed;
  width: 600px;
  background-color: white;
  padding: 12px;

  @media screen and (max-width: 700px) {
    width: 80vw;
  }
`;
