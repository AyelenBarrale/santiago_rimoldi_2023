import React from "react";
import {
  faBehance,
  faLinkedin,
  faVimeo,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
  return (
    <footer className='footer-container'>
      <div className='footer-item-1'>
        <h4 className='h4-text'>
          2023 | Santiago Rimoldi | All rights reserved
        </h4>
      </div>
      <nav className='footer-item'>
        <div className='footer-item-item'>
          <a
            href='https://www.behance.net/rimoldi'
            target='_blank'
            rel='noreferrer'
          >
            <FontAwesomeIcon icon={faBehance} />
          </a>
        </div>
        <div className='footer-item-item'>
          <a
            href='https://www.linkedin.com/in/rimoldi/'
            target='_blank'
            rel='noreferrer'
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </div>
        <div className='footer-item-item'>
          <a href='https://vimeo.com/rimoldi' target='_blank' rel='noreferrer'>
            <FontAwesomeIcon icon={faVimeo} />
          </a>
        </div>
        <div className='footer-item-item'>
          <a
            href='https://www.instagram.com/rimoldi.design/'
            target='_blank'
            rel='noreferrer'
          >
            <FontAwesomeIcon icon={faInstagram} />
          </a>
        </div>
      </nav>
    </footer>
  );
};

export default Footer;
