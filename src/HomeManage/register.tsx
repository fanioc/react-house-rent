import React from "react";
import { UserInfo, APIUserRegister } from "../API/UserCRUD";
import { Container, Form, Button, Row, Col } from "react-bootstrap";
import { withRouter, RouteComponentProps } from "react-router";

interface UserRegiserState {}

class UserRegiser extends React.Component<
  RouteComponentProps<any>,
  UserRegiserState
> {
  constructor(props: any) {
    super(props);
    this.state = {};
  }
  handleRegister(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    let today = new Date();
    if (
      event.currentTarget.user_password.value !==
      event.currentTarget.repsw.value
    ) {
      alert("两次输入密码需要一致");
      return;
    }

    let info: UserInfo = {
      id: 0,
      name: "",
      head_img: "",
      sex: "男",
      phone: "",
      password: "",
      right: 0,
      register_time: Math.floor(today.valueOf() / 1000).toString(),
      status: 0,
      house_type: "",
      purpose_house: "",
      identity_type: "",
      identity_num: "",
      check_status: 0
    };
    info.name = event.currentTarget.user_name.value;
    info.password = event.currentTarget.user_password.value;
    info.sex = event.currentTarget.user_sex.value;
    info.phone = event.currentTarget.user_phone.value;
    info.house_type = event.currentTarget.housetype.value;
    info.identity_type = event.currentTarget.user_idtype.value;
    info.identity_num = event.currentTarget.user_idnum.value;
    info.purpose_house = event.currentTarget.presell.value;
    if (info.name.length <= 3) {
      alert("请输入正确的用户名");
      return;
    }
    if (info.phone.length <= 3) {
      alert("请输入正确的手机号");
      return;
    }
    if (info.password.length <= 3) {
      alert("请输入正确的密码");
      return;
    }
    if (info.house_type.length <= 3) {
      alert("请输入正确的房源类型");
      return;
    }
    if (info.purpose_house.length <= 3) {
      alert("请输入正确的房源编号");
      return;
    }
    if (info.identity_num.length <= 3) {
      alert("请输入正确的证件号");
      return;
    }

    APIUserRegister(info).then(d => {
      if (d === false) {
        alert("注册错误");
      } else {
        this.props.history.push("/manage/login");
      }
    });

    console.log(info);
  }

  render() {
    return (
      <Container>
        <Row>
          <Col>
            <h1 className=" font-weight-bold mt-5 mb-5 text-center">
              用户购房登记
            </h1>
          </Col>
        </Row>
        <Form onSubmit={this.handleRegister.bind(this)}>
          <Form.Row>
            <Form.Group as={Col} controlId="user_name">
              <Form.Label>用户名</Form.Label>
              <Form.Control placeholder="用户名..." />
            </Form.Group>
            <Form.Group as={Col} controlId="user_sex">
              <Form.Label>性别</Form.Label>
              <Form.Control as="select">
                <option value="男">男</option>
                <option value="女">女</option>
              </Form.Control>
            </Form.Group>
            <Form.Group as={Col} controlId="user_phone">
              <Form.Label>电话</Form.Label>
              <Form.Control placeholder="152...." />
            </Form.Group>
          </Form.Row>
          <Form.Row>
            <Form.Group as={Col} controlId="user_password">
              <Form.Label>密码</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group as={Col} controlId="repsw">
              <Form.Label>再输一次</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
          </Form.Row>

          <Form.Row>
            <Form.Group as={Col} md={{ span: "4" }} controlId="user_idtype">
              <Form.Label>证件类型</Form.Label>
              <Form.Control as="select">
                <option value="居民身份证">居民身份证</option>
                <option value="暂住证">暂住证</option>
                <option value="行驶证">行驶证</option>
              </Form.Control>
            </Form.Group>

            <Form.Group as={Col} controlId="user_idnum">
              <Form.Label>证件号码</Form.Label>
              <Form.Control />
            </Form.Group>
          </Form.Row>

          <Form.Row>
            <Form.Group as={Col} controlId="presell">
              <Form.Label>意向预售编号</Form.Label>
              <Form.Control />
            </Form.Group>
            <Form.Group as={Col} controlId="housetype">
              <Form.Label>意向房源类型</Form.Label>
              <Form.Control />
            </Form.Group>
          </Form.Row>

          <Button variant="primary" type="submit">
            注册
          </Button>
        </Form>
      </Container>
    );
  }
}

export default withRouter(UserRegiser);
