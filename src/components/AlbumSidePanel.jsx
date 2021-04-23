import React from "react";
import { Row, Col, Card } from "react-bootstrap";

export default function AlbumSidePanel({ pic, name, desc, link, albums }) {
  return (
    <div>
      <Row>
        <Col>
          <Card style={{ width: "160px" }}>
            {pic && <Card.Img variant="top" src={pic} />}
            <Card.Body>
              <h6>{name}</h6>
              <p>{desc}</p>
              <a href={link}>Official site</a>
              <p>Discography</p> {/* not working, check this! */}
              {albums
                .map((album) => (
                  <div class="home-artist position-relative" key={album._id}>
                    <img class="img-fluid rounded" src={album.cover} />
                    <h6>
                      {album.title}
                      {album._id}
                    </h6>
                  </div>
                ))
                .slice(0, 3)}
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
}
