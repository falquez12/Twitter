import { post } from "./http";

const loginUser = async (username, password) => {
    const user = {
        username,
        password
    };
    const json = await post("users/login", user);
    return json;
}

export { loginUser }