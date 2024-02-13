import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './Slider.css'
 
function Slider() {
  return (
    <div  id='acc'>
      <Carousel data-bs-theme="dark">
        <Carousel.Item>
          <img
            className="mx-auto d-block img-fluid"  
            src="1.avif"
            alt="First slide"
          />
          <Carousel.Caption>
            <h5>First slide label</h5>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="mx-auto d-block img-fluid"
            src="2.avif"
            alt="Second slide"
          />
          <Carousel.Caption>
            <h5>Second slide label</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        {/* Add other Carousel.Item components as needed */}
      </Carousel>
    </div>
  );
}
 
export default Slider;