import React from "react";
import ReactDOM from "react-dom";
import { Switch, BrowserRouter as Router, Link, Route } from "react-router-dom";

import App from "./App";
import Register from "./Register";
import { Login } from "./Login";
// import PageNotFound from './PageNotFound'

import "./css/index.css";
import * as serviceWorker from "./serviceWorker";

const landing = (
  <Router>
    <div className="topbar">
      <div className="dropdown">
        <div className="dropbtn">Menu ▼</div>
        <div className="dropdown-content">
          <Link to="/Login">Login</Link>
          <Link to="/Register">Register</Link>
        </div>
      </div>
    </div>
    <Switch>
      <Route path="/Register" component={Register} />
      <Route path="/Login" component={Login} />
      {/* <Route component={PageNotFound}/> */}
    </Switch>
    <App />
  </Router>
);

ReactDOM.render(landing, document.getElementById("root"));

serviceWorker.unregister();
