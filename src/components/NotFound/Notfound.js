import React from "react";
import notFound from "../../image/notFound.jpg";
import "./Notfound.css";

const Notfound = () => {
  return (
    <div className="d-flex ">
        <img className="w-50" src={notFound} alt="" />
        <h2 className="my-auto">Your page is not found.</h2>
    </div>
  );
};

export default Notfound;
