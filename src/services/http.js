const httpAPI = process.env.REACT_APP_HTTP_API;

const getusertoken = () => {
  const user = localStorage.getItem("user");
  const jsonUser = user && JSON.parse(user);
  const token = jsonUser?.token;
  return token;
};

const get = async (endpoint) => {
  const token = getusertoken();
  try {
    const url = `${httpAPI}/${endpoint}`;
    const options = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "x-access-token": token,
      },
    };
    const response = await fetch(url, options);
    return response.json();
  } catch (err) {
    return null;
  }
};

const post = async (endpoint, data) => {
  const token = getusertoken();
  try {
    const url = `${httpAPI}/${endpoint}`;
    const options = {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
        "x-access-token": token,
      },
    };
    const response = await fetch(url, options);
    return response.json();
  } catch (err) {
    return null;
  }
};

const destroy = async (endpoint, data) => {
  const token = getusertoken();
  try {
    const url = `${httpAPI}/${endpoint}`;
    const options = {
      method: "DELETE",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
        "x-access-token": token,
      },
    };
    const response = await fetch(url, options);
    return response.json();
  } catch (err) {
    return null;
  }
};

const put = async (endpoint, data) => {
  const token = getusertoken();
  try {
    const url = `${httpAPI}/${endpoint}`;
    const options = {
      method: "PUT",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
        "x-access-token": token,
      },
    };
    const response = await fetch(url, options);
    return response.json();
  } catch (err) {
    return null;
  }
};

export { get, post, destroy, put };
