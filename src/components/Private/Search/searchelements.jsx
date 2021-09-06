import styled from "styled-components";
import { Row, Col } from "react-bootstrap";
import { H1, P, A } from "../../../lib/ui/text";

export const Search_bar = styled.div`
  align-items: center;
  background-color: #e7ecf0;
  border-radius: 100px;
  display: flex;
  height: 48px;
  min-width: 280px;
  padding: 0 16px;
`;

export const Searchtext = styled(H1)`
  color: #828282;
  font-style: normal;
  font-weight: normal;
  letter-spacing: 0;
  margin-left: 8px;
  font-size: 15px;
  line-height: 18px;
  min-height: 18px;
  min-width: 98px;
`;

export const SearchP = styled.p`
height: 20px;
width: 20px;
`;

