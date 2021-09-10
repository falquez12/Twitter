import styled from "styled-components";
import { H1 } from "../../../lib/ui/text";
export const SearchBar = styled.div`
  align-items: center;
  min-width: 120px;
  margin: 20px 0px;
`;

export const Searchinput = styled.input`
  padding-left: 20px;
  background-color: #e7ecf0;
  border-radius: 100px;
  display: flex;
  height: 48px;
  width: 280px;
  outline: none;
  border: 0px;
  padding-left: 30px;
`;

export const Searchtext = styled(H1)`
  color: #828282;
  font-style: normal;
  font-weight: normal;
  letter-spacing: 0;
  margin-left: 8px;
  margin-top: 5px;
  font-size: 15px;
  line-height: 18px;
  min-height: 18px;
  min-width: 98px;
`;

export const SearchP = styled.p`
  height: 20px;
  width: 20px;
`;
