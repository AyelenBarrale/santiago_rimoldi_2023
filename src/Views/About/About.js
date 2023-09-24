import React from "react";
import AboutItem from "../../Components/AboutItem/AboutItem";

import AboutTop from "./Portada_About_Rimoldi_Design.jpg";

const About = () => {
  return (
    <>
      <div className='banner-about'>
        <img
          className='w-100'
          src={AboutTop}
          alt='Santiago Rimoldi, graphic designer and photoshop artist'
        />
      </div>
      <AboutItem />
    </>
  );
};

export default About;
