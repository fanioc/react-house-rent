import React from "react";
import { APIHouseIssue, HouseInfo } from "../API/HouseCRUD";
import { Container, Form, Button, Row, Col } from "react-bootstrap";
import { withRouter, RouteComponentProps } from "react-router";
import { GetToken, ContextUser } from "../context/ContextUser";

interface HouseIssueState {}

class HouseIssue extends React.Component<
  RouteComponentProps<any>,
  HouseIssueState
> {
  constructor(props: RouteComponentProps<any>) {
    super(props);
    this.state = {};
  }
  static contextType = ContextUser;

  handleIssue(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    console.log(event.currentTarget.F_intent_stime.value);
    let info: HouseInfo = {
      presell_number: "",
      build_name: "",
      build_id: "",
      pic_view: "",
      enterprise: "",
      house_type: "",
      hotline: "",
      introudce: "",
      intent_stime: "",
      intent_endtime: "",
      choose_stime: "",
      choose_endtime: "",
      reception_stime: "",
      reception_endtime: "",
      reception_site: "",
      lottery_date: ""
    };
    info.presell_number = event.currentTarget.F_presell_number.value;
    info.build_name = event.currentTarget.F_build_name.value;
    info.build_id = event.currentTarget.F_build_id.value;
    info.pic_view = event.currentTarget.F_pic_view.value;
    info.enterprise = event.currentTarget.F_enterprise.value;
    info.house_type = event.currentTarget.F_house_type.value;
    info.hotline = event.currentTarget.F_hotline.value;
    info.introudce = event.currentTarget.F_introudce.value;
    info.intent_stime = str2Time(event.currentTarget.F_intent_stime.value);
    info.intent_endtime = str2Time(event.currentTarget.F_intent_endtime.value);
    info.choose_stime = str2Time(event.currentTarget.F_choose_stime.value);
    info.choose_endtime = str2Time(event.currentTarget.F_choose_endtime.value);
    info.reception_stime = str2Time(
      event.currentTarget.F_reception_stime.value
    );
    info.reception_endtime = str2Time(
      event.currentTarget.F_reception_endtime.value
    );
    info.reception_site = event.currentTarget.F_reception_site.value;
    info.lottery_date = str2Time(event.currentTarget.F_lottery_date.value);

    console.log(info);

    if (
      info.presell_number.length < 3 ||
      info.build_name.length < 3 ||
      info.build_id.length < 3 ||
      info.pic_view!.length < 3 ||
      info.enterprise!.length < 3 ||
      info.house_type.length < 3 ||
      info.hotline.length < 3 ||
      info.introudce.length < 3
    ) {
      alert("请确保必要字段长度大于3!");
      return;
    }
    let tok = GetToken();
    if (tok === false) return;
    APIHouseIssue(info, tok.name, tok.token).then(d => {
      if (d === false) {
        alert("发布错误");
      } else {
        this.props.history.push("/admin");
      }
    });

    console.log(info);
  }

  render() {
    if (
      this.context === undefined ||
      this.context.right === undefined ||
      this.context.right < 4
    ) {
      alert("发布权限不足");
      this.props.history.push("/admin");
    }
    return (
      <Container>
        <Row>
          <Col>
            <h1 className=" font-weight-bold mt-5 mb-5 text-center">
              房源发布
            </h1>
          </Col>
        </Row>
        <Form onSubmit={this.handleIssue.bind(this)}>
          <Form.Row>
            <Form.Group as={Col} controlId="F_build_name">
              <Form.Label>楼盘名</Form.Label>
              <Form.Control />
            </Form.Group>
            <Form.Group as={Col} controlId="F_build_id">
              <Form.Label>楼盘号</Form.Label>
              <Form.Control />
            </Form.Group>
            <Form.Group as={Col} controlId="F_house_type">
              <Form.Label>户型</Form.Label>
              <Form.Control />
            </Form.Group>
            <Form.Group as={Col} controlId="F_pic_view">
              <Form.Label>预览图片地址</Form.Label>
              <Form.Control />
            </Form.Group>
          </Form.Row>
          <Form.Row>
            <Form.Group as={Col} xs="3" controlId="F_presell_number">
              <Form.Label>预售证号</Form.Label>
              <Form.Control />
            </Form.Group>
            <Form.Group as={Col} xs="6" controlId="F_enterprise">
              <Form.Label>开发企业</Form.Label>
              <Form.Control />
            </Form.Group>
            <Form.Group as={Col} xs="3" controlId="F_hotline">
              <Form.Label>热线电话</Form.Label>
              <Form.Control />
            </Form.Group>
          </Form.Row>

          <Form.Row>
            <Form.Group as={Col} controlId="F_introudce">
              <Form.Label>介绍</Form.Label>
              <Form.Control as="textarea" placeholder="介绍..." />
            </Form.Group>
          </Form.Row>

          <Form.Row>
            <Form.Group as={Col} controlId="F_intent_stime">
              <Form.Label>意向登记时间开始</Form.Label>
              <Form.Control type="date" />
            </Form.Group>
            <Form.Group as={Col} controlId="F_intent_endtime">
              <Form.Label>意向登记时间结束</Form.Label>
              <Form.Control type="date" />
            </Form.Group>
            <Form.Group as={Col} controlId="F_choose_stime">
              <Form.Label>选楼开始日期</Form.Label>
              <Form.Control type="date" />
            </Form.Group>
            <Form.Group as={Col} controlId="F_choose_endtime">
              <Form.Label>选择结束日期</Form.Label>
              <Form.Control type="date" />
            </Form.Group>
          </Form.Row>

          <Form.Row>
            <Form.Group as={Col} controlId="F_reception_stime">
              <Form.Label>现场接受资料时间开始</Form.Label>
              <Form.Control type="date" />
            </Form.Group>
            <Form.Group as={Col} controlId="F_reception_endtime">
              <Form.Label>现场接受资料时间结束</Form.Label>
              <Form.Control type="date" />
            </Form.Group>
            <Form.Group as={Col} controlId="F_reception_site">
              <Form.Label>现场接受资料地点</Form.Label>
              <Form.Control />
            </Form.Group>
            <Form.Group as={Col} controlId="F_lottery_date">
              <Form.Label>摇号日期</Form.Label>
              <Form.Control type="date" />
            </Form.Group>
          </Form.Row>

          <Form.Row>
            <Button className="mt-2" variant="primary" type="submit">
              发布
            </Button>
            {/* <Button className="mt-2 ml-2" variant="primary">
              插入测试数据
            </Button> */}
          </Form.Row>
        </Form>
      </Container>
    );
  }
}

export default withRouter(HouseIssue);

function str2Time(str: string) {
  if (str === "") {
    return "0";
  }
  let date = new Date(str);
  return Math.floor(date.valueOf() / 1000).toString();
}
