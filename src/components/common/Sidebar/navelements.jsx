import styled from "styled-components";
import { P} from "../../../lib/ui/text";

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
  }

`;

export const DivElement = styled.div`
  margin: 0.5rem 0px;
  color: black;
`;
export const Divlogo = styled.div`
  margin: 20px 0px;
`;
