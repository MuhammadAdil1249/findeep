import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Form, Alert } from "react-bootstrap";
import { Button } from "react-bootstrap";
import GoogleButton from "react-google-button";
import { useUserAuth } from "../../context/UserAuthContext";
import {ReactComponent as Footer } from '../../../src/assets/wave.svg'

import "./Login.scss"


const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { logIn, googleSignIn } = useUserAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await logIn(email, password);
      navigate("/home");
    } catch (err) {
      setError(err.message);
    }
  };

  const handleGoogleSignIn = async (e) => {
    e.preventDefault();
    try {
      await googleSignIn();
      navigate("/home");
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="container">
      <div className="logscrn box">
        <h2>FinDeep Login</h2>
        {error && <Alert variant="danger">{error}</Alert>}
        <Form onSubmit={handleSubmit}>
          <Form.Group className="" controlId="formBasicEmail">
            <Form.Control
              type="email"
              className="emailInput"
              placeholder="Email address"
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Control
              className="password"
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>

          <div>
            <Button className="btn-primary" variant="primary" type="Submit">
              Log In
            </Button>
            <Link to="/phonesignup">
              <Button className="btn-primary" type="Submit">
                Sign in with Phone
              </Button>
            </Link>
          </div>
        </Form>
        <div>
          <GoogleButton
            className="g-btn"
            type="dark"
            onClick={handleGoogleSignIn}
          />
        </div>

        <div className="accountTxt">
          Don't have an account? <Link className="link" to="/signup">Sign up</Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
