import styled from "styled-components";
import { Row, Col } from "react-bootstrap";
import { H1, P, A } from "../../../lib/ui/text";

export const Searchbar = styled.div`
  align-items: center;
  background-color: #e7ecf0;
  border-radius: 100px;
  display: flex;
  height: 48px;
  min-width: 280px;
  padding: 0 16px;
`;

export const SearchText = styled(H1)`
  letter-spacing: 0;
  margin-left: 8px;
  min-height: 18px;
  min-width: 98px;
`;
