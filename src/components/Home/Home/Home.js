import React from 'react';
import Experience from '../../Experience/Experience';
import Services from '../Services/Services';
import SlideShow from '../SlideShow/SlideShow';

const Home = () => {
    return (
        <div>
            <SlideShow></SlideShow>
            <Services></Services>
            <Experience></Experience>
            
        </div>
    );
};

export default Home;