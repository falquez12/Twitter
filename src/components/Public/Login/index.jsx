import { useState, useContext } from "react";
import { loginUser } from "./../../../services/userService";
import Button from "../../common/Button";
import Form from "../../common/Form";
import Input from "../../common/Input";
import Vectorblue from "../../../lib/ui/vectors/vector_blue";
import Metadata from "../../common/Metadata";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../context/AuthContext";
import { useHistory } from "react-router";
import {
  PLogin,
  ALogin,
  H1Login,
  Divforgot,
  Divaccount,
  StyledContainer,
} from "./loginelements";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const auth = useContext(AuthContext);
  const history = useHistory();
  const handleLogin = (event) => {
    console.log("username", username)
    console.log("password", password)
    event.preventDefault();
    loginUser(username, password)
    .then(data=>{
        if(data.message === "ok") {
            const user = data.data;
            auth.login(user);
            history.push("/home");
        }
    })
    .catch((err)=>{
        console.log("err",err);
    });
};
  

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
            setState={setUsername}
            state={username}
          />
          <Input
            title="Password"
            key="password"
            type="password"
            id="password"
            name="password"
            placeholder=""
            setState={setPassword}
            state={password}
          />
        </Form>
        <Divforgot>
          <ALogin href="/recover">Forgot password?</ALogin>
        </Divforgot>
          <Button
            fluid
            text="Login now"
            large
            primary
            onClick={handleLogin}
          ></Button>
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
