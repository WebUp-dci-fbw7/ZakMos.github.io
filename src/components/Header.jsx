import React, {  Fragment } from 'react';
import { Nav, NavItem } from 'reactstrap';
import { NavHashLink as NavLink } from 'react-router-hash-link';

export default class Header extends React.Component {

render() {
  return (
    <Fragment>
      <div id="home"></div>
      <header id="main-header">
        <Nav className="nav">
          <NavItem>
            <NavLink
              className="nav-link header-home-nav"
              to="/#home"
              >Home
           </NavLink>
            </NavItem>
          <NavItem>
            <NavLink
              className="nav-link"
              to="/#about"
              >About
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className="nav-link"
              to="/#projects"
            >Projects
          </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className="nav-link"
              to="/#contact"
              >Contact
            </NavLink>
          </NavItem>
        </Nav>
      </header>
    </Fragment>
    );
  }
}
