import React, { useState } from "react";
import { Modal, Button, Form, Col } from "react-bootstrap";
import { login, getUserById } from "../api/userApi";
import { useHistory } from "react-router-dom";
import { Formik, Field } from "formik";
import { useDispatch } from "react-redux";
import { isLoggedIn } from "../helpers/functions";

export default function LoginModal({ handleClose }) {
  const [loading, setLoading] = useState(false);
  const [userType, setUserType] = useState("");

  //new
  const history = useHistory();
  const dispatch = useDispatch();
  const [error, setError] = useState(null);

  const setUser = () => {
    dispatch(async (dispatch) => {
      try {
        const response = await getUserById("me");
        if (response.statusText === "OK") {
          dispatch({
            type: "SET_USER",
            payload: response.data,
          });
        }
      } catch (error) {
        console.log(error.response);
      }
    });
  };

  return (
    <div>
      <>
        <Modal.Dialog>
          <Modal.Header closeButton>
            <Modal.Title>Login </Modal.Title>
          </Modal.Header>
          <Formik
            initialValues={{
              email: "",
              password: "",
            }}
            onSubmit={async (data, { setSubmitting }) => {
              try {
                setSubmitting(true);
                let response = await login({
                  email: data.email,
                  password: data.password,
                });
                if (response.status === 201) {
                  const data = response.data;
                  console.log(data);
                  setSubmitting(false);
                  localStorage.setItem("LoggedIn", true);
                  //if (isLoggedIn() === "true") {
                  setUser();
                  //history.push("/");
                  handleClose();
                  //}
                }
              } catch (error) {
                console.log(error.response.data);
                setSubmitting(false);
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
                </Form.Row>
                <Modal.Footer>
                  <Button disabled={isSubmitting} type="submit">
                    Login
                  </Button>
                  <Button variant="secondary" onClick={handleClose}>
                    Close
                  </Button>
                </Modal.Footer>
              </Form>
            )}
          </Formik>
        </Modal.Dialog>
      </>
    </div>
  );
}
