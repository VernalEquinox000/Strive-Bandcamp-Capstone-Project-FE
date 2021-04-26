import React from "react";
import { Modal, Button } from "react-bootstrap";
import { editUserMe } from "../api/userApi";
import { useSelector } from "react-redux";

export default function BuyModal({ handleClose, album }) {
  const user = useSelector((state) => state.user);
  const data = user.albumsCollected.unshift(album._id);
  console.log(album._id);
  console.log(user);
  console.log(data);

  /*   const submitEdit = async (e) => {
    e.preventDefault();
    //try {
    const response = await editUserMe({ albumsCollected });
  }; */

  return (
    <Modal.Dialog>
      <Modal.Header closeButton>
        <Modal.Title>Buy {album.title}</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <img src={album.cover} style={{ width: "100px " }} />
        <p>
          Includes high-quality download in MP3, FLAC and more. Paying
          supporters also get unlimited streaming via the free Bandcamp app.
          Have a gift card? Redeem it here{" "}
        </p>
      </Modal.Body>

      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button
          variant="primary"
          onClick={
            () => editUserMe(data)
            //alert("Album added to your collection!")
          }
        >
          Buy Album
        </Button>
      </Modal.Footer>
    </Modal.Dialog>
  );
}
