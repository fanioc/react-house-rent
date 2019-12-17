import React from "react";

// import react router.
import { Route, Switch, BrowserRouter } from "react-router-dom";
import {
  UserContext,
  ContextUser,
  UserState,
  LoadCheck
} from "./context/ContextUser";

import Admin from "./Admin/index";
import AdminLogin from "./Admin/login";
import Home from "./Home/index";
import HomeManage from "./HomeManage/index";
import UserRegister from "./HomeManage/register";
import ManageLogin from "./HomeManage/login";
import Notfound from "./Notfound";
import Header from "./common/Header";
import HouseIssue from "./Admin/houseissue";
import { UserInfo } from "./API/UserLogin";

interface AppStore {
  UserInfo: UserContext;
  login: boolean;
}

class App extends React.Component<any, AppStore> {
  constructor(props: any) {
    super(props);
    this.handleUserInfo = this.handleUserInfo.bind(this);
    UserState.set = this.handleUserInfo.bind(this);
    this.state = { UserInfo: { set: this.handleUserInfo }, login: false };
  }

  componentDidMount() {
    let logstate = LoadCheck();
    if (logstate === false) {
      this.setState({ login: logstate });
    } else {
      logstate.then(state => {
        this.setState({ login: state });
      });
    }
  }

  handleUserInfo(info: UserInfo) {
    console.log("调用HandleUserInfo");
    this.setState({
      UserInfo: {
        ...info,
        set: this.handleUserInfo
      }
    });
  }

  render() {
    return (
      <>
        <ContextUser.Provider value={this.state.UserInfo}>
          <BrowserRouter>
            <Header />
            <div className="hidemain">
              <div id="mask" style={{ display: "none" }}>
                遮罩
              </div>
            </div>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/admin" component={Admin} />
              <Route exact path="/admin/login" component={AdminLogin} />
              <Route exact path="/admin/issue" component={HouseIssue} />
              <Route exact path="/manage" component={HomeManage} />
              <Route exact path="/manage/login" component={ManageLogin} />
              <Route exact path="/manage/register" component={UserRegister} />
              <Route exact path="*" component={Notfound} />
            </Switch>
          </BrowserRouter>

          <footer
            style={{
              height: "200px",
              textAlign: "center",
              paddingTop: "100px"
            }}
          >
            <hr />
            楼房摇号系统 © 2019
          </footer>
        </ContextUser.Provider>
      </>
    );
  }
}

export default App;
