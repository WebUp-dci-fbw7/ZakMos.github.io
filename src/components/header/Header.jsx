import React from 'react'
import CTA from './CTA';
import ME from '../../assets/zakaria.png';
import HeaderSocials from './HeaderSocials';

const Header = () => {
  return (
    <>
      <header>
        <div className="container header_container">
          <h5>Hello I'm</h5>
          <h1>Zakaria Moslim</h1>
          <h5 className="text-light">Fullstack Developer</h5>
          <CTA />
          <HeaderSocials />

          <div className="me">
            <img src={ME} alt="me" />
          </div>

          <a href="#contact" className="scroll_down">Scroll Down</a>
        </div>
      </header>
    </>
  )
}

export default Header