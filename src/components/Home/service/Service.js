import React from 'react';
import { Link } from 'react-router-dom';
import './Service.css'

const Service = ({service}) => {
    const {img, description,price,name}=service;
    return (
        <div className=' all-service' >
           <div className=' service'>
           <img src={img} alt="" />
            <h3>Name:{name}</h3>
            <p>Price:৳{price}</p>
            <p>{description}</p>
            <Link to='/checkout' className='btn btn-link btn-primary text-white text-decoration-none fs-bold p-2'>Pick the service</Link>
           </div>
        </div>
    );
};

export default Service;