import React from "react";
import { Container, Col, Row, Button } from "react-bootstrap";
import "./index.css";
import { ContextUser, GetToken } from "../context/ContextUser";
import { RouteComponentProps, withRouter, Redirect } from "react-router";
import { Link } from "react-router-dom";
import { HouseInfo, APIHouseList, APIHouseDel } from "../API/HouseCRUD";
import { HouseList } from "./houselist";
import { UserList } from "./userlist";
import { StaffList } from "./stafflist";
import { UserInfo, APIGetUserList } from "../API/UserCRUD";
import { APIGetStaffList, StaffInfo } from "../API/StaffCRUD";

interface AdminIndexState {
  houselist: Array<HouseInfo>;
  userlist: Array<UserInfo>;
  stafflist: Array<StaffInfo>;
  checkhouse: Set<string>;
}
class AdminIndex extends React.Component<
  RouteComponentProps<any>,
  AdminIndexState
> {
  constructor(props: RouteComponentProps) {
    super(props);
    this.state = {
      houselist: [],
      userlist: [],
      stafflist: [],
      checkhouse: new Set()
    };
    this.GetHouseList();
    this.GetUserList();
    this.GetStaffList();
  }

  handleCheckHouse(event: React.ChangeEvent<HTMLInputElement>) {
    let value = event.currentTarget.value;
    if (event.currentTarget.checked) {
      this.state.checkhouse.add(value);
      this.setState({
        checkhouse: this.state.checkhouse
      });
    } else {
      this.state.checkhouse.delete(value);
      this.setState({
        checkhouse: this.state.checkhouse
      });
    }
    console.log(this.state.checkhouse);
  }

  DelHouses() {
    let tok = GetToken();
    if (tok === false) return;
    APIHouseDel(this.state.checkhouse, tok.name, tok.token).then(d => {
      if (d === true) {
        this.GetHouseList();
        this.setState({
          checkhouse: new Set()
        });
      }
    });
  }

  GetHouseList() {
    APIHouseList().then(data => {
      if (data === false) return;
      this.setState({ houselist: data });
    });
  }

  GetUserList() {
    let tok = GetToken();
    if (tok === false) return;
    APIGetUserList(tok.name, tok.token).then(data => {
      if (data === false) return;
      console.log(data);
      this.setState({ userlist: data });
    });
  }

  GetStaffList() {
    let tok = GetToken();
    if (tok === false) return;
    APIGetStaffList(tok.name, tok.token).then(data => {
      if (data === false) return;
      console.log(data);
      this.setState({ stafflist: data });
    });
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
                <Col>等待跳转...</Col>
              </Row>
            </Container>
          ) : UserInfo.right > 0 ? (
            <Container>
              <Row>
                <Col>
                  {/* //TODO::16 */}
                  <h1 className="font-weight-bold text-center mt-5 mb-5">
                    管理首页 {UserInfo.name}
                  </h1>
                  <h2 className="font-weight-bold">房源管理</h2>
                  <Button as={Link} to="admin/issue">
                    添加房源
                  </Button>{" "}
                  <Button variant="info">修改房源</Button>{" "}
                  <Button>审核房源</Button>{" "}
                  <Button onClick={this.DelHouses.bind(this)} variant="danger">
                    删除房源
                  </Button>
                  <HouseList
                    handleCheckHouse={this.handleCheckHouse.bind(this)}
                    list={this.state.houselist}
                  ></HouseList>
                  <hr />
                  <h2 className="font-weight-bold">用户管理</h2>
                  <Button variant="info">修改用户</Button>{" "}
                  <Button>审核用户</Button>
                  <UserList list={this.state.userlist}></UserList>
                  <hr />
                  <h2 className="font-weight-bold">员工管理</h2>
                  <Button>添加员工</Button>{" "}
                  <Button variant="info">修改员工</Button>{" "}
                  <Button variant="danger">删除员工</Button>
                  <StaffList list={this.state.stafflist}></StaffList>
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
