import { BrowserRouter, Route, Switch } from "react-router-dom";
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
            <Route path={path} component={component} key={path} />
          ))}
          {unrestricted.map(({ path, component }) => (
            <Route exact path={path} component={component} key={path} />
          ))}
        </Switch>
      </BrowserRouter>
    </main>
  );
};

export default App;
