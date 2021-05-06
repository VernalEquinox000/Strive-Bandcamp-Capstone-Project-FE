import React from "react";
import { Container, Form, Button } from "react-bootstrap";
import { editUserMe } from "../api/userApi";
import { useSelector } from "react-redux";

export default function ArtistSetup() {
  const user = useSelector((state) => state.user);
  const user = useSelector((state) => state.user);
  const [email, setEmail] = useState(user.email);
  const [username, setUsername] = useState(user.username);
  const [artistname, setArtistname] = useState(user.artistName || "");
  const [password, setPassword] = useState(user.password);
  const [address, setAddress] = useState(user.address || "");
  const [city, setCity] = useState(user.city || "");
  const [state, setState] = useState(user.state || "");
  const [url, setUrl] = useState(user.url || "");
  const [description, setDescription] = useState(user.description || "");
  return (
    user && (
      <Container>
        <h1 style={{ marginTop: 50, marginBottom: 50 }}>Edit Your Profile</h1>

        <>
          <Form>
            <Form.Group controlId="exampleForm.ControlInput1">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder={user.email} />
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlInput1">
              <Form.Label>Username</Form.Label>
              <Form.Control type="username" placeholder={user.username} />
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlInput1">
              <Form.Label>Artist Name</Form.Label>
              <Form.Control type="artistname" placeholder={user.username} />
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlInput1">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder={user.password} />
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlInput1">
              <Form.Label>Address</Form.Label>
              <Form.Control type="address" placeholder={user.address} />
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlInput1">
              <Form.Label>City</Form.Label>
              <Form.Control type="city" placeholder={user.city} />
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlInput1">
              <Form.Label>State</Form.Label>
              <Form.Control type="state" placeholder={user.state} />
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlInput1">
              <Form.Label>URL</Form.Label>
              <Form.Control type="url" placeholder={user.url} />
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlTextarea1">
              <Form.Label>Description</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                placeholder={user.description}
              />
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlInput1">
              <Button className="w-25" block>
                Save
              </Button>
            </Form.Group>
          </Form>
        </>
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

/* email: 
    password: 
    username: 
    artistName: 
    address: 
    city: 
    state: 
    url: 
    profilePic: 
    headerPic: 
    description:  */
