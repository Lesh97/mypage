import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import Profile from "./routes/Profile";
import Portfolio from "./routes/Portfolio";
import Contact from "./routes/Contact";
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
