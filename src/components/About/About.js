import React from 'react';
import photo from '../../image/photo.png'
import './About.css'

const About =()=>{
    return (
        
            <div className=' row d-flex w-75 align-items-center mx-auto my-auto about-container'>
            <div className='about-img col-md-6  col-sm-12'>
                    <img style={{width:"300px"}} src={photo} alt="" />
            </div>
            <div className='about-description fw-bold fs-6 col-md-6  col-sm-12 '>
                <p>
                   Actually my dream to be a programmer.So From dreams learning programming language . I am to be a full-stack-developer. Now first complete course then jump for job as a programmer.If the job is then the job as well learning as a full-stack-developer.If you say after or before  next three month where is your position like you then I say, Established as a font-end-developer any company and continue learning process.
                </p>
            </div>
        </div>
    )
}
export default About