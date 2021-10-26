import styled from "styled-components";
import { Col } from "react-bootstrap";
import { H1 } from "../../../../lib/ui/text";

export const TrendingContainer = styled(Col)`
  align-items: center;
  padding: 14px 0px;
  position: static;
  width: 280px;
  height: 950px;
  left: 0px;
  top: 64px;
  background: #f6f8fa;
  border-radius: 12px;
`;

export const TrendingTitle = styled(H1)`
  display: block;
  width: 120px;
  height: 40px;
  left: 90.5px;
  top: 14px;
  margin: 0px auto;
  text-align: center;
  font-style: normal;
  font-weight: 900;
  font-size: 19px;
  line-height: 22px;
  color: #000000;
`;

export const Showmore = styled(Col)`
  font-family: "Roboto", sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 500px;
  line-height: 16px;
  letter-spacing: 0em;
  text-align: left;
  color: #1da1f2;
  position: static;
  width: 71px;
  height: 40px;
  left: 104.5px;
  top: 546px;
  margin: 0px auto;
  text-align: center;
  vertical-align: middle;
  line-height: 40px;
`;

export const ElementContainer = styled(Col)`
  display: flex;
  flex-direction: column;
  width: 270px;
  height: 170px;
  padding-top: 10px;
  padding-left: 20px;
  margin-right: 0px;
  width: 100%;
  border-bottom: 1px solid rgba(0, 0, 0, 0.08);
`;

export const ElementContent = styled(Col)`
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 16px;
  color: #828282;
`;

export const ElementWord = styled(Col)`
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 6px;
  color: #828282;
`;

export const ElementH1 = styled(H1)`
  width: 105px;
  height: 18px;
  font-style: normal;
  font-weight: 700p-x;
  font-size: 17px;
  line-height: 6px;
  color: #333333;
`;
