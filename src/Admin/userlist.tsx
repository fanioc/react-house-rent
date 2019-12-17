import React from "react";
import { Table } from "react-bootstrap";
import { UserInfo } from "../API/UserCRUD";

interface UserListProps {
  list: Array<UserInfo>;
}

export class UserList extends React.Component<UserListProps, {}> {
  constructor(props: any) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Table striped bordered hover className=" overflow-hidden" responsive>
        <thead>
          <tr>
            <th>
              <input type="checkbox" />
              全选
            </th>
            <th>用户</th>
            <th>性别</th>
            <th>电话</th>
            <th>证件类型</th>
            <th>证件号码</th>
            <th>是否购房成功</th>
            <th>登记时间</th>
            <th>意向房源类型</th>
            <th>意向房号</th>
            <th>审核状态</th>
          </tr>
        </thead>
        <tbody>
          {this.props.list.map(info => {
            return <UserItem UserInfo={info} />;
          })}
        </tbody>
      </Table>
    );
  }
}

function UserItem(props: { UserInfo: UserInfo }) {
  return (
    <>
      <tr>
        <td>
          <input type="checkbox" />
        </td>
        <td>{props.UserInfo.name}</td>
        <td>{props.UserInfo.sex}</td>
        <td>{props.UserInfo.phone}</td>
        <td>{props.UserInfo.identity_type}</td>
        <td>{props.UserInfo.identity_num}</td>
        <td>{props.UserInfo.status}</td>
        <td>{jsonDate2str(props.UserInfo.register_time!).toLocaleString()}</td>
        <td>{props.UserInfo.house_type}</td>
        <td>{props.UserInfo.purpose_house}</td>
        <td>{props.UserInfo.check_status}</td>
      </tr>
    </>
  );
}

function jsonDate2str(str: string): Date {
  return new Date(str);
}
