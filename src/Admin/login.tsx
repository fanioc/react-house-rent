import React from "react";
import { withRouter, RouteComponentProps } from "react-router";
import { Row, Col, Container } from "react-bootstrap";
import { LoginForm } from "../common/loginform";
import { ContextUser } from "../context/ContextUser";

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
  static contextType = ContextUser;

  handleLogin(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log(this.state.uname);

    //TODO::调用登入API
    if (true) {
      sessionStorage.setItem("UserToken", "sdf");
      sessionStorage.setItem("UserName", "dafsdf");
      this.context.set({ name: this.state.uname, token: "dafsdf" });
      this.props.history.push("/admin");
    }
  }

  handleName(event: React.FormEvent<HTMLInputElement>) {
    this.setState({ uname: event.currentTarget.value });
  }
  handlePsw(event: React.FormEvent<HTMLInputElement>) {
    this.setState({ upsw: event.currentTarget.value });
  }

  render() {
    return (
      <Container style={{ height: "calc(100vh - 56px);", paddingTop: "20vh" }}>
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
