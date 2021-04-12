import React, { useState } from "react";
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
            <Form onSubmit={handleSubmit}>
              <Form.Row>
                <Form.Group as={Col} controlId="formGridEmail">
                  <Form.Label>Email</Form.Label>
                  <Field
                    type="email"
                    placeholder="Enter email"
                    as={Form.Control}
                  />
                </Form.Group>
              </Form.Row>
              <Form.Row>
                <Form.Group as={Col} controlId="formGridPassword">
                  <Form.Label>Password</Form.Label>
                  <Field
                    type="password"
                    placeholder="Password"
                    as={Form.Control}
                  />
                </Form.Group>
              </Form.Row>

              <Form.Group controlId="formGridAddress1">
                <Form.Label>Address</Form.Label>
                <Field placeholder="1234 Main St" as={Form.Control} />
              </Form.Group>

              <Form.Row>
                <Form.Group as={Col} controlId="formGridCity" as={Form.Control}>
                  <Form.Label>City</Form.Label>
                  <Field placeholder="USA" as={Form.Control} />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridState">
                  <Form.Label>State</Form.Label>
                  <Field as="select" defaultValue="Choose..." as={Form.Control}>
                    {/* <option>Choose...</option>
                  <option>...</option> */}
                  </Field>
                </Form.Group>
              </Form.Row>
              <Button disabled={isSubmitting} type="submit">
                Register
              </Button>
            </Form>
          )}
        </Formik>
      </div>
    )
  );
}

{
  /* <Form onSubmit={handleSubmit}>
  <Form.Row>
    <Form.Group as={Col} controlId="formGridEmail">
      <Form.Label>Email</Form.Label>
      <Form.Control type="email" placeholder="Enter email" as={Form.Control}/>
    </Form.Group>

    <Form.Group as={Col} controlId="formGridPassword">
      <Form.Label>Password</Form.Label>
      <Form.Control type="password" placeholder="Password" as={Form.Control}/>
    </Form.Group>
  </Form.Row>

  <Form.Group controlId="formGridAddress1">
    <Form.Label>Address</Form.Label>
    <Form.Control placeholder="1234 Main St" as={Form.Control}/>
  </Form.Group>

  <Form.Row>
    <Form.Group as={Col} controlId="formGridCity" as={Form.Control}>
      <Form.Label>City</Form.Label>
      <Form.Control />
    </Form.Group>

    <Form.Group as={Col} controlId="formGridState">
      <Form.Label>State</Form.Label>
      <Form.Control as="select" defaultValue="Choose..." as={Form.Control}>
        <option>Choose...</option>
        <option>...</option>
      </Form.Control>
    </Form.Group>

    <Form.Group as={Col} controlId="formGridZip">
      <Form.Label>Zip</Form.Label>
      <Form.Control />
    </Form.Group>
  </Form.Row>

  <Form.Group id="formGridCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group>

  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>; */
}
