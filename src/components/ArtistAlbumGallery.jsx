import React from "react";
import { Row, Col, Spinner, Image } from "react-bootstrap";
import ArtistAlbumCard from "./ArtistAlbumCard";

//insert (loading) below
export default function AlbumAlbumGallery({ albums }) {
  return (
    <div>
      <Row className="row-cols-1 row-cols-sm-2 row-cols-lg-4 mb-4 text-center">
        {
          /* loading
          ? [0, 1, 2, 3].map((item) => (
              <Col key={item}>
                <Spinner animation="border" variant="light" />
              </Col>
            ))
          :  */ albums &&
            albums.map((album) => (
              <Image
                className="img-fluid"
                src={album.cover}
                alt="album cover"
              />
            ))
        }
      </Row>
    </div>
  );
}
