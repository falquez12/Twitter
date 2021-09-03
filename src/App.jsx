import { BrowserRouter, Route, Switch } from "react-router-dom";
import Nav from "./components/common/Nav";
import routes from "./lib/routes";
import Base from "./lib/ui/Base";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  const { restricted, unrestricted } = routes;
  return (
    <main>
      <Base />
      <BrowserRouter>
        <Switch>
          {restricted.map(({ path, component }) => (
            <Route exact path={path} component={component} />
          ))}
          {unrestricted.map(({ path, component }) => (
            <Route exact path={path} component={component} />
          ))}
        </Switch>
      </BrowserRouter>
    </main>
  );
};

export default App;
