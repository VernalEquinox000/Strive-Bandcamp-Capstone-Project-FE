import React from "react";
import { Col } from "react-bootstrap";

export default function ArtistBar({ header }) {
  return (
    <div>
      <Col className="justify-content-center offset-none offset-sm-1 ">
        <img
          style={{
            /* minWidth: "458px",
            maxWidth: "915px",
            minHeight: "90px",
            maxHeight: "180px", */
            width: "80%",
            objectFit: "contain",
          }}
          src={header}
        />
      </Col>
    </div>
  );
}
