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

  return (
    <Modal.Dialog>
      <Modal.Header closeButton>
        <Modal.Title>Buy {album.title}</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <p>Modal body text goes here.</p>
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