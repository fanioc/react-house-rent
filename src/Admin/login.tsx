import React from "react";
import { InputGroup, Form, Button, Row, Col } from "react-bootstrap";
import { ContextUser } from "../context/ContextUser";
import { History } from "history";

export interface LoginPropsType {
  history: History<any>;
  handleLogin: Function;
}

class StaffLogin extends React.Component<LoginPropsType, {}> {
  constructor(props: LoginPropsType) {
    super(props);
    this.state = {};
  }
  static contextType = ContextUser;

  FormLogin(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    //TODO::调用登入API
    if (true) {
      sessionStorage.setItem("UserToken", "dafsdf");
      sessionStorage.setItem("UserName", "dafsdf");
      this.context.handle({ token: "dafsdf" });
      this.props.handleLogin(true);
    }
  }

  render() {
    return (
      <Form onSubmit={this.FormLogin}>
        <InputGroup className="mb-3">
          <InputGroup.Prepend>
            <InputGroup.Text id="inputGroup-sizing-default">
              账号
            </InputGroup.Text>
          </InputGroup.Prepend>
          <Form.Control />
        </InputGroup>
        <InputGroup className="mb-3">
          <InputGroup.Prepend>
            <InputGroup.Text id="inputGroup-sizing-default">
              密码
            </InputGroup.Text>
          </InputGroup.Prepend>
          <Form.Control />
        </InputGroup>
        <Row>
          <Col className="flex-center flex">
            <Button className="full" variant="primary">
              注册
            </Button>
          </Col>
          <Col className="flex-center flex full">
            <Button type="submit" className="full" variant="primary">
              登入
            </Button>
          </Col>
        </Row>
      </Form>
    );
  }
}

export default StaffLogin;
