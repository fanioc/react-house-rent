import React from "react";
import { HouseInfo } from "../API/HouseCRUD";
import { Link } from "react-router-dom";
import { Button, CardColumns, Card, Carousel } from "react-bootstrap";

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
          src="/img/banner1.jpg"
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
            to={"/manage?houserid=" + props.HouseInfo.presell_number}
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


interface HouseListProps {
  list: Array<HouseInfo>;
}
export class HouseBanner extends React.Component {
  render() {
    return (
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/img/banner1.jpg"
            alt="First slide"
            style={{
              width: "auto",
              height: "auto",
              maxWidth: "100%",
              maxHeight: "400px"
            }}
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/img/banner2.jpg"
            alt="Third slide"
            style={{
              width: "auto",
              height: "auto",
              maxWidth: "100%",
              maxHeight: "400px"
            }}
          />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/img/banner3.jpg"
            alt="Third slide"
            style={{
              width: "auto",
              height: "auto",
              maxWidth: "100%",
              maxHeight: "400px"
            }}
          />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
  }
}

function jsonDate2str(str: string): Date {
  return new Date(str);
}
