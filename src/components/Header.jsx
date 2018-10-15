import React from 'react';
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
// const Header = (props) => (
  <header>
    <div className="bg-info">
      <h1 className="text-center py-3">Zakaria's Portfolio</h1>

    </div>
    <Nav pills className="mb-5">
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
);
}
}

// export default Header;
