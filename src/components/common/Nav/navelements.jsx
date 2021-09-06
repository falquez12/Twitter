import styled from "styled-components";
import { Row, Col } from "react-bootstrap";
import { H1, P, A } from "../../../lib/ui/text";
import Button from "../../common/Button";

export const NavContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 220px;
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
`;

export const DivElement = styled.div`
  margin: 15px 0px;
  color: black;
`;
export const Divlogo = styled.div`
  margin: 20px 0px;
`;
