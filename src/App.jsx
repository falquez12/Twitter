import { BrowserRouter, Switch } from "react-router-dom";
import { Redirect } from "react-router";
import routes from "./lib/routes";
import Base from "./lib/ui/Base";
import "bootstrap/dist/css/bootstrap.min.css";
import PrivateRoute from "./lib/privateroute";
import PublicRoute from "./lib/publicroute";

const App = () => {
  const { restricted, unrestricted } = routes;
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
