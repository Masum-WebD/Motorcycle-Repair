import React from "react";
import { Button, Form } from "react-bootstrap";
import img from "../../../image/Login/login.jpg";
import "./Login.css";

const Login = () => {
  return (
    <div className="form ">
      <h1 className="text-center text-black ">Please login</h1>
      <div className="login-form container">
        <div className="loginImage">
          <img src={img} alt="" />
        </div>
        <div className="loginDetails">
          <Form className="form-container">
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label className='fw-bold'>Email address</Form.Label>
              <Form.Control type="email" required />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label className='fw-bold'>Password</Form.Label>
              <Form.Control type="password" required />
            </Form.Group>
            <Button
              className="w-50 d-block mx-auto fs-4 fw-bold"
              variant="primary"
              type="submit"
            >
              Login
            </Button>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Login;
