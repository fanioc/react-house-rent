import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import "./index.css";
import { ContextUser, GetToken } from "../context/ContextUser";
import { RouteComponentProps, withRouter, Redirect } from "react-router";

interface AdminIndexState {}
class AdminIndex extends React.Component<
  RouteComponentProps<any>,
  AdminIndexState
> {
  constructor(props: RouteComponentProps) {
    super(props);
    this.state = {};
  }

  componentDidMount() {}

  render() {
    return (
      <ContextUser.Consumer>
        {UserInfo =>
          GetToken() === false ? (
            <Redirect to="/admin/login"></Redirect>
          ) : UserInfo.right === undefined ? (
            <Container>
              <Row>
                <Col>首页 未定义?</Col>
              </Row>
            </Container>
          ) : UserInfo.right > 0 ? (
            <Container>
              <Row>
                <Col>
                  首页{UserInfo.right} {UserInfo.name}
                </Col>
              </Row>
            </Container>
          ) : (
            <div>对不起,用户无权限查看</div>
          )
        }
      </ContextUser.Consumer>
    );
  }
}

export default withRouter(AdminIndex);
