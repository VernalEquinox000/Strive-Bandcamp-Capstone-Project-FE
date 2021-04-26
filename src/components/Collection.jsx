import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useSelector } from "react-redux";

export default function Collection() {
  const user = useSelector((state) => state.user);
  //const albums = user.albumsCollected;
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
                <Col>{user.albumsCollected[0].title}</Col>
              </Row>
            </>
          )}
        </Row>
      </Container>
    </>
  );
}
