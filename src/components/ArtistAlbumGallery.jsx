import React from "react";
import { Row, Col, Spinner, Image } from "react-bootstrap";
import ArtistAlbumCard from "./ArtistAlbumCard";
import { Link } from "react-router-dom";

//insert (loading) below
export default function AlbumAlbumGallery({ artist }) {
  const albums = artist.albums;
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
            <Link to={{ pathname: `/artist/${artist._id}/album/${album._id}` }}>
              <div class="artist-album position-relative" key={album._id}>
                <img class="img-fluid rounded" src={album.cover} />
                <h6>{album.title}</h6>
              </div>
            </Link>
          ))
      }
    </div>
  );
}
