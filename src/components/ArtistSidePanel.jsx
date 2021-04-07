import React from "react";
import { Row, Col, Card, Button, Image } from "react-bootstrap";

export default function ArtistSidePanel({ pic, name, desc, link }) {
  return (
    <div>
      <Row>
        <Col>
          <Card style={{ width: "160px" }}>
            {pic && <Card.Img variant="top" src={pic} />}
            <Card.Body>
              <Card.Title>{name}</Card.Title>
              <h6>{desc}</h6>
              <a href={link}>Official site</a>
              {/* <Button variant="primary">Go somewhere</Button> */}
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
}
