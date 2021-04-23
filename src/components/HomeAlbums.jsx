import React, { useState, useEffect } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { getAllAlbums } from "../api/albumApi";
export default function HomeAlbums() {
  const [albums, setAlbums] = useState(null);

  const fetchAllAlbums = async () => {
    const response = await getAllAlbums();
    /* if (response.statusText === "OK") { */
    const data = await response.data;
    console.log(data);
    setAlbums(data);
    console.log(albums);
    /* } else {
      alert("something went wrong");
    } */
  };

  useEffect(() => {
    fetchAllAlbums();
  }, []);

  return (
    <div>
      <Container className="d-flex flex-column justify-content-center align-content-center mt-5 mb-5">
        <Row className="row-cols-1 text-left">
          <h3>Latest albums</h3>
        </Row>
        <Row className="row-cols-1 row-cols-sm-6 row-cols-md-6 artist-row">
          {albums &&
            albums
              .map((album) => (
                <Link
                  to={{
                    pathname: `artist/${album.artistId}/album/${album._id}`,
                  }}
                  activeClassName="active"
                >
                  <Col className="col text-center mb-2 mb-lg-0 px-1">
                    <div class="home-album position-relative">
                      <img class="img-fluid rounded" src={album.cover} />
                      <h6>{album.title}</h6>
                    </div>
                  </Col>
                </Link>
              ))
              .slice(0, 6)}
          <Link to="/" activeClassName="active">
            <Col className="col text-center mb-2 mb-lg-0 px-1">
              <div class="home-album position-relative">
                <img
                  class="img-fluid rounded"
                  src="https://f4.bcbits.com/img/a1423921933_10.jpg"
                />
                <h6>Temple Of BBV</h6>
              </div>
            </Col>
          </Link>
          <Link to="/" activeClassName="active">
            <Col className="col text-center mb-2 mb-lg-0 px-1">
              <div class="home-album position-relative">
                <img
                  class="img-fluid rounded"
                  src="https://f4.bcbits.com/img/a3470212387_10.jpg"
                />
                <h6>Faça De Fogo</h6>
              </div>
            </Col>
          </Link>
          <Link to="/" activeClassName="active">
            <Col className="col text-center mb-2 mb-lg-0 px-1">
              <div class="home-album position-relative">
                <img
                  class="img-fluid rounded"
                  src="https://f4.bcbits.com/img/a2424076159_10.jpg"
                />
                <h6>Deafbrick</h6>
              </div>
            </Col>
          </Link>
          <Link to="/" activeClassName="active">
            <Col className="col text-center mb-2 mb-lg-0 px-1">
              <div class="home-album position-relative">
                <img
                  class="img-fluid rounded"
                  src="https://f4.bcbits.com/img/a4100090562_10.jpg"
                />
                <h6>Toilet Circuit ep</h6>
              </div>
            </Col>
          </Link>
        </Row>
      </Container>
    </div>
  );
}
