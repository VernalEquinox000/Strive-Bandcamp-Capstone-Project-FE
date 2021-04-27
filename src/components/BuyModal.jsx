import React, { useEffect } from "react";
import { Modal, Button } from "react-bootstrap";
import { editUserMe } from "../api/userApi";
import { useDispatch, useSelector } from "react-redux";

export default function BuyModal({ handleClose, album }) {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const pushAlbum = () => {
    dispatch({ type: "ADD_ALBUM", payload: album });
  };
  useEffect(() => {
    editUserMe(user);
  }, [user]);
  return (
    <Modal.Dialog>
      <Modal.Header closeButton>
        <Modal.Title>Buy {album.title}</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <img alt="album" src={album.cover} style={{ width: "100px " }} />
        <p>
          Includes high-quality download in MP3, FLAC and more. Paying
          supporters also get unlimited streaming via the free Bandcamp app.
          Have a gift card? Redeem it here{" "}
        </p>
      </Modal.Body>

      <Modal.Footer>
        {!user ? (
          <>
            <p style={{ fontSize: "10px", color: "red" }}>
              You must be logged in to buy this album!
            </p>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
          </>
        ) : (
          <>
            <Button variant="primary" onClick={() => pushAlbum()}>
              Buy Album
            </Button>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
          </>
        )}
      </Modal.Footer>
    </Modal.Dialog>
  );
}
