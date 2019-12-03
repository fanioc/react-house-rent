import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import "./index.css";
import { ContextUser, LoadCheck } from "../context/ContextUser";
import { RouteComponentProps, withRouter, Redirect } from "react-router";

interface AdminIndexState {
  login: boolean;
}
class AdminIndex extends React.Component<
  RouteComponentProps<any>,
  AdminIndexState
> {
  constructor(props: RouteComponentProps) {
    super(props);
    this.state = { login: true };
  }

  static contextType = ContextUser;

  componentDidMount() {
    let logstate = LoadCheck();
    if (logstate === false) {
      this.setState({ login: logstate });
    } else {
      logstate.then(state => {
        this.setState({ login: state });
      });
    }
  }

  render() {
    return (
      <>
        {this.state.login ? (
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
