import React from 'react';
import Footer from '../../Footer/Footer';
import Services from '../Services/Services';
import SlideShow from '../SlideShow/SlideShow';

const Home = () => {
    return (
        <div>
            <SlideShow></SlideShow>
            <Services></Services>
            <Footer></Footer>
        </div>
    );
};

export default Home;