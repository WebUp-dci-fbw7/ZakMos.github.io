import React from 'react';
import {BsLinkedin} from 'react-icons/bs';
import {BsGithub} from 'react-icons/bs';
import {AiOutlineCodepenCircle} from 'react-icons/ai';
import {BsInstagram} from 'react-icons/bs';

const HeaderSocials = () => {
  return (
    <div className="header_socials">
      <a href="https://www.linkedin.com/in/zakmos" rel="noreferrer" target="_blank"><BsLinkedin/></a>
      <a href="https://codepen.io/ZakMos" rel="noreferrer" target="_blank"><AiOutlineCodepenCircle /></a>
      <a href="https://github.com/ZakMos" rel="noreferrer" target="_blank"><BsGithub /></a>
      <a href="https://www.instagram.com/zaa_aak/" rel="noreferrer" target="_blank"><BsInstagram /></a>
    </div>
  )
}

export default HeaderSocials