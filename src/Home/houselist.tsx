import React from "react";
import { HouseInfo } from "../API/HouseCRUD";
import { Link } from "react-router-dom";
import { Button, CardColumns, Card, Carousel } from "react-bootstrap";

interface HouseListProps {
  list: Array<HouseInfo>;
}

export class HouseList extends React.Component<HouseListProps, {}> {
  constructor(props: HouseListProps) {
    super(props);
    this.state = {};
    console.log(props);
  }
  render() {
    return (
      <CardColumns>
        {this.props.list.map(info => {
          return <HouseCard HouseInfo={info} />;
        })}
      </CardColumns>
    );
  }
}

function HouseCard(props: { HouseInfo: HouseInfo }) {
  return (
    <>
      <Card>
        <Card.Img
          className="d-block w-100"
          src={props.HouseInfo.pic_view}
          alt="First slide"
          height="200px;"
        />
        <Card.Body>
          <Card.Title className="font-weight-bold">
            {props.HouseInfo.build_name}
            <small>
              &nbsp;&nbsp;&nbsp;预售证号：{props.HouseInfo.presell_number}
            </small>
          </Card.Title>
          <Card.Text>介绍：{props.HouseInfo.introudce}</Card.Text>

          <Button
            as={Link}
            to={"/manage?houseid=" + props.HouseInfo.presell_number}
            variant="primary"
          >
            点击预定
          </Button>
          <Card.Text>
            <small>开发企业：{props.HouseInfo.enterprise}</small>
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">
            选房时间：
            {jsonDate2str(props.HouseInfo.choose_stime!).toLocaleString()}
          </small>
        </Card.Footer>
      </Card>
    </>
  );
}

export class HouseBanner extends React.Component<HouseListProps, {}> {
  constructor(props: HouseListProps) {
    super(props);
    this.state = {};
    console.log(props);
  }
  render() {
    return (
      <Carousel>
        {this.props.list.map((v, k) => {
          if (k > 3) return null;
          return (
            <Carousel.Item>
              <Link to={"/manage?houseid=" + v.presell_number}>
                <img
                  className="d-block w-100"
                  src={v.pic_view}
                  alt="First slide"
                  style={{
                    width: "auto",
                    height: "auto",
                    maxWidth: "100%",
                    maxHeight: "400px"
                  }}
                />
                <Carousel.Caption>
                  <h3>{v.build_name}</h3>
                  <p>{v.introudce}</p>
                </Carousel.Caption>
              </Link>
            </Carousel.Item>
          );
        })}
      </Carousel>
    );
  }
}

function jsonDate2str(str: string): Date {
  return new Date(str);
}
