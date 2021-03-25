import React from "react";
import { Modal, Button } from "react-bootstrap";

export default function ModalIntro() {
  return (
    <div>
      <Modal.Dialog>
        <Modal.Header closeButton>
          <Modal.Title>Signup</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Button
            /* type="submit" */ variant="primary" //onClick={handleClose}
          >
            Signup as fan
          </Button>
          <Button
            /* type="submit" */ variant="success" //onClick={handleClose}
          >
            Signup as artist
          </Button>
          <Button
            /* type="submit" */ variant="warning" //onClick={handleClose}
          >
            Signup as label
          </Button>
          <Button
            variant="secondary" //onClick={handleClose}
          >
            Close
          </Button>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary">Close</Button>
          <Button variant="primary">Save changes</Button>
        </Modal.Footer>
      </Modal.Dialog>
    </div>
  );
}
