import { StyledContainer } from "./loginelements";
import Button from "../../common/Button";
import Form from "../../common/Form";
import Input from "../../common/Input";
import Vectorblue from "../../../lib/ui/vectors/vector_blue";
import { PLogin, ALogin, H1Login } from "./loginelements";

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
        <ALogin href="/singup">Forgot password?</ALogin>
        <Button
          fluid
          text="Login now"
          primary
          onClick={() => HandleSubmit()}
        ></Button>
        <PLogin>
          Dont have an account? <ALogin href="/singup">Join free today</ALogin>
        </PLogin>
      </div>
    </StyledContainer>
  );
};

export default Login;
