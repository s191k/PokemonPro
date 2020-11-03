import React from 'react';
import s from './Footer.module.scss';
import { Navbar,Nav } from 'react-bootstrap'

const Footer = () => {
  
  return (
    <>
    <div class="navbar navbar-inverse navbar-fixed-bottom">
      <div class="container">
        <div>
          <a href="???">Pokemon</a>
          <span>&copy; 2020</span>
        </div>
        <div class="ml-auto">
          <span>Powered by</span>
          <a href="???">Sank</a>
        </div>
      </div>
    </div>
    </>
  )
};

export default Footer;
