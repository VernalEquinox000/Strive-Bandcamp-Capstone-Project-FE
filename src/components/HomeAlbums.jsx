import React, { useState, useEffect } from "react";
import { Container, Row, Col, Alert, Spinner } from "react-bootstrap";
import { Link } from "react-router-dom";
import { getAllAlbums } from "../api/albumApi";
import { dateConverter } from "../helpers/helpers";

export default function HomeAlbums() {
  const [albums, setAlbums] = useState(null);
  const [loaderAlbums, setLoaderAlbums] = useState(true);
  const [errorAlbums, setErrorAlbums] = useState(null);

  const fetchAllAlbums = async () => {
    try {
      setLoaderAlbums(true);
      const response = await getAllAlbums();
      // if (response.statusText === "OK") {
      const data = await response.data;
      console.log(data);
      setAlbums(data);
      setLoaderAlbums(false);
      /* } else {
        alert("something went wrong");
      } */
    } catch (error) {
      setErrorAlbums(error);
      setLoaderAlbums(false);
      setTimeout(() => {
        "Requested timeout";
      }, 3000);
    }
  };

  useEffect(() => {
    fetchAllAlbums();
  }, []);

  return (
    <div className="animate__animated animate__fadeInUp">
      <Container className="d-flex flex-column justify-content-center align-content-center mt-5 mb-5">
        <Row className="text-md-left text-sm-center">
          <h3>Latest albums</h3>
        </Row>
        <Row className="row-cols-1 row-cols-sm-2 row-cols-md-4 row-cols-lg-6 artist-row">
          {loaderAlbums ? (
            [0, 1, 2, 3, 4, 5].map((item) => (
              <Col className="col text-center mb-2 mb-lg-0 px-1" key={item}>
                <Spinner animation="grow" variant="dark" />
              </Col>
            ))
          ) : (
            <>
              {errorAlbums && <Alert variant="danger">{errorAlbums}</Alert>}

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
                        <div
                          class="home-album position-relative animate__fadeInDown"
                          key={album._id}
                        >
                          <img
                            class="img-fluid rounded"
                            src={album.cover}
                            style={{ height: "100%", width: "100%" }}
                          />
                          <p className="home-album-title">
                            <strong>{album.title}</strong>
                            <br />
                            {dateConverter(album.releaseDate)}
                          </p>
                        </div>
                      </Col>
                    </Link>
                  ))
                  .slice(0, 6)}
            </>
          )}
        </Row>
      </Container>
    </div>
  );
}
