import React from "react";
import { Container, Row, Col } from "react-bootstrap";

export default function ArtistBar({ header }) {
  return (
    <div>
      <Container className="mb-5">
        <Row>
          <Col sm={12}>
            <img style={{ width: "915px", height: "180px" }} src={header} />
          </Col>
        </Row>
      </Container>
    </div>
  );
}
