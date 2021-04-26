import React from "react";
import { Jumbotron, Container, Row, Col, Card } from "react-bootstrap";
import Bc1 from "../assets/bc1.jpeg";
import Bc2 from "../assets/bc2.jpeg";
import Bc3 from "../assets/bc3.jpeg";
import Bc4 from "../assets/bc4.jpeg";

export default function Jumbo() {
  return (
    <div>
      <Jumbotron fluid>
        <Row
        /* className="
          my-4
          no-gutters
          text-center
          row-cols-1
          row-cols-md-2
          row-cols-lg-4
          row-cols-xl-6" */
        >
          <Col
            sm={9}
            style={{
              borderLeft: "3px solid black",
              borderBottom: "3px solid black",
              borderTop: "3px solid black",
            }}
          >
            <Card className="bg-dark text-white">
              <Card.Img src={Bc1} alt="Card image" />
              <Card.ImgOverlay>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content.
                </Card.Text>
                <Card.Text>Last updated 3 mins ago</Card.Text>
              </Card.ImgOverlay>
            </Card>
          </Col>
          <Col
            sm={3}
            style={{
              border: "3px solid black",
            }}
          >
            <Row>
              <Card className="bg-dark text-white">
                <Card.Img src={Bc2} alt="Card image" />
                <Card.ImgOverlay>
                  <Card.Title>Card title</Card.Title>
                  <Card.Text>
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content.
                  </Card.Text>
                  <Card.Text>Last updated 3 mins ago</Card.Text>
                </Card.ImgOverlay>
              </Card>
            </Row>
            <Row>
              <Card className="bg-dark text-white">
                <Card.Img src={Bc3} alt="Card image" />
                <Card.ImgOverlay>
                  <Card.Title>Card title</Card.Title>
                  <Card.Text>
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content.
                  </Card.Text>
                  <Card.Text>Last updated 3 mins ago</Card.Text>
                </Card.ImgOverlay>
              </Card>
            </Row>
            <Row>
              <Card className="bg-dark text-white">
                <Card.Img src={Bc4} alt="Card image" />
                <Card.ImgOverlay>
                  <Card.Title>Card title</Card.Title>
                  <Card.Text>
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content.
                  </Card.Text>
                  <Card.Text>Last updated 3 mins ago</Card.Text>
                </Card.ImgOverlay>
              </Card>
            </Row>
          </Col>
        </Row>
      </Jumbotron>
    </div>
  );
}
