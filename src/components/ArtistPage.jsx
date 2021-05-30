import React, { useState, useEffect } from "react";
import { Container, Row, Col, Spinner, Alert } from "react-bootstrap";
import ArtistBar from "./ArtistBar";
import { getUserById } from "../api/userApi";
import { useParams, Link } from "react-router-dom";
import ArtistSidePanel from "./ArtistSidePanel";
import dateConverter from "../helpers/functions";

export default function ArtistPage() {
  const matchParams = useParams();
  const [artist, setArtist] = useState(null);
  const [loader, setLoader] = useState(true);
  const [error, setError] = useState(null);

  const fetchUser = async (id) => {
    try {
      setLoader(true);
      const response = await getUserById(matchParams.id);
      if (response.statusText === "OK") {
        const data = await response.data;
        console.log(data);
        setArtist(data);
        setLoader(false);
      } else {
        alert("something went wrong");
      }
    } catch (error) {
      setError(error);
      setLoader(false);
      setTimeout(() => {
        "Requested timeout";
      }, 3000);
    }
  };

  useEffect(
    () => {
      fetchUser(matchParams.id);
    },
    [matchParams.id],
    artist
  );

  //className = "row-cols-1 row-cols-sm-2 row-cols-lg-4 mb-4 text-left";
  return (
    <Container
      className="d-flex flex-column justify-content-center align-content-center"
      style={{
        marginRight: "auto",
        marginLeft: "auto",
        flexGrow: "1",
      }}
    >
      {loader ? (
        <Row className=" row-cols-1">
          <Col sm={{ span: 10, offset: 1 }}>
            <Spinner animation="grow" variant="dark" />
          </Col>
        </Row>
      ) : (
        <>
          {error && <Alert variant="danger">{error}</Alert>}
          {artist && (
            <Row className=" row-cols-1">
              <ArtistBar key={artist._id} header={artist.headerPic} />
            </Row>
          )}
        </>
      )}

      <Row
        className="row-cols-1 row-cols-sm-2 row-cols-md-5 row-cols-lg-5  artist-row mt-5"
        style={{ margin: "25px" }}
      >
        {loader ? (
          [0, 1, 2, 3].map((item) => (
            <Col className="col text-center mb-2 mb-lg-0 px-1" key={item}>
              <Spinner animation="grow" variant="dark" />
            </Col>
          ))
        ) : (
          <>
            {error && <Alert variant="danger">{error}</Alert>}
            {artist &&
              artist.albums.map((album) => (
                <Col className="col text-center mb-2">
                  <Link
                    to={{
                      pathname: `/artist/${artist._id}/album/${album._id}`,
                    }}
                    artist={artist}
                  >
                    <div class=" position-relative" key={album._id}>
                      <img
                        class="img-fluid rounded"
                        src={album.cover}
                        style={{ objectFit: "contain" }}
                      />
                      <h6 className="artist-album-title">{album.title}</h6>
                    </div>
                  </Link>
                </Col>
              ))}
          </>
        )}

        <Col className="col text-center mb-2 mb-lg-0 px-1">
          {loader ? (
            <Row>
              <Col>
                <Spinner animation="grow" variant="dark" />
              </Col>
            </Row>
          ) : (
            <>
              {error && <Alert variant="danger">{error}</Alert>}
              {artist && (
                <Col
                  xs={{ span: 2, order: 1 }}
                  md={{ span: 3, order: 12 }}
                  lg={{ span: 2, order: 12 }}
                  style={{ display: "flex" }}
                >
                  <ArtistSidePanel
                    pic={artist.profilePic}
                    name={artist.artistName}
                    desc={artist.description}
                    link={artist.url[0]}
                    style={{ alignSelf: "flex-end" }}
                  />
                </Col>
              )}
            </>
          )}
        </Col>
      </Row>
    </Container>
  );
}
