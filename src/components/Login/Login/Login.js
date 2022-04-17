import React from "react";
import { Button, Form } from "react-bootstrap";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";
import img from "../../../image/Login/login.jpg";
import Loading from "../../RequireAuth/Loading/Loading";
import SocialMedia from "../../SocialMedia/SocialMedia";
import "./Login.css";

const Login = () => {
    const navigate =useNavigate()
    let location = useLocation();
    let from = location.state?.from?.pathname || "/";

    const [
      signInWithEmailAndPassword,
      user,
      loading,
      error,
    ] = useSignInWithEmailAndPassword(auth);
    if(user) {
      navigate(from, { replace: true });
    }
    if(loading) {
      <Loading></Loading>
    }
    let errorMessage
    if(error) {
      errorMessage =<p style={{color:'red'}}>{error.message}</p>
    }

    const handleEmailAndPassword=(e)=>{
      e.preventDefault()
      const email = e.target.email.value;
      const password = e.target.password.value;
      signInWithEmailAndPassword(email, password)
      // console.log(email,password);
    }


    const handleReg=()=>{
      navigate('/register')
    }
  return (
    <div className="form ">
      <h1 className="text-center text-black ">Please login</h1>
      <div className="login-form container">
        <div className="loginImage">
          <img src={img} alt="" />
        </div>
        <div className="loginDetails">
          <Form onSubmit={handleEmailAndPassword} className="form-container">
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label className='fw-bold'>Email address</Form.Label>
              <Form.Control name='email' type="email" required />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label className='fw-bold'>Password</Form.Label>
              <Form.Control name='password'type="password" required />
            </Form.Group>
            {errorMessage}
            <Button
              className="w-50 d-block mx-auto fs-4 fw-bold"
              variant="primary"
              type="submit"
            >
              Login
            </Button>
          </Form>
          <p className='text-center'>New to Genius car? <Link to='/register' onClick={handleReg} className='text-danger text-decoration-none pe-auto'>Please Register</Link></p>
          <SocialMedia></SocialMedia>
        </div>
        
      </div>
      
    </div>
  );
};

export default Login;
