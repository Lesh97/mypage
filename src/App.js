import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import Profile from "./components/Profile";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import "./App.css";

function App() {
  return (
    <>
      <Router>
        <Header></Header>

        <Switch>
          <Route path="/profile">
            <Profile></Profile>
          </Route>
          <Route path="/portfolio">
            <Portfolio></Portfolio>
          </Route>
          <Route path="/contact">
            <Contact></Contact>
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
