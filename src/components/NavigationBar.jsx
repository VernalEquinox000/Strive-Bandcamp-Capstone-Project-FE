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

export default function NavigationBar({ handleShow, handleClose }) {
  const [loading, setLoading] = useState(false);
  const [showSignup, setShowSignup] = useState(false);

  const handleSignupOff = () => setShowSignup(false);
  const handleSignupOn = () => setShowSignup(true);

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
          <Link to="/">
            <Navbar.Brand>
              <img
                src={Bandcamp}
                width="100px"
                height="40px"
                className="d-inline-block align-top"
                alt="Bandcamp logo"
              />
            </Navbar.Brand>
          </Link>
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
          <span style={{ cursor: "pointer" }} onClick={handleShow}>
            Signup
          </span>
          {"         "}
          <span style={{ cursor: "pointer" }} onClick={handleShow}>
            Login
          </span>
        </div>
      </Container>
    </Navbar>
  );
}
