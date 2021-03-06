import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import {
  useCreateUserWithEmailAndPassword,
  useSendEmailVerification,
} from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";
import img from "../../../image/Login/register.jpg";
import SocialMedia from "../../SocialMedia/SocialMedia";
const Register = () => {
  const [terms,setTerms] =useState(false)
  const navigate = useNavigate();

  const [createUserWithEmailAndPassword] =
    useCreateUserWithEmailAndPassword(auth);

  const [sendEmailVerification] = useSendEmailVerification(auth);

  const handleCreateUser = async (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    await createUserWithEmailAndPassword(email, password);
    await sendEmailVerification(email);
    alert("Sent email");
    navigate("/home");
  };

  const handleLog = () => {
    navigate("/login");
  };
  return (
    <div className="form ">
      <h1 className="text-center text-black ">Please Register</h1>
      <div className=" login-form container">
        <div className="loginImage me-3">
          <img  className='image' src={img} alt="" />
        </div>
        <div className=" loginDetails">
          <Form  onSubmit={handleCreateUser} className=" image form-container">
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label className="fw-bold">Your Name</Form.Label>
              <Form.Control name="name" type="text" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label className="fw-bold">Email address</Form.Label>
              <Form.Control name="email" type="email" required />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label className="fw-bold">Password</Form.Label>
              <Form.Control name="password" type="password" required />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              
              <Form.Check  onClick={()=>setTerms(!terms)}  type="checkbox" className={`${terms? '':'text-danger'}`}
              label="Accept our terms and condition "
              />
            </Form.Group>
            <Button
              className="w-50 d-block mx-auto fs-4 fw-bold"
              variant="primary"
              type="submit"
              disabled={!terms}
            >
              Register
            </Button>
          </Form>
          <p className="text-center image">
            Already have a Account?{" "}
            <Link
              to="/login"
              onClick={handleLog}
              className="text-danger text-decoration-none pe-auto"
            >
              Login
            </Link>
          </p>
          <SocialMedia></SocialMedia>
        </div>
      </div>
    </div>
  );
};

export default Register;
