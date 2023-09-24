import React from "react";

const AboutItem = () => {
  return (
    <div className='about-container'>
      <div className='about-item item-1'>
        <h3 className='ab-h3-text'>About</h3>
        <h1 className='h1-text'>Santiago Rimoldi</h1>
        <div className='line'></div>
      </div>
      <div className='about-item item-description'>
        <p className='p-text'>
          Undergraduate in Graphic Design in 2013, Santiago has plenty of
          experience in several areas of computer graphics, accumulating
          functions in motion graphics, graphic design or post-production.
          <br></br>With 10 years of experience in the design area, he has also
          worked both independently, as well as in collaboration with other
          studios creating the post-production of images for the archviz and
          aircraft market, all around the world.
        </p>
      </div>
    </div>
  );
};

export default AboutItem;
