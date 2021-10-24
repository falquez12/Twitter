import { createContext, useEffect, useState } from "react";

const AuthContext = createContext();

const AuthProvider = (props) => {
  const [user, setUser] = useState({});

  useEffect(() => {
    const user = localStorage.getItem("user");
    setUser(user);
  }, []);

  const login = (user) => {
    setUser(user);
    console.log(user);
    localStorage.setItem("user", JSON.stringify(user));

    const user1 = localStorage.getItem("user");
    const jsonUser = user1 && JSON.parse(user1);
    const token = jsonUser?.token;
    console.log(token);
  };

  const logout = () => {
    setUser({});
    localStorage.removeItem("user");
  };

  const isLoggedIn = () => {
    return !!user;
  };

  return (
    <AuthContext.Provider value={{ login, logout, isLoggedIn, user }}>
      {props.children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
