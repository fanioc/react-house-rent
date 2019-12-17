import React from "react";
import { withRouter, RouteComponentProps } from "react-router";
import { Row, Col, Container, Alert } from "react-bootstrap";
import { LoginForm } from "../common/loginform";
import { UserState } from "../context/ContextUser";
import { APILogin } from "../API/UserLogin";

interface StaffLoginState {
  uname: string;
  upsw: string;
  alertmsg: string;
  alerttype: "success" | "danger" | "warning";
}
class StaffLogin extends React.Component<
  RouteComponentProps<any>,
  StaffLoginState
> {
  constructor(props: RouteComponentProps<any>) {
    super(props);
    this.state = {
      uname: "",
      upsw: "",
      alertmsg: "",
      alerttype: "danger"
    };
    this.handleLogin = this.handleLogin.bind(this);
    this.handleName = this.handleName.bind(this);
    this.handlePsw = this.handlePsw.bind(this);
  }

  handleLogin(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log(this.state.uname);

    let loginstatef = APILogin(this.state.uname, this.state.upsw, 0); //用户登入
    loginstatef.then(data => {
      if (data !== false) {
        UserState.set(data);

        this.AlertMsg(
          "欢迎," + data.name! + ",用户登入成功,即将跳转管理页面...",
          "success"
        );
        setTimeout(() => {
          this.props.history.push("/manage");
        }, 1000);
      } else {
        this.AlertMsg("登入错误", "danger");
      }
    });
  }

  handleName(event: React.FormEvent<HTMLInputElement>) {
    this.setState({ uname: event.currentTarget.value });
  }
  handlePsw(event: React.FormEvent<HTMLInputElement>) {
    this.setState({ upsw: event.currentTarget.value });
  }

  AlertMsg(msg: string, type: "success" | "danger" | "warning") {
    this.setState({ alertmsg: msg, alerttype: type });
  }

  render() {
    return (
      <Container style={{ height: "70vh", paddingTop: "20vh" }}>
        <Row>
          <Alert
            hidden={this.state.alertmsg === ""}
            key={0}
            className="col-12 text-center"
            variant={this.state.alerttype}
          >
            {this.state.alertmsg}
          </Alert>
        </Row>
        <Row className="pb-5">
          <Col className="flex flex-center" lg={{ span: 4, offset: 4 }}>
            <h1>
              <b>用户登入</b>
            </h1>
          </Col>
        </Row>
        <Row>
          <Col md={{ span: 4, offset: 4 }}>
            <LoginForm
              Register="register"
              handleName={this.handleName}
              handlePsw={this.handlePsw}
              FormLogin={this.handleLogin}
            />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default withRouter(StaffLogin);
