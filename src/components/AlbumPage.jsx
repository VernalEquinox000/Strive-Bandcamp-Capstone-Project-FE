import React, { useState, useEffect } from "react";
import { Container, Row, Col, Image, Modal, Spinner } from "react-bootstrap";
import ArtistBar from "./ArtistBar";
import { getAlbumById } from "../api/albumApi";
import { getUserById, editUserMe } from "../api/userApi";
import { useParams, Link } from "react-router-dom";
import Player from "./Player";
import AlbumSidePanel from "./ArtistSidePanel";
import BuyModal from "./BuyModal";
import CoverModal from "./CoverModal";
import { dateConverter } from "../helpers/helpers";

export default function AlbumPage() {
  const matchParams = useParams();
  const [artist, setArtist] = useState(null);
  const [album, setAlbum] = useState(null);
  const [selectedSong, setSelectedSong] = useState(null);
  //modal
  /* const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true); */
  const [show, setshow] = useState(false);
  const handleClose = () => {
    setshow(false);
    setCurrentModal("");
  };
  const handleshow = (modalType) => {
    setshow(true);
    setCurrentModal(modalType);
  };
  const [currentModal, setCurrentModal] = useState(null);

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

  /*   const songMinSec = async (dur) => {
    const min = dur / 60;
    const sec = dur % 60;
    const time = `${min}:${sec}`;
    return time;
  }; */

  return (
    artist &&
    album && (
      <div>
        <Container
          className="d-flex flex-column justify-content-center align-content-center"
          style={{
            marginRight: "auto",
            marginLeft: "auto",
            flexGrow: "1",
          }}
        >
          <Row className=" row-cols-1 mx-0">
            {<ArtistBar key={artist._id} header={artist.headerPic} /> || (
              <Spinner animation="grow" variant="dark" />
            )}
          </Row>
          <Row
            className="text-left row-cols-1 row-cols-sm-2 row-cols-md-3 mt-5"
            style={{ margin: "25px" }}
          >
            <Col sm={{ span: 10 }} md={{ span: 5 }}>
              <h2 className="album-album-title">{album.title}</h2>

              <h6 className="album-album-title mb-5">
                by{" "}
                <Link
                  to={{
                    pathname: `/artist/${artist._id}`,
                  }}
                >
                  {artist.artistName}
                </Link>
              </h6>
              <Player file={selectedSong} />
              <h4
                className="mt-5"
                style={{ cursor: "pointer" }}
                onClick={() => handleshow("buy")}
              >
                Buy Digital Album €5 {/* add album price in BE */}
              </h4>
              <div className="mt-5">
                {album.songs.map((song) => (
                  <p class key={song._id}>
                    <span
                      className="song-span"
                      style={{ cursor: "pointer" }}
                      onClick={() => setSelectedSong(song.audioFile)}
                    >
                      <strong>
                        <i class="fas fa-play"></i>
                        {"    "}
                        {song.number}.{"   "}
                        {song.songTitle} {"   "}
                        {/* {songMinSec(song.duration)} */}
                      </strong>
                    </span>
                    {/* <span>Buy track €{song.price}</span> */}
                  </p>
                ))}
              </div>
              <p className="mt-5">{album.description}</p>
              <p className="mt-5">
                Release date: {dateConverter(album.releaseDate)}
              </p>
              <div className="mt-5">
                <h6>
                  <strong>[{album.tags + "  "}]</strong>
                </h6>
              </div>
            </Col>
            <Col className="d-none d-sm-block" md={{ span: 5 }}>
              {(
                <Image
                  style={{ width: "300px" }}
                  key={album._id}
                  className="img-fluid"
                  src={album.cover}
                  alt="album cover"
                  onClick={() => handleshow("cover")}
                />
              ) || <Spinner animation="grow" variant="dark" />}
            </Col>
            <Col md={{ span: 2 }}>
              {(
                <AlbumSidePanel
                  pic={artist.profilePic}
                  name={artist.artistName}
                  desc={artist.description}
                  link={artist.url[0]}
                  albums={artist.albums}
                />
              ) || <Spinner animation="grow" variant="dark" />}
            </Col>
          </Row>
          <Modal show={show} onHide={handleClose} size="lg">
            {currentModal === "cover" && show ? (
              <CoverModal handleClose={handleClose} album={album} />
            ) : currentModal === "buy" && show ? (
              <BuyModal handleClose={handleClose} album={album} />
            ) : (
              ""
            )}
          </Modal>
        </Container>
      </div>
    )
  );
}
