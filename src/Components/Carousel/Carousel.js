/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import Carousel from 'react-bootstrap/Carousel';

import MutSlider from "./Mut_Slider.jpg";
import FaroSlider from "./Lighthouse_Slider.jpg";
import SunsraceSlider from "./Suns_Race_Slider.jpg";


const CarouselItem = () => {

  return (
    <>
      <Carousel controls={true} >
        <Carousel.Item interval={2000}>
          <img
            className='d-block w-100'
            src={FaroSlider}
            // eslint-disable-next-line
            alt="Lighthouse's Photo Manipulation Work"
          />
        </Carousel.Item>
        <Carousel.Item interval={2000}>
          <img
            className='d-block w-100'
            src={MutSlider}
            // eslint-disable-next-line
            alt="Arquitect Studio's Branding Work"
          />
        </Carousel.Item>
        <Carousel.Item interval={2000}>
          <img
            className='d-block w-100'
            src={SunsraceSlider}
            // eslint-disable-next-line
            alt="Enduro Race's Photo Manipulation Work"
          />
        </Carousel.Item>
      </Carousel>
    </>
  );
};

export default CarouselItem;
