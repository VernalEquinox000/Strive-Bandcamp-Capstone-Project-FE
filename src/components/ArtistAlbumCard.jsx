import React from "react";
import { Col, Image } from "react-bootstrap";

export default function ArtistAlbumCard(cover) {
  return (
    <div>
      <Col className="mb-2">
        <Image className="img-fluid" src={cover} alt="album cover" />
      </Col>
    </div>
  );
}
