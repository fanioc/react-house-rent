import React from "react";
import ReactDOM from "react-dom";

// import commoncss and boostrap.
import "./index.css"; // common css
import "bootstrap/dist/css/bootstrap.min.css";

// import UserContext
import { userInfo, ContextUser } from "./context/ContextUser";

// import react component.
import App from "./App";
import Admin from "./Admin/index";
import Home from "./Home/index";
import HomeManage from "./HomeManage/index";
import Notfound from "./Notfound";

// import react router.
import { Route, Switch, BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <BrowserRouter>
    <ContextUser.Provider value={userInfo}>
      <App />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/admin" component={Admin} />
        <Route exact path="/manage" component={HomeManage} />
        <Route exact path="*" component={Notfound} />
      </Switch>
    </ContextUser.Provider>
  </BrowserRouter>,
  document.getElementById("root")
);
