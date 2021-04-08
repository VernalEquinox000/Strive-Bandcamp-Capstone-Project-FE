import React, { useState } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { getAllUsers } from "../api/userApi";
export default function Selling() {
  /* const [loading, setLoading] = useState(false);
  const [albumId, setAlbumId] = useState("");
  const [albumTitle, setAlbumTitle] = useState("");
  const [albumCover, setAlbumCover] = useState("https://via.placeholder.com/100x100.png"); */
  const [artists, setArtists] = useState([]);

  const fetchUsers = async () => {
    const response = await getAllUsers();
    /* if (response.statusText === "OK") { */
    const data = await response.data;
    console.log(data);
    console.log(data.role);
    setArtists(data);
    console.log(artists);
    /* } else {
      alert("something went wrong");
    } */
  };

  return (
    <div>
      <Container className="d-flex flex-column justify-content-center align-content-center">
        <Row>
          <Link
            to={`/artist/606b7e9a1c2e4735a3988a1d`}
            activeClassName="active"
          >
            <Col xl={4} className="position-relative">
              <Card style={{ width: "12rem" }}>
                <Card.Img
                  variant="top"
                  src="https://res.cloudinary.com/vernalequinox000/image/upload/v1617691012/profile/s626gewlanehxxhxgkb1.jpg"
                />
                <Card.Body>
                  <Card.Title>The Telescopes</Card.Title>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
            </Col>
          </Link>

          <Link
            to={`/artist/6063a38923feb85e4d745853`}
            activeClassName="active"
          >
            <Col xl={4} className="position-relative">
              <Card style={{ width: "12rem" }}>
                <Card.Img
                  variant="top"
                  src="https://res.cloudinary.com/vernalequinox000/image/upload/v1617743258/profile/tjjvnygk2twwzhgntesf.jpg"
                />
                <Card.Body>
                  <Card.Title>Acid Mothers Temple</Card.Title>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
            </Col>
          </Link>
          <Link>
            <Col xl={4} className="position-relative">
              <Card style={{ width: "12rem" }}>
                <Card.Img
                  variant="top"
                  src="https://via.placeholder.com/100x100.png"
                />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
            </Col>
          </Link>
          <Link>
            <Col xl={4} className="position-relative">
              <Card style={{ width: "12rem" }}>
                <Card.Img
                  variant="top"
                  src="https://via.placeholder.com/100x100.png"
                />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
            </Col>
          </Link>
          <Link>
            <Col xl={4} className="position-relative">
              <Card style={{ width: "12rem" }}>
                <Card.Img
                  variant="top"
                  src="https://via.placeholder.com/100x100.png"
                />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
            </Col>
          </Link>
        </Row>
      </Container>
    </div>
  );
}
