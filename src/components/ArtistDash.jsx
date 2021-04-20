import React, { useState, useEffect } from "react";
import { Container, Row, Col, Image, Button } from "react-bootstrap";
import { getAlbumById } from "../api/albumApi";
import { getUserById } from "../api/userApi";
import { useSelector } from "react-redux";
import { useParams, Link, useHistory } from "react-router-dom";
import Neko from "../assets/bc-neko.png";
import Bunny from "../assets/bc-bunny.png";

export default function ArtistDash() {
  const matchParams = useParams();
  /* const [album, setAlbum] = useState(null); */
  //new below
  const history = useHistory();
  const user = useSelector((state) => state.user);

  /*const fetchAlbum = async (id) => {
    const response = await getAlbumById(id);
    const data = await response.data;
    console.log(data);
  };
  setAlbum(data);
    console.log(album);
    album && console.log(album.cover);
    album && console.log(album.title);
  };

  const fetchUser = async (id) => {
    const response = await getUserById("6063a38923feb85e4d745853");
    //(response.statusText === "OK") { 
    const data = await response.data;
    console.log(data);
    setArtist(data);
    console.log(artist);
  };

  useEffect(() => {
    fetchUser("6063a38923feb85e4d745853");
    fetchAlbum("6063a38923feb85e4d745853");
  }, []); */

  return (
    user && (
      <div>
        <Container className="mt-5">
          <Row className="mt-5">
            <h2>Welcome {user.artistName}! This is your dashboard.</h2>
          </Row>
          <Row className="mt-5">
            <Col sm={6}>
              <p>
                <h5>The first step towards Bandcamp prosperity...</h5>
                <h6>... is of course to add some music:</h6>
              </p>
              <Link to="/me/addAlbum">
                <Button variant="primary">Add Album</Button>
              </Link>
              <Button variant="secondary" className="ml-5">
                Add Track
              </Button>

              <p className="mt-5">
                <h6>Your albums:</h6>
                <Link to={{ pathname: `/me/album/${user.albums[0]}` }}>
                  {user.albums[0]}
                </Link>
              </p>
            </Col>
            <Col sm={2}>
              <img src={Neko} style={{ width: "150px" }} alt="neko" />
            </Col>
            <Col sm={4}>
              <p>
                <img src={Bunny} style={{ width: "150px" }} alt="bunny" />
                <h5>No followers, but just you wait! </h5>
                <h6>
                  This is where you’ll see your followers. We notify them when
                  you release new music or merch, so the more followers you
                  have, the more sales you can expect.
                </h6>
              </p>
            </Col>
          </Row>
          <Row>
            <Col sm={6}></Col>
            <Col sm={6}></Col>
          </Row>
        </Container>
      </div>
    )
  );
}
