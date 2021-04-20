import React, { useState, useEffect } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import ArtistBar from "./ArtistBar";
import { getUserById } from "../api/userApi";
import { useParams, Link } from "react-router-dom";
import ArtistSidePanel from "./ArtistSidePanel";
export default function ArtistPage() {
  const matchParams = useParams();
  const [artist, setArtist] = useState(null);
  const [headerPic, setHeaderPic] = useState("");

  const fetchUser = async (id) => {
    const response = await getUserById(matchParams.id);
    /* if (response.statusText === "OK") { */
    const data = await response.data;
    console.log(data);
    setArtist(data);
    console.log(artist);
    /* } else {
      alert("something went wrong");
    } */
  };

  useEffect(() => {
    fetchUser(matchParams.id);
  }, []);

  //className = "row-cols-1 row-cols-sm-2 row-cols-lg-4 mb-4 text-left";
  return (
    artist && (
      <>
        <ArtistBar key={artist._id} header={artist.headerPic} />
        <Container className="d-flex flex-column justify-content-center align-content-center">
          <Row className="row-cols-1 row-cols-sm-6 row-cols-md-6 artist-row">
            {artist.albums.map((album) => (
              <Col className="col text-center mb-2 mb-lg-0 px-1">
                <Link
                  to={{
                    pathname: `/artist/${artist._id}/album/${album._id}`,
                  }}
                >
                  <div class="home-artist position-relative" key={album._id}>
                    <img class="img-fluid rounded" src={album.cover} />
                    <h6>{album.title}</h6>
                  </div>
                </Link>
              </Col>
            ))}
            <Col className="col text-center mb-2 mb-lg-0 px-1">
              <div class="home-artist position-relative">
                <img
                  class="img-fluid rounded"
                  src="https://via.placeholder.com/150"
                />
                <h6>prova</h6>
              </div>
            </Col>
            <Col className="col text-center mb-2 mb-lg-0 px-1">
              <div class="home-artist position-relative">
                <img
                  class="img-fluid rounded"
                  src="https://via.placeholder.com/150"
                />
                <h6>prova</h6>
              </div>
            </Col>
            <Col className="col text-center mb-2 mb-lg-0 px-1">
              <div class="home-artist position-relative">
                <img
                  class="img-fluid rounded"
                  src="https://via.placeholder.com/150"
                />
                <h6>prova</h6>
              </div>
            </Col>
            <Col className="col text-center mb-2 mb-lg-0 px-1">
              <div class="home-artist position-relative">
                <img
                  class="img-fluid rounded"
                  src="https://via.placeholder.com/150"
                />
                <h6>prova</h6>
              </div>
            </Col>

            <Col className="col text-center mb-2 mb-lg-0 px-1">
              <ArtistSidePanel
                pic={artist.profilePic}
                name={artist.artistName}
                desc={artist.description}
                link={artist.url[0]}
              />
            </Col>
          </Row>
        </Container>
      </>
    )
  );
}
