import { Button } from "react-bootstrap";
import { Formik } from "formik";
import React from "react";
import { Container, Form } from "react-bootstrap";
import { editUserMe } from "../api/userApi";
import { useSelector } from "react-redux";

export default function FanSetup() {
  //const [user, setUser] = useState(user);
  const user = useSelector((state) => state.user);
  return (
    user && (
      <Container>
        <h1 style={{ marginTop: 50, marginBottom: 50 }}>Edit Your Profile</h1>
        <Formik
          initialValues={{
            email: user.email,
            username: user.username,
            address: user.address,

            //role: userType, > add user.role="fan"
          }}
          onSubmit={async (data, { setSubmitting, resetForm }) => {
            try {
              setSubmitting(true);
              const response = await editUserMe(data);
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
            <>
              <Form>
                <Form.Group controlId="exampleForm.ControlInput1">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control type="email" placeholder={user.email} />
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlInput1">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control type="email" placeholder="name@example.com" />
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlInput1">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control type="email" placeholder="name@example.com" />
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlInput1">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control type="email" placeholder="name@example.com" />
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlInput1">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control type="email" placeholder="name@example.com" />
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlInput1">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control type="email" placeholder="name@example.com" />
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlTextarea1">
                  <Form.Label>Address</Form.Label>
                  <Form.Control as="textarea" rows={3} />
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlInput1">
                  <Button className="w-25" block>
                    Save
                  </Button>
                </Form.Group>
              </Form>
            </>
          )}
        </Formik>
      </Container>
    )
  );
}

/* import React, { useState } from "react";
import { Container, Row, Col, Form, Signup, Button } from "react-bootstrap";
import { getUserMe, editUserMe } from "../api/userApi";
import { Formik, Field } from "formik";

export default function FanSetup(user) {
  //const [user, setUser] = useState(user);
  return (
    user && (
      <div>
        <Formik
          initialValues={{
            email: user.email,
            password: "",
            username: "",
            address: "",
            city: "",
            state: "",

            //role: userType, > add user.role="fan"
          }}
          onSubmit={async (data, { setSubmitting, resetForm }) => {
            try {
              setSubmitting(true);
              const response = await editUserMe(data);
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
            <Container>
              <Form onSubmit={handleSubmit}>
                <Form.Row>
                  <Form.Group as={Col}>
                    <Form.Label>Email</Form.Label>
                    <Field
                      placeholder="Enter email"
                      type="email"
                      name="email"
                      as={Form.Control}
                    />
                  </Form.Group>
                </Form.Row>
                <Form.Row>
                  <Form.Group as={Col}>
                    <Form.Label>Password</Form.Label>
                    <Field
                      placeholder="Password"
                      name="password"
                      type="password"
                      as={Form.Control}
                    />
                  </Form.Group>
                </Form.Row>

                <Form.Group as={Col}>
                  <Form.Label>Address</Form.Label>
                  <Field
                    placeholder="Address"
                    name="address"
                    type="address"
                    as={Form.Control}
                  />
                </Form.Group>

                <Form.Row>
                  <Form.Group as={Col}>
                    <Form.Label>City</Form.Label>
                    <Field
                      placeholder="City"
                      name="city"
                      type="city"
                      as={Form.Control}
                    />
                  </Form.Group>

                  <Form.Group as={Col}>
                    <Form.Label>State</Form.Label>
                    <Field
                      placeholder="State"
                      name="state"
                      type="state"
                      as={Form.Control}
                    />
                  </Form.Group>
                </Form.Row>
                <Button disabled={isSubmitting} type="submit">
                  Register
                </Button>
              </Form>
            </Container>
          )}
        </Formik>
      </div>
    )
  );
} */
