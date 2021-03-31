import React, { useState } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";

export default function Selling() {
  //const [loading, setLoading] = useState(false);
  const [albumId, setAlbumId] = useState("");
  const [albumTitle, setAlbumTitle] = useState("");
  const [albumCover, setAlbumCover] = useState(
    "https://via.placeholder.com/100x100.png"
  );
  return (
    <div>
      <Container fluid>
        <Row>
          <Col>
            <Card style={{ width: "12rem" }}>
              <Card.Img
                variant="top"
                src="https://via.placeholder.com/100x100.png"
              />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{ width: "12rem" }}>
              <Card.Img
                variant="top"
                src="https://via.placeholder.com/100x100.png"
              />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{ width: "12rem" }}>
              <Card.Img
                variant="top"
                src="https://via.placeholder.com/100x100.png"
              />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{ width: "12rem" }}>
              <Card.Img
                variant="top"
                src="https://via.placeholder.com/100x100.png"
              />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{ width: "12rem" }}>
              <Card.Img
                variant="top"
                src="https://via.placeholder.com/100x100.png"
              />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
