import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'reactstrap';

const Header = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <>
    <div id="home"></div>
      <div id="main-header" >
      <Navbar dark  expand="md">
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="me-auto" navbar>
            <NavItem>
              <NavLink className="nav-link focus-in me-auto" href="/#home">Home</NavLink>
            </NavItem>
            </Nav>
            <Nav className="nav-link focus-in me-auto" navbar>
            <NavItem>
              <NavLink href="/#about focus-in">About</NavLink>
            </NavItem>
            </Nav>
            <Nav className="nav-link focus-in me-auto" navbar>
            <NavItem>
              <NavLink href="/#projects">Projects</NavLink>
            </NavItem>
            </Nav>
            <Nav className="nav-link focus-in me-auto" navbar>
            <NavItem>
              <NavLink href="/#contact">Contact</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
      </div>
    </>
  );
}

export default Header;

      // <div id="home"></div>
      // <header id="main-header">
      //   <Nav className="nav">
      //     <NavItem>
      //       <NavLink
      //         className="nav-link header-home-nav"
      //         to="/#home"
      //         >Home
      //      </NavLink>
      //       </NavItem>
      //     <NavItem>
      //       <NavLink
      //         className="nav-link"
      //         to="/#about"
      //         >About
      //       </NavLink>
      //     </NavItem>
      //     <NavItem>
      //       <NavLink
      //         className="nav-link"
      //         to="/#projects"
      //       >Projects
      //     </NavLink>
      //     </NavItem>
      //     <NavItem>
      //       <NavLink
      //         className="nav-link"
      //         to="/#contact"
      //         >Contact
      //       </NavLink>
      //     </NavItem>
      //   </Nav>

