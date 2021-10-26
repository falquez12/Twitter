import Button from "../../common/Button";
import Form from "../../common/Form";
import Input from "../../common/Input";
import Vectorblue from "../../../lib/ui/vectors/vector_blue";
import { useState, useContext } from "react";
import { singupUser, loginUser } from "./../../../services/userService";
import { AuthContext } from "../../../context/AuthContext";
import { useHistory } from "react-router";
import { AlertSingUp } from "../../common/Alert";

import {
  PLogin,
  ALogin,
  H1Login,
  Divaccount,
  StyledContainer,
  DivBoton,
} from "./signupelements";
import Metadata from "../../common/Metadata";

const SignUp = () => {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setpasswordConfirmation] = useState("");
  const [email, setEmail] = useState("");
  const [showAlert, setShowAlert] = useState(false);
  const auth = useContext(AuthContext);
  const history = useHistory();
  function handleClick() {
    setShowAlert(false);
  }
  const loginusertohome = (username, password) => {
    loginUser(username, password)
      .then((data) => {
        if (data.message === "ok") {
          const user = data.data;
          auth.login(user);
          history.push("/home");
        }
      })
      .catch((err) => {
        console.log("err", err);
      });
  };
  const HandleSingUp = (event) => {
    const userInfo = {
      name: name,
      username: username,
      password: password,
      passwordConfirmation: passwordConfirmation,
      email: email,
    };
    event.preventDefault();
    singupUser(userInfo)
      .then((data) => {
        if (data.active) {
          loginusertohome(username, password);
        } else {
          setShowAlert(true);
        }
      })
      .catch((err) => {
        console.log("fallo todo");
        console.log("err", err);
      });
  };

  return (
    <div style={{ height: "100%" }}>
      <StyledContainer>
        <Metadata
          title="SignUp"
          description="Sign Up in Twitter and be part of the most relevant social network in the world."
          url="http://localhost:3000/signup"
          img="img/twitterlogo.png"
        />
        <div>
          <div style={{ width: "100%" }}>
            {showAlert ? <AlertSingUp handleClick={handleClick} /> : null}
          </div>
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
              setState={setName}
              state={name}
            />
            <Input
              key="username"
              title="Username"
              type="text"
              id="username"
              name="username"
              setState={setUsername}
              state={username}
            />
            <Input
              key="email"
              title="Email"
              type="email"
              id="email"
              name="email"
              setState={setEmail}
              state={email}
            />
            <Input
              title="Password"
              key="password"
              type="password"
              id="password"
              name="password"
              setState={setPassword}
              state={password}
            />
            <Input
              key="confirm"
              title="Password Confirmation"
              type="password"
              id="confirm"
              name="confirm"
              setState={setpasswordConfirmation}
              state={passwordConfirmation}
            />
          </Form>
          <DivBoton>
            <Button
              fluid
              text="Sign Up"
              large
              primary
              onClick={HandleSingUp}
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
