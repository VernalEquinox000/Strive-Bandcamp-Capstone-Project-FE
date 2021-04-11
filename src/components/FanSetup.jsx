import React from "react";
import { Container, Row, Col, Form } from "react-bootstrap";

export default function FanSetup() {
  return (
    <div>
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
  );
}
