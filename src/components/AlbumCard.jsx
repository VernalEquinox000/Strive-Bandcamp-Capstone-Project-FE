import React from "react";
import { Button, Card, Col } from "react-bootstrap";

export default function AlbumCard() {
  /* const [loading, setLoading] = useState(false);
    const [albumId, setAlbumId] = useState("");
    const [albumTitle, setAlbumTitle] = useState("");
    const [albumCover, setAlbumCover] = useState(
        "https://via.placeholder.com/100x100.png"
    ); */
  return (
    <div>
      <Col>
        <Card id={albumId} style={{ width: "12rem" }}>
          <Card.Img variant="top" src={cover} />
          <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Button variant="primary">{audioFile}</Button>
          </Card.Body>
        </Card>
      </Col>
    </div>
  );
}
