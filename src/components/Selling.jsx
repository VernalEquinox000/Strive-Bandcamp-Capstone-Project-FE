import React, { useState, useEffect } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { getAllUsers } from "../api/userApi";
export default function Selling() {
  /* const [loading, setLoading] = useState(false);
  const [albumId, setAlbumId] = useState("");
  const [albumTitle, setAlbumTitle] = useState("");
  const [albumCover, setAlbumCover] = useState("https://via.placeholder.com/100x100.png"); */
  const [artists, setArtists] = useState(null);

  const fetchUsers = async () => {
    const response = await getAllUsers();
    /* if (response.statusText === "OK") { */
    const data = await response.data;
    console.log(data);
    const filterArtists = data.filter((d) => d.role === "artist");
    setArtists(filterArtists);
    console.log(artists);
    /* } else {
      alert("something went wrong");
    } */
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div>
      <Container className="d-flex flex-column justify-content-center align-content-center">
        <Row className="row-cols-1 row-cols-sm-6 row-cols-md-6 artist-row">
          {artists &&
            artists
              .map((artist) => (
                <Link
                  to={{ pathname: `/artist/${artist._id}` }}
                  activeClassName="active"
                >
                  <Col className="col text-center mb-2 mb-lg-0 px-1">
                    {/* <Card style={{ width: "12rem" }}>
                    <Card.Img variant="top" src={artist.profilePic} />
                    <Card.Body>
                      <Card.Title>{artist.artistName}</Card.Title>
                      <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                  </Card> */}
                    <div class="home-artist position-relative">
                      <img class="img-fluid rounded" src={artist.profilePic} />
                      <h6>{artist.artistName}</h6>
                    </div>
                  </Col>
                </Link>
              ))
              .slice(0, 6)}
        </Row>
      </Container>
    </div>
  );
}
