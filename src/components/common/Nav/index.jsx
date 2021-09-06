import { Link } from "react-router-dom";
import routes from "../../../lib/routes";
import Vector_nav from "../vectors/vector_nav";
import {
  NavContainer,
  H2Nav,
  DivVector,
  DivLogo,
  NavDiv,
  TitleDiv,
  AHome,
} from "./navelements";

const Nav = () => {
  const { restricted } = routes;

  return (
    <NavContainer>
      <DivLogo>
        <Vector_nav title="Logo" />
      </DivLogo>
      {restricted.map(({ path, title }) => (
        <NavDiv>
          <Vector_nav title={title} />
          <TitleDiv>
            <H2Nav>
              <Link to={path}>
                <AHome>{title}</AHome>
              </Link>
            </H2Nav>
          </TitleDiv>
        </NavDiv>
      ))}
    </NavContainer>
  );
};

export default Nav;
