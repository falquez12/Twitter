import React from "react";
import { Redirect, Route } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { useContext } from "react";

const PrivateRoute = ({ component: Component, ...rest }) => {
  // Add your own authentication on the below line.
  const { user, isLoggedIn } = useContext(AuthContext);
  const isAuth = isLoggedIn();

  return (
    <Route
      {...rest}
      render={(props) =>
        !isAuth ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{ pathname: "/home", state: { from: props.location } }}
          />
        )
      }
    />
  );
};

export default PrivateRoute;
