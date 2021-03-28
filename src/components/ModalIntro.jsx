import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { registerUser } from "../api/userApi";
import { useHistory } from "react-router-dom";
import axios from "axios"; //copied

export default function ModalIntro({ show, handleClose }) {
  const [loading, setLoading] = useState(false);

  const [userType, setUserType] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    /* handleClose();
    setLoading(false); */
  };

  //registration
  //const history = useHistory();
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
    console.log(email);
    console.log(password);
    console.log(resp);
    /* if (resp.status === 201) {
      localStorage.setItem("LoggedIn", true);
      //history.push("/home");
    } else {
      alert("something went wrong");
    } */
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
            <div>
              {userType}
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
                {/* <Form.Group controlId="formBasicCheckbox">
                  <Form.Check type="checkbox" label="Check me out" />
                </Form.Group> */}
                <Form.Group controlId="formRole">
                  <Form.Label>Role</Form.Label>
                  <Form.Control
                    type="role"
                    placeholder="Role"
                    value={role}
                    onChange={(e) => setRole(e.currentTarget.value)}
                  />
                </Form.Group>
                <Button variant="primary" type="submit">
                  Submit
                </Button>
              </Form>
            </div>
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
