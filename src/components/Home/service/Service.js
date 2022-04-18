import React from 'react';
import { Link } from 'react-router-dom';
import './Service.css'

const Service = ({service}) => {
    const {img, description,price,name}=service;
    return (
        <div className=' all-service' >
           <div className=' service'>
           <img src={img} alt="" />
            <h3>{name}</h3>
            <p>{description}</p>
            <p className='fw-bold'>Price:৳{price}</p>
            <Link to='/checkout' className='btn btn-link btn-primary text-white text-decoration-none fs-bold p-2'>Pick up service</Link>
           </div>
        </div>
    );
};

export default Service;