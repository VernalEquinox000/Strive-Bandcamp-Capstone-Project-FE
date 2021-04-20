import React, { useState } from "react";
import { Modal, Button, Form, Row, Col } from "react-bootstrap";
import { signup } from "../api/userApi";
//import { useHistory } from "react-router-dom";
import { Formik, Field } from "formik";

export default function SignupModal({ showSignup, handleSignupClose }) {
  const [loading, setLoading] = useState(false);
  const [userType, setUserType] = useState("");

  return (
    <div>
      <Modal
        className="signup-modal"
        centered
        showSignup={showSignup}
        onHide={handleSignupClose}
      >
        <Modal.Dialog>
          <Modal.Header closeButton>
            <Modal.Title>Signup </Modal.Title>
          </Modal.Header>

          {!userType ? (
            <Modal.Body>
              <Button variant="primary" onClick={() => setUserType("fan")}>
                Signup as fan
              </Button>
              {"    "}
              <Button variant="success" onClick={() => setUserType("artist")}>
                Signup as artist
              </Button>
            </Modal.Body>
          ) : (
            <div>
              <h3>
                Signin up as: <strong>{userType}</strong>
              </h3>
              <Formik
                initialValues={{
                  email: "",
                  password: "",
                  username: "",
                  artistName: "",
                  role: userType,
                }}
                onSubmit={async (data, { setSubmitting, resetForm }) => {
                  try {
                    setSubmitting(true);
                    const response = await signup(data);
                    if (response.status === 201) {
                      const data = response.data;
                      console.log(data);
                      setSubmitting(false);
                      resetForm();
                    }
                  } catch (error) {
                    console.log(error.response.data);
                  }
                }}
              >
                {({ values, isSubmitting, handleSubmit }) => (
                  <Form onSubmit={handleSubmit}>
                    <Form.Row>
                      <Form.Group as={Col}>
                        <Form.Label>Email</Form.Label>
                        <Field
                          placeholder=""
                          name="email"
                          type="email"
                          as={Form.Control}
                          required
                        />
                      </Form.Group>
                    </Form.Row>
                    <Form.Row>
                      <Form.Group as={Col}>
                        <Form.Label>Password</Form.Label>
                        <Field
                          placeholder=""
                          name="password"
                          type="password"
                          as={Form.Control}
                          required
                        />
                      </Form.Group>
                      <Form.Group as={Col}>
                        <Form.Label>Username</Form.Label>
                        <Field
                          placeholder=""
                          name="username"
                          type="username"
                          as={Form.Control}
                        />
                      </Form.Group>
                    </Form.Row>
                    {userType === "artist" ? (
                      <Form.Row>
                        <Form.Group as={Col}>
                          <Form.Label>Artist/Band Name</Form.Label>
                          <Field
                            placeholder=""
                            name="artistName"
                            type="artistName"
                            as={Form.Control}
                          />
                        </Form.Group>
                      </Form.Row>
                    ) : (
                      ""
                    )}
                    <Modal.Footer>
                      <Button disabled={isSubmitting} type="submit">
                        Register
                      </Button>
                      <Button variant="secondary" onClick={handleSignupClose}>
                        Close
                      </Button>
                    </Modal.Footer>
                    <h6>Already have an account? Login</h6>
                  </Form>
                )}
              </Formik>
            </div>
          )}
        </Modal.Dialog>
      </Modal>
    </div>
  );
}
