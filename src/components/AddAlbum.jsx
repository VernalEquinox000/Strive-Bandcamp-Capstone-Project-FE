import React, { useState } from "react";
import { Container, Row, Col, Form, Signup, Button } from "react-bootstrap";
import { addAlbum } from "../api/albumApi";
import { Formik, Field } from "formik";

export default function AddAlbum() {
  //const [user, setUser] = useState(user);
  return (
    <div>
      <Formik
        initialValues={{
          title: "",
          description: "",
          cover: "",
          releaseDate: "",
          tags: [""],
          songs: [""],

          //role: userType, > add user.role="fan"
        }}
        onSubmit={async (data, { setSubmitting, resetForm }) => {
          try {
            setSubmitting(true);
            const response = await addAlbum(data);
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
          <Container className="mt-5">
            <Row sm={8} offset={2}>
              <Form onSubmit={handleSubmit}>
                <Form.Row>
                  <Form.Group as={Col}>
                    <Form.Label>title</Form.Label>
                    <Field
                      placeholder="Enter title"
                      type="title"
                      name="title"
                      as={Form.Control}
                    />
                  </Form.Group>
                </Form.Row>
                <Form.Row>
                  <Form.Group as={Col}>
                    <Form.Label>description</Form.Label>
                    <Field
                      placeholder="description"
                      name="description"
                      type="description"
                      as={Form.Control}
                    />
                  </Form.Group>
                </Form.Row>

                <Form.Group as={Col}>
                  <Form.Label>cover</Form.Label>
                  <Field
                    placeholder="cover"
                    name="cover"
                    type="cover"
                    as={Form.Control}
                  />
                </Form.Group>

                <Form.Row>
                  <Form.Group as={Col}>
                    <Form.Label>release date</Form.Label>
                    <Field
                      placeholder="release date"
                      name="release date"
                      type="releaseDate"
                      as={Form.Control}
                    />
                  </Form.Group>

                  <Form.Group as={Col}>
                    <Form.Label>Tags</Form.Label>
                    <Field
                      placeholder="tags"
                      name="tags"
                      type="tags"
                      as={Form.Control}
                    />
                  </Form.Group>
                </Form.Row>
                <Button disabled={isSubmitting} type="submit">
                  Add Album
                </Button>
              </Form>
            </Row>
          </Container>
        )}
      </Formik>
    </div>
  );
}
