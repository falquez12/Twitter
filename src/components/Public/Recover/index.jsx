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
} from "./recoverelements";
import Metadata from "../../common/Metadata";

const Recover = () => {
  function HandleSubmit() {
  }

  return (
    <StyledContainer>
            <Metadata
            title="Recover"
            description="Recover your account and don't miss out what is happening."
            url="http://localhost:3000/recover"
            img="img/twitterlogo.png"
            />
      <div>
        <Vectorblue />
        <PLogin>My twitter</PLogin>
        <H1Login>Recover your password</H1Login>
        <Form>
          <Input
            key="username"
            title="Email or Username"
            type="text"
            id="username"
            name="username"
            placeholder=""
          />
        </Form>
        <DivBoton>
          <Button
            fluid
            text="Recover your password"
            large
            primary
            onClick={() => HandleSubmit()}
          ></Button>
        </DivBoton>
        <Divaccount>
          <PLogin>
            Return to <ALogin href="/login">Login</ALogin>
          </PLogin>
        </Divaccount>
      </div>
    </StyledContainer>
  );
};

export default Recover;
