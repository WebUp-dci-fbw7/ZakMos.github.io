import React, {  Fragment } from 'react';
import { NavLink as RRNavLink } from 'react-router-dom';
import { Nav, NavItem, NavLink, DropdownItem, DropdownToggle, Dropdown, DropdownMenu } from 'reactstrap';

import projects from '../projects.json'

export default class Header extends React.Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false
    };
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
}
render() {
  return (
    <Fragment>
      <header id="home">
        <Nav pills className="navbar navbar-dark bg-dark sticky-top navbar-fixed-top">
              <NavItem>
                <h1 className="navbar-brand nav-item wow flip" activeClassName="active" data-wow-delay="7s" data-wow-duration="2s">
              <a href="#about" class="nave-link" data-scroll="#about" tag={RRNavLink}>About</a> 
                </h1>
               </NavItem>
              <NavItem>
                <h1 className="navbar-brand wow flip" activeClassName="active" data-wow-delay="7s" data-wow-duration="2s">
              <a href="#contact" data-scroll="#contact" tag={RRNavLink}>Contact</a>
                </h1>
              </NavItem>
              <NavItem>
                <NavLink exact to="/" activeClassName="active" tag={RRNavLink}>Home</NavLink>
              </NavItem>
              <NavItem>
                <NavLink exact to="/about" activeClassName="active" tag={RRNavLink}>About</NavLink>
              </NavItem>
              <NavItem>
                <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle} >
                  <DropdownToggle nav caret>
                    Projects
                  </DropdownToggle>
                    <DropdownMenu>
                    <DropdownItem><RRNavLink exact to="/projects"> All Projects</RRNavLink></DropdownItem>
                    {projects.map((item, i) => (
                      <DropdownItem key={i}><RRNavLink exact to={`/projects/${i}`}>{item.title}</RRNavLink></DropdownItem>
                    ))}
                  </DropdownMenu>
                </Dropdown>
              </NavItem>
              <NavItem>
                <NavLink exact to="/contact" activeClassName="active" tag={RRNavLink}>Contact</NavLink>
              </NavItem>
        </Nav>
      </header>
    </Fragment>
);
}
}

// export default Header;
