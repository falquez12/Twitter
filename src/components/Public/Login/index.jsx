import Metadata from "../../common/Metadata";
import { StyledContainer } from "./loginelements";
import { Link } from "react-router-dom";
import Button from "../../common/Button";
import Vector_blue from "../../common/vectors/vector_blue";
import Form from "../../common/Form";
import Input from "../../common/Input";


const Login = () => (
  <>
    <StyledContainer>
      <Form>
        <Input />
        <Link to="/home">
              <Button text="Login" secondary fluid></Button>
        </Link>
      </Form>
    </StyledContainer>
  </>
);

export default Login;
