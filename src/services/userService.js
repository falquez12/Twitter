import { post } from "./http";

const loginUser = async (username, password) => {
  const user = {
    username,
    password,
  };
  const json = await post("users/login", user);
  return json;
};

const singupUser = async (userInfo) => {
  const json = await post("users", userInfo);
  return json;
};

const logoffUser = () => {
  localStorage.removeItem("user");
};
export { loginUser, singupUser, logoffUser };
