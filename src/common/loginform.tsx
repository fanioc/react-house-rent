import React from "react";
import { InputGroup, Form, Button, Row, Col } from "react-bootstrap";

export interface LoginFormProps {
  FormLogin: (event: React.FormEvent<HTMLFormElement>) => void;
  handleName: (event: React.FormEvent<HTMLInputElement>) => void;
  handlePsw: (event: React.FormEvent<HTMLInputElement>) => void;
}

export function LoginForm(props: LoginFormProps) {
  return (
    <Form name="loginform" onSubmit={props.FormLogin}>
      <InputGroup className="mb-3">
        <InputGroup.Prepend>
          <InputGroup.Text id="inputGroup-sizing-default">账号</InputGroup.Text>
        </InputGroup.Prepend>
        <Form.Control name="uname" onChange={props.handleName} />
      </InputGroup>
      <InputGroup className="mb-3">
        <InputGroup.Prepend>
          <InputGroup.Text id="inputGroup-sizing-default">密码</InputGroup.Text>
        </InputGroup.Prepend>
        <Form.Control onChange={props.handlePsw} type="password" name="upsw" />
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
