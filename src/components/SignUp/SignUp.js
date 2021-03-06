import React from "react";
import { Col, Form, Row, Button, Container } from "react-bootstrap";
import useAuth from "../../hooks/useAuth";
import "./SignUp.css";

const SignUp = () => {
  const { handleEmailChange, handlePasswordChange, handleSignIn, error } =
    useAuth();
  return (
    <div className="signup-container d-flex justify-content-center align-items-center">
      <Container>
        <div className="w-50 mx-auto">
          <h2 className="text-primary my-3">Sign up</h2>
          <Form onSubmit={(e) => e.preventDefault()}>
            <Form.Group
              as={Row}
              className="mb-3"
              controlId="formHorizontalEmail"
            >
              <Form.Label column sm={2}>
                Email
              </Form.Label>
              <Col sm={10}>
                <Form.Control
                  type="email"
                  placeholder="Email"
                  onBlur={handleEmailChange}
                />
              </Col>
            </Form.Group>

            <Form.Group
              as={Row}
              className="mb-3"
              controlId="formHorizontalPassword"
            >
              <Form.Label column sm={2}>
                Password
              </Form.Label>
              <Col sm={10}>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  onBlur={handlePasswordChange}
                />
              </Col>
            </Form.Group>
            <Form.Group
              as={Row}
              className="mb-3"
              controlId="formHorizontalCheck"
            >
              <div>
                <p className="text-danger">{error}</p>
              </div>
              <Col sm={{ span: 10, offset: 2 }}>
                <Form.Check label="Already have an account?" />
              </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3">
              <Col sm={{ span: 10, offset: 2 }}>
                <Button type="submit" onClick={handleSignIn}>
                  Sign in
                </Button>
              </Col>
            </Form.Group>
          </Form>
        </div>
      </Container>
    </div>
  );
};

export default SignUp;
