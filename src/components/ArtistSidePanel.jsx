import React from "react";
import { Col, Card } from "react-bootstrap";

export default function ArtistSidePanel({ pic, name, desc, link }) {
  return (
    <div>
      <Col>
        <Card style={{ minWidth: "160px" }}>
          {pic && <Card.Img variant="top" src={pic} />}
          <Card.Body>
            <h6>{name}</h6>
            <p style={{ fontSize: "12px" }}>{desc}</p>
            <a href={link}>Official site</a>
          </Card.Body>
        </Card>
      </Col>
    </div>
  );
}
