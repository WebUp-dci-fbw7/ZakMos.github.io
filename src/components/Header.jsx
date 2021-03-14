import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap';

const Header = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  return (
    <>
    <div id="home"></div>
      <div id="main-header" >
        <Navbar dark  expand="md">
          <div className="container">
            <NavbarToggler onClick={toggle} />
            <Collapse isOpen={isOpen} navbar>
              <Nav className="me-auto" navbar>
                <NavItem>
                  <NavLink className="nav-link me-auto" href="/#home">Home</NavLink>
                </NavItem>
              </Nav>
                <Nav className="me-auto" navbar>
                <NavItem>
                  <NavLink href="/#about">About</NavLink>
                </NavItem>
              </Nav>
              <Nav className="me-auto" navbar>
                <NavItem>
                  <NavLink href="/#projects">Projects</NavLink>
                </NavItem>
              </Nav>
              <Nav className="me-auto" navbar>
                <NavItem>
                  <NavLink href="/#contact">Contact</NavLink>
                </NavItem>
              </Nav>
            </Collapse>
          </div>
        </Navbar>
      </div>
    </>
  );
}

export default Header;