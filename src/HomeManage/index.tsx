import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import { ContextUser, GetToken } from "../context/ContextUser";
import { Redirect } from "react-router";
export default class InformationList extends React.Component {
  render() {
    return (
      <ContextUser.Consumer>
        {UserInfo =>
          GetToken() === false ? (
            <Redirect to="/manage/login"></Redirect>
          ) : UserInfo.right === undefined ? (
            <Container>
              <Row>
                <Col>首页 未定义?</Col>
              </Row>
            </Container>
          ) : UserInfo.right === 0 ? (
            <Container>
              <Row>
                <Col>
                  首页{UserInfo.right} {UserInfo.name}
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
