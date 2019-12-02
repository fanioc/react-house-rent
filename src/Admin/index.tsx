import React from "react";
import Lgoin from "./login";
import { Container, Col, Row } from "react-bootstrap";
import "./index.css";
import { ContextUser, LoadCheck } from "../context/ContextUser";
import { RouteComponentProps, withRouter } from "react-router";

interface AdminIndexState {
  login: boolean;
}
class AdminIndex extends React.Component<
  RouteComponentProps<any>,
  AdminIndexState
> {
  constructor(props: RouteComponentProps) {
    super(props);
    this.state = { login: false };
  }

  static contextType = ContextUser;

  handleLogin(state: boolean) {
    this.setState({ login: state });
  }

  UNSAFE_componentWillMount() {
    let logstate = LoadCheck();
    if (logstate === false) {
      this.handleLogin(logstate);
    } else {
      logstate.then(state => {
        this.handleLogin(state);
      });
    }
  }

  render() {
    return (
      <>
        {this.state.login ? (
          <Container>
            <Row>
              <Col>首页{this.context.token} </Col>
            </Row>
          </Container>
        ) : (
          <Container style={{ height: "100vh", paddingTop: "30vh" }}>
            <Row className="pb-5">
              <Col className="flex flex-center" lg={{ span: 4, offset: 4 }}>
                请登入
              </Col>
            </Row>
            <Row>
              <Col md={{ span: 4, offset: 4 }}>
                <Lgoin
                  handleLogin={this.handleLogin.bind(this)}
                  history={this.props.history}
                />
              </Col>
            </Row>
          </Container>
        )}
      </>
    );
  }
}

export default withRouter(AdminIndex);
