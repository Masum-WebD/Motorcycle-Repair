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
            <h3>Repairing most of</h3>
            <p>This motorbike repair experience is good</p>
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
            <h3>When i am working my center</h3>
            <p>This time i am working my center</p>
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
            <h3>Another working time others shop</h3>
            <p>
             When i am  working others shop
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default SlideShow;
