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
import { registerUser } from "../api/userApi";
import { useHistory } from "react-router-dom";

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

  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");

  const register = async (e) => {
    e.preventDefault(e);

    const resp = await registerUser({
      email,
      password,
      role,
    });
    if (resp.status === 201) {
      localStorage.setItem("LoggedIn", true);
      //history.push("/home");
    } else {
      alert("something went wrong");
    }
  };

  console.log({ handleShow });

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
          <span style={{ cursor: "pointer" }} onClick={handleShow}>
            Setup
          </span>
          {"         "}
          <span style={{ cursor: "pointer" }} onClick={handleShow}>
            Login
          </span>
        </div>

        <Form
          className="modalIntro"
          centered
          /* show={showSignup}
            onHide={handleSignupOff} */
          onSubmit={register}
        >
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.currentTarget.value)}
            />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.currentTarget.value)}
            />
          </Form.Group>
          <Form.Group controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Container>
    </Navbar>
  );
}
