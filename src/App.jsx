import {useContext} from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Redirect } from "react-router";
import routes from "./lib/routes";
import Base from "./lib/ui/Base";
import "bootstrap/dist/css/bootstrap.min.css";
import { AuthContext } from "./context/AuthContext";
import { useHistory } from "react-router";


const App = () => {
  const { restricted, unrestricted } = routes;
  const { isLoggedIn } = useContext(AuthContext);
  const isAuth = isLoggedIn();
  return (
    <main>
      <Base />
      <BrowserRouter>
      <Switch>
          {
            isAuth ? 
            restricted.map(({ path, component }) =>
              <Route key={path} path={path} component={component} />)
          :
            unrestricted.map(({ path, component }) =>
              <Route key={path} exact path={path} component={component} />)
          }
        </Switch>
      </BrowserRouter>
    </main>
  );
};

export default App;
