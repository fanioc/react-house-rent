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
  alerttype: string;
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

    let loginstatef = APILogin(this.state.uname, this.state.upsw, 1); //管理员登入
    loginstatef.then(data => {
      if (data !== false) {
        UserState.set(data);
        this.AlertMsg("登入成功,即将跳转...", "success");
        setTimeout(() => {
          this.props.history.push("/admin");
        }, 1000);
      } else {
        this.AlertMsg("登入错误", "danger");
        //TODO::登入错误
      }
    });
  }

  handleName(event: React.FormEvent<HTMLInputElement>) {
    this.setState({ uname: event.currentTarget.value });
  }
  handlePsw(event: React.FormEvent<HTMLInputElement>) {
    this.setState({ upsw: event.currentTarget.value });
  }

  AlertMsg(msg: string, type: string) {
    this.setState({ alertmsg: msg, alerttype: type });
  }

  render() {
    return (
      <Container style={{ height: "calc(100vh - 56px)", paddingTop: "20vh" }}>
        <Row>
          <Alert
            hidden={this.state.alertmsg === ""}
            key={0}
            className="col-12 text-center"
            variant="danger"
          >
            {this.state.alertmsg}
          </Alert>
        </Row>
        <Row className="pb-5">
          <Col className="flex flex-center" lg={{ span: 4, offset: 4 }}>
            请登入
          </Col>
        </Row>
        <Row>
          <Col md={{ span: 4, offset: 4 }}>
            <LoginForm
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
