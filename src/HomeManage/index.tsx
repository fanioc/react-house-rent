import React from "react";
import { Container, Form, Button, Col, Row } from "react-bootstrap";
import { ContextUser, GetToken } from "../context/ContextUser";
import { Redirect } from "react-router";
import { UserInfo, GetUserInfo } from "../API/UserCRUD";

interface UserIndexState extends UserInfo {}

export default class UserIndex extends React.Component<any, UserIndexState> {
  constructor(props: any) {
    super(props);
    this.state = {
      id: 0,
      name: "",
      head_img: "",
      sex: "男",
      phone: "",
      password: "",
      right: 0,
      register_time: "",
      status: 0,
      house_type: "",
      purpose_house: "",
      identity_type: "身份证",
      identity_num: "",
      check_status: 0
    };
  }

  handleUserInfo() {
    let tok = GetToken();
    if (tok === false) return;
    GetUserInfo(tok.name, tok.token).then(data => {
      if (data !== false) this.setState({ ...data });
      else console.log("查看信息失败.");
    });
  }

  static contextType = ContextUser;

  render() {
    return (
      <ContextUser.Consumer>
        {UserInfo =>
          GetToken() === false ? (
            <Redirect to="/manage/login"></Redirect>
          ) : UserInfo.right === undefined ? (
            <Container>
              <Row>
                <Col>等待跳转...</Col>
              </Row>
            </Container>
          ) : UserInfo.right === 0 ? (
            <Container>
              {this.handleUserInfo()}
              <Row>
                <Col>
                  <h1 className="font-weight-bold text-center mt-5 mb-5">
                    个人信息
                  </h1>
                  <Form>
                    <Form.Row>
                      <Form.Group as={Col} controlId="F_name">
                        <Form.Label>用户名</Form.Label>
                        <Form.Control
                          defaultValue={this.state.name}
                          disabled
                          placeholder="用户名..."
                        />
                      </Form.Group>
                      <Form.Group as={Col} controlId="F_sex">
                        <Form.Label>性别</Form.Label>
                        <Form.Control defaultValue={this.state.sex} as="select">
                          <option value="男">男</option>
                          <option value="女">女</option>
                        </Form.Control>
                      </Form.Group>
                      <Form.Group as={Col} controlId="F_phone">
                        <Form.Label>电话</Form.Label>
                        <Form.Control
                          defaultValue={this.state.phone}
                          placeholder="152...."
                        />
                      </Form.Group>
                    </Form.Row>

                    <Form.Row>
                      <Form.Group as={Col} controlId="F_registertime">
                        <Form.Label>注册时间</Form.Label>
                        <Form.Control
                          defaultValue={this.state.register_time}
                          disabled
                          placeholder=""
                        />
                      </Form.Group>
                      <Form.Group as={Col} controlId="F_checkstatus">
                        <Form.Label>审核状态</Form.Label>
                        <Form.Control
                          defaultValue={this.state.check_status.toString()}
                          disabled
                          as="select"
                        >
                          <option value="0">未审核</option>
                          <option value="1">已审核</option>
                        </Form.Control>
                      </Form.Group>
                    </Form.Row>

                    <Form.Row>
                      <Form.Group
                        as={Col}
                        md={{ span: "4" }}
                        controlId="F_idtype"
                      >
                        <Form.Label>证件类型</Form.Label>
                        <Form.Control
                          defaultValue={this.state.identity_type}
                          as="select"
                        >
                          <option value="身份证">身份证</option>
                          <option value="暂住证">暂住证</option>
                          <option value="行驶证">行驶证</option>
                        </Form.Control>
                      </Form.Group>

                      <Form.Group as={Col} controlId="F_idnum">
                        <Form.Label>证件号码</Form.Label>
                        <Form.Control defaultValue={this.state.identity_num} />
                      </Form.Group>
                    </Form.Row>

                    <Form.Row>
                      <Form.Group as={Col} controlId="F_presell">
                        <Form.Label>意向预售编号</Form.Label>
                        <Form.Control defaultValue={this.state.purpose_house} />
                      </Form.Group>
                      <Form.Group as={Col} controlId="F_housetype">
                        <Form.Label>意向房源类型</Form.Label>
                        <Form.Control defaultValue={this.state.house_type} />
                      </Form.Group>
                    </Form.Row>

                    <Button variant="primary" type="submit">
                      修改
                    </Button>
                  </Form>
                </Col>
              </Row>
            </Container>
          ) : (
            <div>对不起,无法查看</div>
          )
        }
      </ContextUser.Consumer>
    );
  }
}
