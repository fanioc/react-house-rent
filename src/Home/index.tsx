import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export default class HomeIndex extends React.Component {
  render() {
    return (
      <div>
        <div>房源信息展示首页</div>
        <Link to="/admin">
          <Button>房源信息展示首页</Button>
        </Link>
      </div>
    );
  }
}
