import Button from "../../common/Button";
import Form from "../../common/Form";
import Input from "../../common/Input";
import Vectorblue from "../../../lib/ui/vectors/vector_blue";
import { Link } from "react-router-dom";
import {
  PLogin,
  ALogin,
  H1Login,
  Divforgot,
  Divaccount,
  StyledContainer,
} from "./loginelements";

const Login = () => {
  function HandleSubmit() {
    console.log("aaaaa");
  }

  return (
    <StyledContainer>
      <div>
        <Vectorblue />
        <PLogin>My twitter</PLogin>
        <H1Login>Login to your account</H1Login>
        <Form>
          <Input
            key="username"
            title="Email or Username"
            type="text"
            id="username"
            name="username"
            placeholder=""
          />
          <Input
            title="Password"
            key="password"
            type="password"
            id="password"
            name="password"
            placeholder=""
          />
        </Form>
        <Divforgot>
          <ALogin href="/recover">Forgot password?</ALogin>
        </Divforgot>
        <Link to="/home">
          <Button
            fluid
            text="Login now"
            large
            primary
            onClick={() => HandleSubmit()}
          ></Button>
        </Link>
        <Divaccount>
          <PLogin>
            Don't have an account?{" "}
            <ALogin href="/signup">Join free today</ALogin>
          </PLogin>
        </Divaccount>
      </div>
    </StyledContainer>
  );
};

export default Login;
