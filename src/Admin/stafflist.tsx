import React from "react";
import { Table } from "react-bootstrap";
import { HouseInfo } from "../API/HouseCRUD";
import { StaffInfo } from "../API/StaffCRUD";

interface StaffListProps {
  list: Array<StaffInfo>;
}

export class StaffList extends React.Component<StaffListProps, {}> {
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
            <th>员工ID</th>
            <th>员工用户名</th>
            <th>性别</th>
            <th>电话</th>
            <th>权限</th>
            <th>状态</th>
            <th>加入时间</th>
          </tr>
        </thead>
        <tbody>
          {this.props.list.map(info => {
            return <StaffItem StaffInfo={info} />;
          })}
        </tbody>
      </Table>
    );
  }
}

function StaffItem(props: { StaffInfo: StaffInfo }) {
  return (
    <>
      <tr>
        <td>
          <input type="checkbox" />
        </td>
        <td>{props.StaffInfo.id}</td>
        <td>{props.StaffInfo.name}</td>
        <td>{props.StaffInfo.sex}</td>
        <td>{props.StaffInfo.phone}</td>
        {/* <td>{props.HouseInfo.house_type}</td> */}
        <td>{props.StaffInfo.right}</td>
        <td>{props.StaffInfo.status}</td>
        <td>{jsonDate2str(props.StaffInfo.join_time!).toLocaleString()}</td>
      </tr>
    </>
  );
}

function jsonDate2str(str: string): Date {
  return new Date(str);
}
