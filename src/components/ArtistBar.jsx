import React from "react";
import { Col } from "react-bootstrap";

export default function ArtistBar({ header }) {
  return (
    <div>
      <Col className="justify-content-center ">
        <img
          style={{
            /* minWidth: "458px",
            maxWidth: "915px",
            minHeight: "90px",
            maxHeight: "180px", */
            width: "100% ",
            objectFit: "contain",
          }}
          src={header}
        />
      </Col>
    </div>
  );
}
