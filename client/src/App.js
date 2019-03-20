import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Main from "./pages/Main";
import Signup from "./pages/Signup";

const App = () => (
  <div>
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/signup" component={Signup} />
          {/* <Route component={NoMatch} /> */}
        </Switch>
      </div>
    </Router>
  </div>
);

export default App;
