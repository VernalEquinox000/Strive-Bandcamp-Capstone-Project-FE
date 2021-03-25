import React, { useState } from "react";
import {
  Navbar,
  Container,
  Row,
  Nav,
  Form,
  FormControl,
  Alert,
  Modal,
  Button,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import Bandcamp from "../assets/bandcamp.svg";
import ModalIntro from "../components/ModalIntro";

export default function NavigationBar() {
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    /* handleClose();
    setLoading(false); */
  };
  return (
    <Navbar bg="light" variant="light">
      <Container className="navContainer">
        <div className="logo">
          <Navbar.Brand href="#home">
            <img
              src={Bandcamp}
              width="100px"
              height="40px"
              className="d-inline-block align-top"
              alt="Bandcamp logo"
            />
          </Navbar.Brand>
        </div>
        <div className="search">
          <form method="post">
            <input
              type="text"
              name="subject"
              class="bandcampSearch"
              value=""
              placeholder="Search"
            />
          </form>
        </div>

        {/* <Nav as={Link} onClick={handleShow}>
            Signup
          </Nav> */}
        <div className="setlog">
          <span onClick={handleShow}>
            <a href="#">Setup</a>
          </span>
          {"         "}
          <span onClick={handleShow}>
            <a href="#">Login</a>
          </span>
        </div>
        {/* <Nav className="mr-auto">
          <Nav.Link href="#home">Signup</Nav.Link>
          <Nav.Link href="#features">Login</Nav.Link>
          <Nav.Link href="#pricing">Pricing</Nav.Link>
        </Nav> */}

        <Modal
          className="signupModal"
          centered
          show={show}
          onHide={handleClose}
        >
          <div style={{ backgroundColor: "white" }}>
            <Modal.Header closeButton>
              <Modal.Title>Signup</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form onSubmit={(e) => handleSubmit(e)}>
                <Form.Group className="mb-2">
                  <Form.Control
                    type="email"
                    placeholder="Enter email"
                    value="" //email
                    onChange=""
                  />
                </Form.Group>
                <Form.Group className="mb-2">
                  <Form.Control
                    type="password"
                    placeholder="Password"
                    value="" //password
                    onChange=""
                  />
                </Form.Group>
                {/* <Alert variant="danger"></Alert>
                <button type="submit" className="w-100 LoginBnt mt-2">
                  Log In
                </button> */}
              </Form>
            </Modal.Body>
            <Modal.Footer>
              <Button
                /* type="submit" */ variant="primary"
                onClick={handleClose}
              >
                Signup as fan
              </Button>
              <Button
                /* type="submit" */ variant="success"
                onClick={handleClose}
              >
                Signup as artist
              </Button>
              <Button
                /* type="submit" */ variant="warning"
                onClick={handleClose}
              >
                Signup as artist
              </Button>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
            </Modal.Footer>
          </div>
        </Modal>

        <Modal className="loginModal" centered show={show} onHide={handleClose}>
          <div style={{ backgroundColor: "white" }}>
            <Modal.Header closeButton>
              <Modal.Title>Signup</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form onSubmit={(e) => handleSubmit(e)}>
                <Form.Group className="mb-2">
                  <Form.Control
                    type="email"
                    placeholder="Enter email"
                    value="" //email
                    onChange=""
                  />
                </Form.Group>
                <Form.Group className="mb-2">
                  <Form.Control
                    type="password"
                    placeholder="Password"
                    value="" //password
                    onChange=""
                  />
                </Form.Group>
                {/* <Alert variant="danger"></Alert>
                <button type="submit" className="w-100 LoginBnt mt-2">
                  Log In
                </button> */}

                <Button type="submit" variant="primary" onClick={handleClose}>
                  Signup
                </Button>
              </Form>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
            </Modal.Footer>
          </div>
        </Modal>
      </Container>
    </Navbar>
  );
}
