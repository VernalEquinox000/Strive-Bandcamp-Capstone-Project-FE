import React, { useState, useEffect } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import ArtistBar from "./ArtistBar";
import { getUserById } from "../api/userApi";
import { useParams } from "react-router-dom";
import ArtistAlbumGallery from "./ArtistAlbumGallery";
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

  return (
    artist && (
      <div>
        <ArtistBar key={artist._id} header={artist.headerPic} />
        <Container className="d-flex flex-column justify-content-center align-content-center">
          <Row
            Row
            className="row-cols-1 row-cols-sm-2 row-cols-lg-4 mb-4 text-left"
          >
            <Col xl={9}>
              <ArtistAlbumGallery artist={artist} />
            </Col>
            <Col xl={3}>
              <ArtistSidePanel
                pic={artist.profilePic}
                name={artist.artistName}
                desc={artist.description}
                link={artist.url[0]}
              />
            </Col>
          </Row>
        </Container>
      </div>
    )
  );
}
