import React, { useRef } from "react";
import { Button, Form } from "react-bootstrap";
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import auth from "../../../firebase.init";
import img from "../../../image/Login/login.jpg";
import Loading from "../../RequireAuth/Loading/Loading";
import SocialMedia from "../../SocialMedia/SocialMedia";
import "./Login.css";
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
    const navigate =useNavigate()
    let location = useLocation();
    const emailRef=useRef()
    let from = location.state?.from?.pathname || "/";

    const [
      signInWithEmailAndPassword,
      user,
      loading,
      error,
    ] = useSignInWithEmailAndPassword(auth);
    const [sendPasswordResetEmail, sending, error1] = useSendPasswordResetEmail(
      auth
    );

    if(user) {
      navigate(from, { replace: true });
    }
    if(loading ||sending) {
      <Loading></Loading>
    }
    let errorMessage
    if(error ||error1) {
      errorMessage =<p style={{color:'red'}}>{error?.message}</p>
    }

    const handleEmailAndPassword=(e)=>{
      e.preventDefault()
      const email = e.target.email.value;
      const password = e.target.password.value;
      signInWithEmailAndPassword(email, password)
      // console.log(email,password);
    }

    const notify =async() =>{ 
      const email = emailRef.current.value
    if(email){
      await sendPasswordResetEmail(email);
      toast("Sent Mail");
    }
    else{
      toast('Please inter your email address')
    }
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
              <Form.Control ref={emailRef} name='email' type="email" required />
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
          <p className='text-center'>Forget Password? <button  onClick={notify} className=' btn btn-link text-danger text-decoration-none pe-auto'>Reset password</button></p>
          <SocialMedia></SocialMedia>
        </div>
       
        
      </div>
      <ToastContainer/>
    </div>
  );
};

export default Login;
