import React from 'react'
import {FaFacebookF} from 'react-icons/fa';
import {FiInstagram} from 'react-icons/fi';
import {IoLogoTwitter} from 'react-icons/io';

const Footer = () => {
  return (
    <footer>
      <a href="/#" className="footer_logo">Zakaria Molsim</a>
      <ul className="permalinks">
        <li><a href="/#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer_socials">
        <a href="https://facebook.com/Zak.Mus" target="_blank" rel="noreferrer"><FaFacebookF/></a>
        <a href="https://www.instagram.com/zaa_aak/" target="_blank" rel="noreferrer"><FiInstagram /></a>
        <a href="https://twitter.com/zakaria_m" target="_blank" rel="noreferrer"><IoLogoTwitter/></a>
      </div>

      <div className="footer_copyright">
        <small>&copy; Zakaria Moslim, All rights reserved</small>
      </div>
    </footer>
  )
}

export default Footer