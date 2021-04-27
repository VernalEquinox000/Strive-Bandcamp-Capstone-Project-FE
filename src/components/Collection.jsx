import React from "react";
import {
  Container,
  Row,
  Col,
  Card,
  ListGroup,
  ListGroupItem,
} from "react-bootstrap";
import { useSelector } from "react-redux";
import { getMp3, getWav } from "../api/albumApi";

export default function Collection() {
  const user = useSelector((state) => state.user);

  /*   const downloadUrl = (url) => {
    fetch(downloadUrl)
      .then((img) => img.blob())
      .then((blob) => {
        let url = window.URL.createObjectURL(blob);
        let link = document.createElement("a");
        link.href = url;
        link.download = name;
        link.click();
      });
  }; */

  /*  const download = (link) => {
  // fake server request, getting the file url as response
  setTimeout(() => {
    const response = {
      file: 'http://releases.ubuntu.com/12.04.5/ubuntu-12.04.5-alternate-amd64.iso',
    };
    // server sent the url to the file!
    // now, let's download:
    window.open(response.file);
    // you could also do:
    // window.location.href = response.file;
  }, 100);
} */

  return (
    <>
      <Container className="d-flex flex-column justify-content-center align-content-center mt-5">
        <Row className="row-cols-1 text-left">
          {user && (
            <>
              <Col sm={{ span: 5, offset: 1 }}>
                <div className="wrap-prof-coll">
                  <img
                    className="img-prof-coll"
                    src={
                      user.profilePic ||
                      "https://st4.depositphotos.com/4329009/19956/v/380/depositphotos_199564354-stock-illustration-creative-vector-illustration-default-avatar.jpg"
                    }
                  />
                </div>
              </Col>
              <Col sm={{ span: 3, offset: 0 }} className="text-align-left">
                <h1>{user.username}</h1>{" "}
                <h6>
                  {user.albumsCollected.length || "0"} albums in collection
                </h6>
              </Col>
              <Row className="row-cols-1 text-left">
                {user.albumsCollected.map((album) => (
                  <Col key={album._id}>
                    <Card style={{ width: "18rem" }}>
                      <Card.Img variant="top" src={album.cover} />
                      <Card.Body>
                        <Card.Title>{album.title}</Card.Title>
                      </Card.Body>
                      <ListGroup className="list-group-flush">
                        {album.songs.map((song) => (
                          <ListGroupItem key={song._id}>
                            {song.songTitle} -{" "}
                            <span onClick={() => getWav(album._id, song._id)}>
                              wav
                            </span>
                            {"   "}
                            {/* <a
                              href={getFile.url}
                              download={getFile.saveAsFileName}
                            ></a> */}
                            <span
                              onClick={() =>
                                getMp3(album._id, song._id).download
                              }
                            >
                              mp3
                            </span>
                          </ListGroupItem>
                        ))}
                      </ListGroup>
                      <Card.Body>
                        <Card.Link href="#">Card Link</Card.Link>
                        <Card.Link href="#">Another Link</Card.Link>
                      </Card.Body>
                    </Card>
                  </Col>
                ))}
              </Row>
            </>
          )}
        </Row>
      </Container>
    </>
  );
}
