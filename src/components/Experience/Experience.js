import React from 'react';
import img from '../../image/Myphoto.png'
import './Experience.css'

const Experience = () => {
    return (
        <div className='container experience' id="experience ">
            <h1 className='text-center text-primary mt-5 '>My Experience</h1>
            <div className='experience-container'>
            <div className=''>
                <img src={img} alt="" />
            </div>
            <div className='w-75 '>
                <p>
                    I have been providing this service for 5 years. Many Experience for motorcycle repairing .I was training a multinational company .I can solve all the problems of motorcycle from my experience.If there is a problem with the car of the people who have taken my service, then they have to take it back to me, they have to repair it. So they come to me for repairs.
                </p>
            </div>
            </div>
        </div>
    );
};

export default Experience;