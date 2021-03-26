import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";

export default function ModalIntro({ show, handleClose }) {
  const [loading, setLoading] = useState(false);

  const [userType, setUserType] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    /* handleClose();
    setLoading(false); */
  };
  return (
    <div>
      <Modal className="modalIntro" centered show={show} onHide={handleClose}>
        <Modal.Dialog>
          <Modal.Header closeButton>
            <Modal.Title>Signup</Modal.Title>
          </Modal.Header>

          {!userType ? (
            <Modal.Body>
              <Button variant="primary" onClick={() => setUserType("fan")}>
                Signup as fan
              </Button>
              <Button variant="success" onClick={() => setUserType("artist")}>
                Signup as artist
              </Button>
              <Button variant="warning" onClick={() => setUserType("label")}>
                Signup as label
              </Button>
              <Button variant="secondary">Close</Button>
            </Modal.Body>
          ) : (
            <div>{userType}</div>
          )}

          <Modal.Footer>
            <Button variant="secondary">Close</Button>
            <Button variant="primary">Save changes</Button>
          </Modal.Footer>
        </Modal.Dialog>
      </Modal>
    </div>
  );
}
