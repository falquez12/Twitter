import Button from "../../common/Button";
import Form from "../../common/Form";
import Input from "../../common/Input";
import Vectorblue from "../../../lib/ui/vectors/vector_blue";
import {
  PLogin,
  ALogin,
  H1Login,
  Divaccount,
  StyledContainer,
  DivBoton,
} from "./signupelements";

const SignUp = () => {
  function HandleSubmit() {
    console.log("aaaaa");
  }

  return (
    <div style={{ height: "100%" }}>
      <StyledContainer>
        <div>
          <Vectorblue />
          <PLogin>My twitter</PLogin>
          <H1Login>Create your account</H1Login>
          <Form>
            <Input
              key="Name"
              title="Name"
              type="text"
              id="name"
              name="name"
              placeholder=""
            />
            <Input
              key="username"
              title="Username"
              type="text"
              id="username"
              name="username"
              placeholder=""
            />
            <Input
              key="email"
              title="Email"
              type="email"
              id="email"
              name="email"
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
            <Input
              key="confirm"
              title="Password Confirmation"
              type="password"
              id="confirm"
              name="confirm"
              placeholder=""
            />
          </Form>
          <DivBoton>
            <Button
              fluid
              text="Sign Up"
              large
              primary
              onClick={() => HandleSubmit()}
            ></Button>
          </DivBoton>
          <Divaccount>
            <PLogin>
              Already have an account? <ALogin href="/login">Login</ALogin>
            </PLogin>
          </Divaccount>
        </div>
      </StyledContainer>
    </div>
  );
};

export default SignUp;
