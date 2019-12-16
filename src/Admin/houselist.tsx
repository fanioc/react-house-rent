import React from "react";
import { Table } from "react-bootstrap";
import { HouseInfo } from "../API/HouseCRUD";

interface HouseListProps {
  list: Array<HouseInfo>;
}

export class HouseList extends React.Component<HouseListProps, {}> {
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
            <th style={{ width: "20px", whiteSpace: "nowrap" }}>楼盘号</th>
            <th style={{ paddingRight: "0px", whiteSpace: "nowrap" }}>
              预售证号
            </th>
            <th style={{ whiteSpace: "nowrap" }}>楼盘名</th>
            <th style={{ whiteSpace: "nowrap" }}>开发企业</th>
            {/* <th>户型</th> */}
            <th style={{ paddingRight: "150px", whiteSpace: "nowrap" }}>
              简介
            </th>
            <th style={{ whiteSpace: "nowrap" }}>审核状态</th>
            <th>意向登记时间开始</th>
            <th>意向登记时间结束</th>
            <th>选楼开始日期</th>
            <th>选择结束日期</th>
            <th>现场接受资料时间开始</th>
            <th>现场接受资料时间结束</th>
            <th  style={{ paddingRight: "80px", whiteSpace: "nowrap" }}>现场接受资料地点</th>
            <th>摇号日期</th>
          </tr>
        </thead>
        <tbody>
          {this.props.list.map(info => {
            return <HouseItem HouseInfo={info} />;
          })}
        </tbody>
      </Table>
    );
  }
}

function HouseItem(props: { HouseInfo: HouseInfo }) {
  return (
    <>
      <tr>
        <td>
          <input type="checkbox" />
        </td>
        <td>{props.HouseInfo.build_id}</td>
        <td>{props.HouseInfo.presell_number}</td>
        <td>{props.HouseInfo.build_name}</td>
        <td>{props.HouseInfo.enterprise}</td>
        {/* <td>{props.HouseInfo.house_type}</td> */}
        <td>{props.HouseInfo.introudce}</td>
        <td>已审核</td>
        <td>{jsonDate2str(props.HouseInfo.intent_stime!).toLocaleString()}</td>
        <td>
          {jsonDate2str(props.HouseInfo.intent_endtime!).toLocaleString()}
        </td>
        <td>{jsonDate2str(props.HouseInfo.choose_stime!).toLocaleString()}</td>
        <td>
          {jsonDate2str(props.HouseInfo.choose_endtime!).toLocaleString()}
        </td>
        <td>
          {jsonDate2str(props.HouseInfo.reception_stime!).toLocaleString()}
        </td>
        <td>
          {jsonDate2str(props.HouseInfo.reception_endtime!).toLocaleString()}
        </td>
        <td>{props.HouseInfo.reception_site}</td>
        <td>{jsonDate2str(props.HouseInfo.lottery_date!).toLocaleString()}</td>
      </tr>
    </>
  );
}

function jsonDate2str(str: string): Date {
  return new Date(str);
}
