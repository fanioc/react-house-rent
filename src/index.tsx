import React from "react";
import ReactDOM from "react-dom";

// import react component.
import "./index.css"; // common css
import Admin from "./Admin/index";
import Home from "./Home/index";
import HomeManage from "./HomeManage/index";
import Notfound from "./Notfound";

// import react router.
import { Router, Route, Switch } from "react-router-dom";
import { createBrowserHistory } from "history";
const browserHistory = createBrowserHistory();

ReactDOM.render(
  <Router history={browserHistory}>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/admin" component={Admin} />
      <Route exact path="/manage" component={HomeManage} />
      <Route exact path="*" component={Notfound} />
    </Switch>
  </Router>,
  document.getElementById("root")
);
