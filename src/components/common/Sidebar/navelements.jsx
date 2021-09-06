import styled from "styled-components";
import { Row, Col } from "react-bootstrap";
import { H1, P, A } from "../../../lib/ui/text";
import Button from "../Button";

export const NavContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const PHome = styled(P)`
  color: #333333;
  text-align: left;
  font-size: 19px;
  line-height: 22px;
  font-style: normal;
  font-weight: bold;
  text-decoration: none;
  display: INLINE-BLOCK;
  margin-left: 15px;
  @media screen and (max-width: 960px) {
    display: none;
    text-align: center;
  }
`;

export const DivElement = styled.div`
  margin: 0.5rem 0px;
  color: black;
  @media screen and (max-width: 960px) {
    text-align: center;
  }
`;
export const Divlogo = styled.div`
  margin: 20px 0px;
`;
