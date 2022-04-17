import React from "react";
import { Carousel } from "react-bootstrap";
import './SlideShow.css'
import banner1 from "../../../image/Banner/banner1.png"
import banner2 from "../../../image/Banner/banner2.png"
import banner3 from "../../../image/Banner/banner3.png"

const SlideShow = () => {
  return (
    <div className="slide-show">
      <Carousel>
        <Carousel.Item>
          <img 
            style={{height:'500px'}}
            className="d-block w-100 "
            src={banner1}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
           style={{height:'500px'}}
            className="d-block w-100"
            src={banner2}
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            style={{height:'500px'}}
            className="d-block w-100"
            src={banner3}
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default SlideShow;
