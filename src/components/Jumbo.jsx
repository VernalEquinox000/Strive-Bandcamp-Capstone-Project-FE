import React from "react";
import { Jumbotron, Container, Row, Col, Card } from "react-bootstrap";
import Bc1 from "../assets/bc1.jpeg";
import Bc2 from "../assets/bc2.jpeg";
import Bc3 from "../assets/bc3.jpeg";
import Bc4 from "../assets/bc4.jpeg";

export default function Jumbo() {
  return (
    <div className="animate__animated animate__fadeInUp">
      <Jumbotron fluid>
        <Row
          className="
          row-cols-1
          "
        >
          <Col
            lg={9}
            md={12}

            /* style={{margin="0",
              borderLeft: "3px solid black",
              borderBottom: "3px solid black",
              borderTop: "3px solid black",
            }} */
          >
            <Card className="bg-dark text-white">
              <Card.Img src={Bc1} alt="Card image" style={{ width: "100%" }} />
              <Card.ImgOverlay>
                <Card.Title>New Music from all over the world!</Card.Title>
                <Card.Text>Psycho-folk stuff for your ears</Card.Text>
                <Card.Text>April 26th,2021</Card.Text>
              </Card.ImgOverlay>
            </Card>
          </Col>
          <Col
            className="d-none d-md-block"
            lg={3}

            /* style={{
              border: "3px solid black",
            }} */
          >
            <Row>
              <Card className="bg-dark text-white">
                <Card.Img src={Bc2} alt="Card image" />
                <Card.ImgOverlay>
                  <Card.Title>Hot Stuff</Card.Title>
                  <Card.Text>How about some death metal?!</Card.Text>
                  <Card.Text>April 24th, 2021</Card.Text>
                </Card.ImgOverlay>
              </Card>
            </Row>
            <Row>
              <Card className="bg-dark text-white">
                <Card.Img src={Bc3} alt="Card image" />
                <Card.ImgOverlay>
                  <Card.Title>Discover!</Card.Title>
                  <Card.Text>The best of the week</Card.Text>
                  <Card.Text>April 22nd, 2021</Card.Text>
                </Card.ImgOverlay>
              </Card>
            </Row>
            <Row>
              <Card className="bg-dark text-white">
                <Card.Img src={Bc4} alt="Card image" />
                <Card.ImgOverlay>
                  <Card.Title>Vinyl sales stonk!</Card.Title>
                  <Card.Text>Highest sales in the past 100 years</Card.Text>
                  <Card.Text>April 20th, 2021</Card.Text>
                </Card.ImgOverlay>
              </Card>
            </Row>
          </Col>
        </Row>
      </Jumbotron>
    </div>
  );
}
