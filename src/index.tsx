import React from "react";
import ReactDOM from "react-dom";
// react component imported
import "./index.css"; // common css
import App from "./App";
import Notfound from "./Notfound";

// react router imported.
import { Router, Route } from "react-router-dom";
import { createBrowserHistory } from "history";
const browserHistory = createBrowserHistory();

ReactDOM.render(
  <Router history={browserHistory}>
    <Route exact path="/" component={App} />
    <Route exact path="about" component={App} />
    <Route exact path="inbox" component={App} />
    <Route exact path="*" component={Notfound} />
  </Router>,
  document.getElementById("root")
);
