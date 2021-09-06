import Metadata from "../../common/Metadata";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import Button from "../../common/Button";
import Vector_blue from "../../common/vectors/vector_blue";
import Vector_white from "../../common/vectors/vector_white";
import {
  StyledRow,
  StyledCol,
  StyledHomeCol,
  H1Home,
  PHome,
  AHome,
  DivVector,
} from "./homeelements";
const Home = () => (
  <>
    <Container fluid>
      <StyledRow>
        <StyledCol>
          <Vector_white />
        </StyledCol>
        <StyledHomeCol>
          <div>
            <DivVector>
              <Vector_blue />
            </DivVector>
            <H1Home>Welcome to Twitter</H1Home>
            <Link to="/login">
              <Button text="Login now" secondary fluid></Button>
            </Link>
            <PHome>
              Don't have an account?{" "}
              <AHome href="/singup">Join free today</AHome>
            </PHome>
            <Link to="/singup">
              <Button text="Sign Up" secondary fluid></Button>
            </Link>
          </div>
        </StyledHomeCol>
      </StyledRow>
    </Container>
  </>
);

export default Home;
