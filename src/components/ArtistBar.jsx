import React from "react";
import { Container, Row, Col } from "react-bootstrap";

export default function ArtistBar({ header }) {
  return (
    <div>
      <Container
        className="mb-5"
        //style={{ width: "915px", border: "2px solid black" }}
      >
        <Row style={{ width: "915px" }}>
          <Col sm={12}>
            <img
              style={{ width: "915px", height: "180px", objectFit: "contain" }}
              src={header}
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
}
