import { Link } from "react-router-dom";
import routes from "../../../lib/routes";
import Vector_nav from "../vectors/vector_nav";
import { Row, Col } from "react-bootstrap";
import {
  NavContainer,
  H2Nav,
  DivVector,
  DivLogo,
  NavDiv,
  TitleDiv,
  AHome,
  TextButton,
} from "./navelements";
import Button from "../../common/Button";

const Nav = () => {
  const { restricted } = routes;

  return (
    <NavContainer>
      <DivLogo>
      </DivLogo>
      {restricted.map(({ path, title }) => (
        <NavDiv>
          <TitleDiv>
            <H2Nav>
              <AHome href={path}>{title}</AHome>
            </H2Nav>
          </TitleDiv>
        </NavDiv>
      ))}

      <Button text="Tweet" secondary fluid></Button>
    </NavContainer>
  );
};

export default Nav;
