import React from "react";
import Form from "../../Components/Form/Form"
import ContactTop from "./Portada_Contacto.jpg"

const Contact = () => {
  return (
    <>
      <div className='banner-about'>
        <img
          className='w-100'
          src={ContactTop}
          alt='Santiago Rimoldi, graphic designer and photoshop artist'
        />
      </div>
      <Form />
    </>
  );
};

export default Contact;
