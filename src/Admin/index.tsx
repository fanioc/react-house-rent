import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import "./index.css";
import { ContextUser } from "../context/ContextUser";
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
  static contextType = ContextUser;

  componentDidMount() {}

  render() {
    return (
      <>
        {this.context.right >= 0 ? (
          <Container>
            <Row>
              <Col>首页{this.context.name}</Col>
            </Row>
          </Container>
        ) : (
          <Redirect to="/admin/login"></Redirect>
        )}
      </>
    );
  }
}

export default withRouter(AdminIndex);
