import styled from "styled-components";
import { Row, Col } from "react-bootstrap";
import { H1, P, A } from "../../../lib/ui/text";

export const Container = styled(Col)`
  align-items: flex-end;
  display: flex;
  height: 2032px;
  justify-content: center;
  margin-left: 1px;
  margin-top: 54px;
  min-width: 692px;
`;

export const Overlap = styled(Col)`
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  margin-bottom: -376px;
  min-height: 2462px;
  padding: 54px 0;
  width: 694px;
`;

export const H1T = styled(H1)`
  color: #000000;
  font-weight: 900;
  margin-left: 32px;
  min-height: 22px;
`;
