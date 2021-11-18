import { Header } from "./components/views/Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Home } from "./components/views/pages/home";
import { Datos } from "./components/views/pages/datos";

export const App = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/inicio" exact component={Home} />
        <Route path="/datos" exact component={Datos} />
      </Switch>
    </Router>
  );
};

export default App;
