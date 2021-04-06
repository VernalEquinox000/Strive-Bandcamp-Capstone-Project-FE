import React, { useState, useEffect } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import ArtistBar from "./ArtistBar";
import { getUserById } from "../api/userApi";
import { useParams } from "react-router-dom";
import ArtistAlbumGallery from "./ArtistAlbumGallery";
import ArtistSidePanel from "./ArtistSidePanel";
export default function Artist() {
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
    artist && console.log(artist.albums[0].cover);
    artist && console.log(artist.albums[0].title);
    /* } else {
      alert("something went wrong");
    } */
  };

  useEffect(() => {
    fetchUser(matchParams.id);
  }, []);

  return (
    <div>
      <ArtistBar header={artist && artist.headerPic} />
      <Container>
        <Row>
          <Col lg={10}>
            <ArtistAlbumGallery albums={artist && artist.albums} />
          </Col>
        </Row>
        <Row>
          <Col lg={2}>
            {artist && (
              <ArtistSidePanel
                pic={artist.profilePic}
                name={artist.artistName}
                desc={artist.description}
              />
            )}
          </Col>
        </Row>
      </Container>
    </div>
  );
}
