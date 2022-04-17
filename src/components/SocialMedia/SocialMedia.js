import React from "react";
import {useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from "../../firebase.init"
import google from "../../image/Social/google.png";
import { useNavigate } from 'react-router-dom';
import "./SocialMedia.css";
const SocialMedia = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  const navigate =useNavigate()
  let errorMessage 
  if(error){
   errorMessage =<p style={{color: 'red'}}>{error?.message}</p>
  }
  if(user){
    navigate('/home')
  }
  return (
    <div>
      <div className="d-flex justify-content-center align-items-center">
        <div className="social-row"></div>
        <div className="mt-3 p-2">
          <p>Or</p>
        </div>
        <div className="social-row"></div>
      </div>
      {errorMessage}
      <button onClick={()=>signInWithGoogle()} className="btn btn-link btn-primary d-flex justify-content-center w-50 mx-auto ">
        <img  src={google} alt="" />
        <p className="text-white ms-2 fw-bold">Google sign in</p>
      </button>
    </div>
  );
};

export default SocialMedia;
