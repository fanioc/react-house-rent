import React from "react";
import { Button, Row, Col, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
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
          <Col xl={12}>
            <HouseBanner />
          </Col>
        </Row>
        <Row>
          <Col xl={12}>
            <HouseList list={this.state.list} />
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
