import React from "react";
import { withRouter, RouteComponentProps } from "react-router";
import { Row, Col, Container } from "react-bootstrap";
import { LoginForm } from "../common/loginform";
import { UserState } from "../context/ContextUser";
import { APILogin } from "../API/UserLogin";

interface StaffLoginState {
  uname: string;
  upsw: string;
}
class StaffLogin extends React.Component<
  RouteComponentProps<any>,
  StaffLoginState
> {
  constructor(props: RouteComponentProps<any>) {
    super(props);
    this.state = {
      uname: "",
      upsw: ""
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
        this.props.history.push("/admin");
      } else {
        console.log("登入失败逻辑代码");
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

  render() {
    return (
      <Container style={{ height: "calc(100vh - 56px)", paddingTop: "20vh" }}>
        <Row className="pb-5">
          <Col className="flex flex-center" lg={{ span: 4, offset: 4 }}>
            请登入 {this.state.upsw}
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
