import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import { HouseList, HouseBanner } from "./houselist";
import { InformationList } from "./information";
import { APIHouseList, HouseInfo } from "../API/HouseCRUD";

interface HomeState {
  list: Array<HouseInfo>;
}

export default class HomeIndex extends React.Component<any, HomeState> {
  constructor(props: any) {
    super(props);
    this.state = { list: [] };
    this.GetList();
  }

  GetList() {
    APIHouseList().then(data => {
      if (data === false) return;
      this.setState({ list: data });
    });
  }

  render() {
    return (
      <Container>
        <Row>
          <Col xl={12} className="mt-3">
            <HouseBanner />
          </Col>
        </Row>
        <Row>
          <Col xl={12} className="mt-3">
            <hr />
            <h1 id="houselist" className="font-weight-bold">
              在售楼盘
            </h1>
          </Col>
        </Row>
        <Row>
          <Col xl={12} className="mt-3">
            <HouseList list={this.state.list} />
          </Col>
        </Row>
        <Row>
          <Col xl={12} className="mt-3">
            <hr />
            <h1 id="information" className="font-weight-bold">
              信息公示
            </h1>
          </Col>
        </Row>
        <Row>
          <Col xl={12}>
            <InformationList />
          </Col>
        </Row>
      </Container>
    );
  }
}
