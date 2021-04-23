import React, { useState, useEffect } from "react";
import { Container, Row, Col, Image, Modal, Button } from "react-bootstrap";
import ArtistBar from "./ArtistBar";
import { getAlbumById } from "../api/albumApi";
import { getUserById } from "../api/userApi";
import { useParams, Link } from "react-router-dom";
import Player from "./Player";
import AlbumSidePanel from "./ArtistSidePanel";

export default function AlbumPage() {
  const matchParams = useParams();
  const [artist, setArtist] = useState(null);
  const [album, setAlbum] = useState(null);
  const [selectedSong, setSelectedSong] = useState(null);
  //modal
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const fetchAlbum = async (id) => {
    const response = await getAlbumById(matchParams.albumId);
    if (response.statusText === "OK") {
      const data = await response.data;
      console.log(data);
      setAlbum(data);
    } else {
      alert("couldn't load user");
    }
  };

  const fetchUser = async (id) => {
    const response = await getUserById(matchParams.artistId);
    if (response.statusText === "OK") {
      const data = await response.data;
      setArtist(data);
    } else {
      alert("couldn't load album");
    }
  };

  useEffect(() => {
    fetchAlbum(matchParams.albumId);
    fetchUser(matchParams.artistId);
  }, []);

  return (
    artist &&
    album && (
      <div>
        <ArtistBar key={artist._id} header={artist.headerPic} />
        <Container className="d-flex flex-column justify-content-center align-content-center">
          <Row className="text-left">
            <Col sm={{ span: 4, offset: 1 }}>
              <h2>{album.title}</h2>

              <h6 className="mb-5">
                by <Link>{artist.artistName}</Link>
              </h6>
              <Player file={selectedSong} />
              <h4 className="mt-5">
                Buy Digital Album €5 {/* add album price in BE */}
              </h4>
              <div className="mt-5">
                {album.songs.map((song) => (
                  <p class>
                    <span
                      className="song-span"
                      style={{ cursor: "pointer" }}
                      onClick={() => setSelectedSong(song.audioFile)}
                    >
                      <strong>
                        {song.number}.{"   "}
                        {song.songTitle} {"   "}
                      </strong>
                    </span>
                    <span>Buy track €{song.price}</span>
                  </p>
                ))}
              </div>
              <p className="mt-5">{album.description}</p>
              <span className="mt-5">
                <h6>
                  <strong>[{album.tags + "  "}]</strong>
                </h6>
              </span>
            </Col>
            <Col sm={{ span: 4 }}>
              <Image
                style={{ width: "300px" }}
                key={album._id}
                className="img-fluid"
                src={album.cover}
                alt="album cover"
                onClick={handleShow}
              />
            </Col>
            <Col sm={{ span: 2 }}>
              <AlbumSidePanel
                pic={artist.profilePic}
                name={artist.artistName}
                desc={artist.description}
                link={artist.url[0]}
                albums={artist.albums}
              />
            </Col>
          </Row>
          <Modal show={show} onHide={handleClose} size="lg">
            <Modal.Header closeButton></Modal.Header>
            <Modal.Body>
              <img src={album.cover} style={{ width: "100%" }} />
            </Modal.Body>
          </Modal>
        </Container>
      </div>
    )
  );
}
