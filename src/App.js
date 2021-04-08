import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Auth from "./pages/Auth";
import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/">
            <Auth />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
