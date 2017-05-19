import React from "react";
import * as ReactBootstrap from 'react-bootstrap';

import { browserHistory } from 'react-router';



var rb = ReactBootstrap;
var Navbar = rb.Navbar;
var Nav = rb.Nav;
var NavItem = rb.NavItem;
var MenuItem = rb.MenuItem;
var NavDropdown = rb.NavDropdown;

export class NavbarInstance extends React.Component {


  handleLogin = () => {
    browserHistory.push('/login');
  }

  handleRegister = () => {
    browserHistory.push('/signup');
  }

  handleComplaint = () => {
    browserHistory.push('/complaint');
  }

  handleForbiddenWord = () => {
    browserHistory.push('/forbiddenwords/add')
  }

  render() {
    return (
      <Navbar inverse collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="/" >KJKP - VIK</a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav>
            <NavItem eventKey={1} href="/complaint" onClick={this.handleComplaint}> Napisi žalbu </NavItem>
            <NavItem eventKey={2} href="/forbiddenwords/add" onClick={this.handleForbiddenWord}> Dodaj zabranjenu riječ </NavItem>
            <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
              <MenuItem eventKey={3.1}>Action</MenuItem>
              <MenuItem eventKey={3.2}>Another action</MenuItem>
              <MenuItem eventKey={3.3}>Something else here</MenuItem>
              <MenuItem divider />
              <MenuItem eventKey={3.3}>Separated link</MenuItem>
            </NavDropdown>
          </Nav>
          <Nav pullRight>
            <NavItem eventKey={1} href="/login" onClick={this.handleLogin}> Prijavi se </NavItem>
            <NavItem eventKey={2} href="/signup" onClick={this.handleRegister}> Registruj se</NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }

}
