import React from "react";
import { Row, Col, Card, Button, Image } from "react-bootstrap";

export default function ArtistSidePanel({ pic, name, desc }) {
  return (
    <div>
      <Row>
        <Col>
          <Card style={{ width: "100px" }}>
            {pic && <Card.Img variant="top" src={pic} />}
            <Card.Body>
              <Card.Title>{name}</Card.Title>
              <Card.Text>{desc}</Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
}
