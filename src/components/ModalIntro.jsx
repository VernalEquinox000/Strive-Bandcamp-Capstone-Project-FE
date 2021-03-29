import React, { useState } from "react";
import { Modal, Button, Form, Row, Col } from "react-bootstrap";
import { signup } from "../api/userApi";
//import { useHistory } from "react-router-dom";
import { Formik, Field } from "formik";

export default function ModalIntro({ show, handleClose }) {
  const [loading, setLoading] = useState(false);
  const [userType, setUserType] = useState("");

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
              {"    "}
              <Button variant="success" onClick={() => setUserType("artist")}>
                Signup as artist
              </Button>
            </Modal.Body>
          ) : (
            <div>
              Signin up as: {userType}
              <Formik
                initialValues={{
                  email: "",
                  password: "",
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
                          placeholder="Type your email"
                          name="email"
                          type="email"
                          as={Form.Control}
                        />
                      </Form.Group>
                    </Form.Row>
                    <Form.Row>
                      <Form.Group as={Col}>
                        <Form.Label>Password</Form.Label>
                        <Field
                          placeholder="Type your password"
                          name="password"
                          type="password"
                          as={Form.Control}
                        />
                      </Form.Group>
                    </Form.Row>
                    {/* <Form.Row>
                      <Form.Group as={Col} sm="5">
                        <Form.Label>Role</Form.Label>
                        <Field
                          placeholder="Type your role"
                          name="role"
                          type="text"
                          as={Form.Control}
                        />
                      </Form.Group>
                    </Form.Row> */}
                    <Button disabled={isSubmitting} type="submit">
                      Register
                    </Button>
                  </Form>
                )}
              </Formik>
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
