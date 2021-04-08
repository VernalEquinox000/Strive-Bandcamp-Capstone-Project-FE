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
        <Row>
          {artists &&
            artists.map((artist) => (
              <Link
                to={{ pathname: `/artist/${artist._id}` }}
                activeClassName="active"
              >
                <Col xl={4} className="position-relative">
                  <Card style={{ width: "12rem" }}>
                    <Card.Img variant="top" src={artist.profilePic} />
                    <Card.Body>
                      <Card.Title>{artist.artistName}</Card.Title>
                      <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                  </Card>
                </Col>
              </Link>
            ))}
        </Row>
      </Container>
    </div>
  );
}
