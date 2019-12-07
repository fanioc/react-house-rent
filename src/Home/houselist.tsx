import React from "react";
import { HouseInfo } from "../API/HouseCRUD";
import { Table } from "react-bootstrap";

interface HouseListProps {
  list: Array<HouseInfo>;
}

export class HouseList extends React.Component<HouseListProps, {}> {
  constructor(props: any) {
    super(props);
  }
  render() {
    return (
      <div>
        <Table responsive="sm">
          <thead>
            <tr>
              <th>楼盘编号</th>
              <th>楼盘名</th>
              <th>预售编号</th>
              <th>开发企业</th>
              <th>楼盘介绍</th>
              <th>热线电话</th>
              <th>选房时间</th>
              <th>资料接受地点</th>
            </tr>
          </thead>
          <tbody>
            {this.props.list.map(value => {
              return (
                <tr key={value.build_id}>
                  <td>{value.build_id}</td>
                  <td>{value.build_name}</td>
                  <td>{value.presell_number}</td>
                  <td>{value.enterprise}</td>
                  <td>{value.introudce}</td>
                  <td>{value.hotline}</td>
                  <td>
                    {jsonDate2str(value.choose_stime!).toLocaleDateString()}
                  </td>
                  <td>{value.reception_site}</td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </div>
    );
  }
}

export class HouseBanner extends React.Component {
  render() {
    return <div>房源发布banner图</div>;
  }
}

function jsonDate2str(str: string): Date {
  return new Date(str);
}
