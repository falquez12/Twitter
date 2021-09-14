import styled from "styled-components";
import { P } from "../../../lib/ui/text";
import { Link } from "react-router-dom";

export const NavContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const PHome = styled(P)`
  text-align: left;
  font-size: 19px;
  line-height: 22px;
  font-style: normal;
  font-weight: bold;
  text-decoration: none;
  display: INLINE-BLOCK;
  margin: 0px 0px 0px 15px;
  align-items: center;

  @media screen and (max-width: 1200px) {
    display: none;
    text-align: center;
  }
`;

export const DivElement = styled.div`
  margin: 0.3rem 0px;
  color: black;
  display: flex;
  align-items: center;
  padding: 10px 10px 10px 10px;
  transition: linear 0.25s;
  &:hover {
    border: 0px solid;
    border-radius: 50px;
    background-color: #e0dddd99;
  }
  @media screen and (max-width: 1200px) {
    text-align: center;
    justify-content: center;
  }
`;

export const Divlogo = styled.div`
  margin: 1rem 0px;
  color: black;
  @media screen and (max-width: 1200px) {
    text-align: center;
  }
`;

export const SidebarElements = styled(Link)`
  text-decoration: none;
`;
