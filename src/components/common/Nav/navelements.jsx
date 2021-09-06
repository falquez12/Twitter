import styled from "styled-components";
import { Row, Col } from "react-bootstrap";
import { H1, P, A } from "../../../lib/ui/text";

export const NavContainer = styled(Col)`
  align-items: center;
  display: flex;
  flex-direction: column;
  min-height: 1922px;
  padding: 32px 25px;
  position: relative;
  width: 285px;
`;
export const PNavHome = styled(P)`
  font-style: normal;
  font-weight: bold;
  font-size: 19px;
  line-height: 22px;
  color: #1da1f2;
`;

export const H2Nav = styled.h2`
  font-style: normal;
  font-weight: bold;
  font-size: 19px;
  line-height: 22px;
  color: #000000;
`;

export const AHome = styled(A)`
  color: #1da1f2;
`;

export const NavDiv = styled.div`
  align-items: flex-start;
  display: flex;
  height: 36px;
  justify-content: flex-end;
  margin-right: 28px;
  margin-top: 32px;
  min-width: 95px;
  padding: 4px 0;
`;

export const DivLogo = styled.div`
  height: 32px;
  margin-right: 93px;
  width: 32px;
`;

export const DivVector = styled.div`
  height: 26px;
  width: 26px;
`;

export const TitleDiv = styled.div`
  align-self: center;
  font-weight: 700;
  letter-spacing: 0;
  margin-bottom: 2px;
  margin-left: 16px;
  min-height: 22px;
  min-width: 53px;
`;

export const Sidebar_left = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  min-height: 1922px;
  padding: 32px 25px;
  position: relative;
  width: 285px;
`;
