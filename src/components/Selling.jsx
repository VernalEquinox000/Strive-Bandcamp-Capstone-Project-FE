import React, { useState, useEffect } from "react";
import { Container, Row, Col, Alert, Spinner } from "react-bootstrap";
import { Link } from "react-router-dom";
import { getAllUsers } from "../api/userApi";

export default function Selling() {
  const [artists, setArtists] = useState(null);
  const [loaderSelling, setLoaderSelling] = useState(true);
  const [errorSelling, setErrorSelling] = useState(null);

  const fetchUsers = async () => {
    try {
      setLoaderSelling(true);
      const response = await getAllUsers();
      //if (response.statusText === "OK") {
      const data = await response.data;
      console.log(data);
      const filterArtists = data.filter((d) => d.role === "artist");
      setArtists(filterArtists);
      setLoaderSelling(false);
      /* } else {
        alert("something went wrong");
      } */
    } catch (error) {
      setErrorSelling(error);
      setLoaderSelling(false);
      setTimeout(() => {
        "Requested timeout";
      }, 3000);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div>
      <Container className="d-flex flex-column justify-content-center align-content-center mt-5">
        <Row className="row-cols-1 text-left">
          <h3>Featured Artists</h3>
        </Row>
        <Row className="row-cols-1 row-cols-sm-6 row-cols-md-6 artist-row">
          {loaderSelling ? (
            [0, 1, 2, 3, 4, 5].map((item) => (
              <Col className="col text-center mb-2 mb-lg-0 px-1" key={item}>
                <Spinner animation="grow" variant="dark" />
              </Col>
            ))
          ) : (
            <>
              {errorSelling && <Alert variant="danger">{errorSelling}</Alert>}
              {artists &&
                artists
                  .map((artist) => (
                    <Link
                      to={{ pathname: `/artist/${artist._id}` }}
                      activeClassName="active"
                    >
                      <Col
                        className="col text-center mb-2 mb-lg-0 px-1"
                        key={artist._id}
                      >
                        <div class="home-artist position-relative">
                          <img
                            class="img-fluid rounded"
                            src={artist.profilePic}
                          />
                          <h6>{artist.artistName}</h6>
                        </div>
                      </Col>
                    </Link>
                  ))
                  .slice(0, 6)}{" "}
            </>
          )}
        </Row>
      </Container>
    </div>
  );
}
