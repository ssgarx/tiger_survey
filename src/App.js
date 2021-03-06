import logo from "./logo.svg";
import "./App.css";
import CreateSurvey from "./components/CreateSurvey";
import TakeSurvey from "./components/TakeSurvey";
import { Link, Route, BrowserRouter as Router, Switch } from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <div>
          <Link to="/create">Create</Link>
          <br></br>
          <Link to="/take">Take</Link>
        </div>

        <Switch>
          <Route path="/create">
            <CreateSurvey />
          </Route>

          <Route path="/take">
            <TakeSurvey />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
