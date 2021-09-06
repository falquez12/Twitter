import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import Button from "../../common/Button";
import Vectorblue from "../../../lib/ui/vectors/vector_blue";
import Vectorwhite from "../../../lib/ui/vectors/vector_white";
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
          <Vectorwhite />
        </StyledCol>
        <StyledHomeCol>
          <div>
            <DivVector>
              <Vectorblue />
            </DivVector>
            <H1Home>Welcome to Twitter</H1Home>
            <Link to="/login">
              <Button large text="Login now" secondary fluid></Button>
            </Link>
            <PHome>
              Dont have an account?{" "}
              <AHome href="/singup">Join free today</AHome>
            </PHome>
            <Link to="/signup">
              <Button large text="Sign Up" secondary fluid></Button>
            </Link>
          </div>
        </StyledHomeCol>
      </StyledRow>
    </Container>
  </>
);

export default Home;
