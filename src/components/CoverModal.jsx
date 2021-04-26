import { Modal, Button } from "react-bootstrap";

export default function BuyModal({ handleClose, album }) {
  return (
    <>
      <Modal.Header closeButton></Modal.Header>
      <Modal.Body>
        <img src={album.cover} style={{ width: "100%" }} />
      </Modal.Body>
      <Button variant="secondary" onClick={handleClose}>
        Close
      </Button>
    </>
  );
}
