import Button from "../../common/Button";
import Form from "../../common/Form";
import Input from "../../common/Input";
import Vectorblue from "../../../lib/ui/vectors/vector_blue";
import Metadata from "../../common/Metadata";
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
  }

  return (
    <StyledContainer>
      <Metadata
            title="Login"
            description="Log in the world of Twitter now so you can check the latest news your friends and the world are talking about."
            url="http://localhost:3000/login"
            img="img/twitterlogo.png"
            />
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
