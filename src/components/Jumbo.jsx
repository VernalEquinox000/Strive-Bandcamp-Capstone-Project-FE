import React from "react";
import { Jumbotron, Container, Row, Col, Card } from "react-bootstrap";

export default function Jumbo() {
  return (
    <div>
      <Jumbotron fluid>
        <Container>
          <Row>
            <Col sm={9}>
              <Card className="bg-dark text-white">
                <Card.Img
                  src="https://via.placeholder.com/700x485.png"
                  alt="Card image"
                />
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
            <Col sm={3}>
              <Row>
                <Card className="bg-dark text-white">
                  <Card.Img
                    src="https://via.placeholder.com/300x200.png"
                    alt="Card image"
                  />
                  <Card.ImgOverlay>
                    <Card.Title>Card title</Card.Title>
                    <Card.Text>
                      This is a wider card with supporting text below as a
                      natural lead-in to additional content.
                    </Card.Text>
                    <Card.Text>Last updated 3 mins ago</Card.Text>
                  </Card.ImgOverlay>
                </Card>
              </Row>
              <Row>
                <Card className="bg-dark text-white">
                  <Card.Img
                    src="https://via.placeholder.com/300x200.png"
                    alt="Card image"
                  />
                  <Card.ImgOverlay>
                    <Card.Title>Card title</Card.Title>
                    <Card.Text>
                      This is a wider card with supporting text below as a
                      natural lead-in to additional content.
                    </Card.Text>
                    <Card.Text>Last updated 3 mins ago</Card.Text>
                  </Card.ImgOverlay>
                </Card>
              </Row>
              <Row>
                <Card className="bg-dark text-white">
                  <Card.Img
                    src="https://via.placeholder.com/300x200.png"
                    alt="Card image"
                  />
                  <Card.ImgOverlay>
                    <Card.Title>Card title</Card.Title>
                    <Card.Text>
                      This is a wider card with supporting text below as a
                      natural lead-in to additional content.
                    </Card.Text>
                    <Card.Text>Last updated 3 mins ago</Card.Text>
                  </Card.ImgOverlay>
                </Card>
              </Row>
            </Col>
          </Row>
        </Container>
      </Jumbotron>
    </div>
  );
}
