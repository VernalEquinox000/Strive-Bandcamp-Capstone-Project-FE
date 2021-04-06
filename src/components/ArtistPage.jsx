import React, { useState, useEffect } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import ArtistBar from "./ArtistBar";
import { getUserById } from "../api/userApi";
import { useParams } from "react-router-dom";
import ArtistAlbumGallery from "./ArtistAlbumGallery";
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
        <ArtistAlbumGallery albums={artist && artist.albums} />
      </Container>
    </div>
  );
}
