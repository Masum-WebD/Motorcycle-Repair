import React from "react";
import google from "../../image/Social/google.png";
import "./SocialMedia.css";
const SocialMedia = () => {
  return (
    <div>
      <div className="d-flex justify-content-center align-items-center">
        <div className="social-row"></div>
        <div className="mt-3 p-2">
          <p>Or</p>
        </div>
        <div className="social-row"></div>
      </div>

      <button className='btn btn-link btn-primary d-flex justify-content-center w-50 mx-auto '>
        <img src={google} alt="" />
        <p className='text-white ms-2 fw-bold'>Google sign in</p>
      </button>
    </div>
  );
};

export default SocialMedia;
