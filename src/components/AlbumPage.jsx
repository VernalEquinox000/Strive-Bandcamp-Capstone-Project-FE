import React, { useState, useEffect, createRef } from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import ArtistBar from "./ArtistBar";
import { getAlbumById } from "../api/albumApi";
import { getUserById } from "../api/userApi";
import { useParams } from "react-router-dom";
import ArtistSidePanel from "./ArtistSidePanel";
import Player from "./Player";

export default function AlbumPage() {
  const matchParams = useParams();
  const [artist, setArtist] = useState(null);
  const [album, setAlbum] = useState(null);
  const [selectedSong, setSelectedSong] = useState(null);

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

  const songHandler = (e) => {
    setSelectedSong({ song: e.target.value });
  };

  return (
    artist &&
    album && (
      <div>
        <ArtistBar key={artist._id} header={artist.headerPic} />
        <Container className="d-flex flex-column justify-content-center align-content-center">
          <Row className="row-cols-1 row-cols-sm-2 row-cols-lg-4 mb-4 text-left ml-5">
            <Col xl={5}>
              <h1>{album.title}</h1>
              <Player file={selectedSong} />

              {album.songs.map((song) => (
                <span>
                  <h6 onClick={() => setSelectedSong(song.audioFile)}>
                    {song.number}
                    {"   "}
                    {song.songTitle}
                  </h6>

                  {/* <ReactAudioPlayer src={song.audioFile} autoPlay controls />; */}
                </span>
              ))}
            </Col>
            <Col xl={4}>
              <Image
                style={{ width: "400px" }}
                key={album._id}
                className="img-fluid"
                src={album.cover}
                alt="album cover"
                /* onClick={history.push("/album/" + album._id)} */
              />
            </Col>
            <Col xl={3}>
              {/* <ArtistSidePanel
                pic={artist.profilePic}
                name={artist.artistName}
                desc={artist.description}
                link={artist.url[0]} 
              />*/}
            </Col>
          </Row>
          <Row>
            <Col>{album.description}</Col>
          </Row>
          <Row>
            <Col>
              <span>
                <h6>
                  <strong>[{album.tags}]</strong>
                </h6>
              </span>
            </Col>
          </Row>
        </Container>
      </div>
    )
  );
}
