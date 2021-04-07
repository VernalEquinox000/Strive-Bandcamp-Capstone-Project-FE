import React from "react";
import { Row, Col, Spinner, Image } from "react-bootstrap";
import ArtistAlbumCard from "./ArtistAlbumCard";
import { Link } from "react-router-dom";

//insert (loading) below
export default function AlbumAlbumGallery({ albums }) {
  return (
    <div>
      {/* <Row className="row-cols-1 row-cols-sm-2 row-cols-lg-4 mb-4 text-center"> */}
      {
        /* loading
          ? [0, 1, 2, 3].map((item) => (
              <Col key={item}>
                <Spinner animation="border" variant="light" />
              </Col>
            ))
          :  */ albums &&
          albums.map((album) => (
            <>
              <Link to="/artist/606b7e9a1c2e4735a3988a1d/album/606b829a1c2e4735a3988a1e">
                <Image
                  style={{ width: "200px" }}
                  key={album._id}
                  className="img-fluid"
                  src={album.cover}
                  alt="album cover"
                  /* onClick={history.push("/album/" + album._id)} */
                />
                <p>
                  <strong>{album.title}</strong>
                </p>
              </Link>
            </>
          ))
      }
      {/* </Row> */}
    </div>
  );
}
