import React from "react";
import { Link } from "react-router-dom";
import { ContextUser } from "../context/ContextUser";
import {
  Nav,
  Navbar,
  NavDropdown,
  Form,
  Button,
  Container
} from "react-bootstrap";

interface HeaderState {
  userRight: number;
}

export default class Header extends React.Component<any, HeaderState> {
  constructor(props: any) {
    super(props);
    this.state = { userRight: 0 };
  }

  static contextType = ContextUser;

  render() {
    return (
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand as={Link} to="/">
            你永远也买不到的楼盘
          </Navbar.Brand>
          <Nav className="mr-auto">
            <Link className="nav-link" to="/">
              首页
            </Link>
            <Link className="nav-link" to="/house">
              房源列表
            </Link>
            <Link className="nav-link" to="/information">
              信息公示
            </Link>
            {this.context.right === undefined ? (
              <Link className="nav-link" to="/register">
                购房登记
              </Link>
            ) : this.context.right > 0 ? (
              <AdminAction />
            ) : (
              <UserAction />
            )}
          </Nav>

          <Form inline>
            <Form.Control
              size="sm"
              type="text"
              placeholder="搜索楼盘"
              className="mr-sm-2"
            />
            <Button size="sm" variant="secondary">
              搜索
            </Button>
          </Form>
        </Container>
      </Navbar>
    );
  }
}

function UserAction() {
  return (
    <NavDropdown title="用户操作" id="basic-nav-dropdown">
      <NavDropdown.Item href="#action/3.1">购房登记</NavDropdown.Item>
      <NavDropdown.Item href="#action/3.2">信息管理</NavDropdown.Item>
      <NavDropdown.Divider />
      <NavDropdown.Item href="#action/3.4">摇号</NavDropdown.Item>
    </NavDropdown>
  );
}
function AdminAction() {
  return (
    <NavDropdown title="管理员操作" id="basic-nav-dropdown">
      <NavDropdown.Item href="#action/3.2">审核房源</NavDropdown.Item>
      <NavDropdown.Item href="#action/3.3">审核用户</NavDropdown.Item>
      <NavDropdown.Divider />
      <NavDropdown.Item href="#action/3.1">发布房源</NavDropdown.Item>
      <NavDropdown.Item href="#action/3.4">摇号分组</NavDropdown.Item>
    </NavDropdown>
  );
}
