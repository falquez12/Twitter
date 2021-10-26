import { useContext } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Redirect } from "react-router";
import routes from "./lib/routes";
import Base from "./lib/ui/Base";
import "bootstrap/dist/css/bootstrap.min.css";
import { AuthContext } from "./context/AuthContext";
import { useHistory } from "react-router";
import PrivateRoute from "./lib/privateroute";
import PublicRoute from "./lib/publicroute";

const App = () => {
  const { restricted, unrestricted } = routes;
  const { user, isLoggedIn } = useContext(AuthContext);
  const isAuth = isLoggedIn();
  const history = useHistory();

  const RestrictedRoute = ({ ...props }) => {
    console.log(isAuth);
    return isAuth ? <Route {...props} /> : <Redirect to="/" />;
  };

  const UnrestrictedRoute = ({ ...props }) => {
    console.log(isAuth);
    return isAuth ? <Redirect to="/home" /> : <Route {...props} />;
  };

  const RenderRoute = () => {
    if (isAuth) {
      return restricted.map(({ path, component }) => {
        isAuth ? (
          <Route key={path} path={path} component={component} />
        ) : (
          <Redirect to="/" />
        );
      });
    } else {
      return unrestricted.map(({ path, component }) => {
        isAuth ? (
          <Redirect to="/home" />
        ) : (
          <Route key={path} path={path} component={component} />
        );
      });
    }
  };
  return (
    <main>
      <Base />
      <BrowserRouter>
        <Switch>
          {restricted.map(({ path, component }) => (
            <PrivateRoute key={path} path={path} component={component} />
          ))}
          {unrestricted.map(({ path, component }) => (
            <PublicRoute key={path} exact path={path} component={component} />
          ))}
          <Redirect from="*" to="/" />
        </Switch>
      </BrowserRouter>
    </main>
  );
};

export default App;
