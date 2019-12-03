import React from "react";
import ReactDOM from "react-dom";
// import react router.
import { Route, Switch, BrowserRouter } from "react-router-dom";

// import commoncss and boostrap.
import "./index.css"; // common css
import "bootstrap/dist/css/bootstrap.min.css";

// import UserContext
import { UserState, ContextUser } from "./context/ContextUser";

// import react component.
import App from "./App";
import Admin from "./Admin/index";
import AdminLogin from "./Admin/login";
import Home from "./Home/index";
import HomeManage from "./HomeManage/index";
import Notfound from "./Notfound";

ReactDOM.render(
  <BrowserRouter>
    <ContextUser.Provider value={UserState}>
      <App />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/admin" component={Admin} />
        <Route exact path="/admin/login" component={AdminLogin} />
        <Route exact path="/manage" component={HomeManage} />
        <Route exact path="/manage/login" component={AdminLogin} />
        <Route exact path="*" component={Notfound} />
      </Switch>
    </ContextUser.Provider>
  </BrowserRouter>,
  document.getElementById("root")
);
