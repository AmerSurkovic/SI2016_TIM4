import React from "react";
import * as ReactBootstrap from 'react-bootstrap';

import { Link } from 'react-router-dom';

import AccountService from '../services/AccountService';



var rb = ReactBootstrap;
var Navbar = rb.Navbar;
var Nav = rb.Nav;
var NavItem = rb.NavItem;
var MenuItem = rb.MenuItem;
var NavDropdown = rb.NavDropdown;

export class NavbarInstance extends React.Component {
  constructor(props) {
    super(props);
    this.onLogout = this.onLogout.bind(this);
  }


  // handleLogin = () => {
  //   browserHistory.push('/login');
  // }

  // handleRegister = () => {
  //   browserHistory.push('/signup');
  // }

  // handleComplaint = () => {
  //   browserHistory.push('/complaint');
  // }

  // handleForbiddenWord = () => {
  //   browserHistory.push('/forbiddenwords/add')
  // }

  onLogout() {
    if (AccountService.deleteAuthInfo()) {
      this.setState(this.state);
    }
    else {
      return;
    }
  }

  render() {

    var authenticated = false;
    var user = "";
    var role = "";

    var AuthSection =
      <Nav pullRight>
        <NavItem><Link to="/login">Prijavi se</Link></NavItem>
        <NavItem><Link to="/signup">Registruj se</Link></NavItem>
      </Nav>;

    var ActionSection =
      <Nav>
        <NavItem>Napisi zalbu</NavItem>
        <NavItem>Popuni anketu - to be implemented</NavItem>
      </Nav>;

    if (AccountService.getAuthInfo() != null) {
      var auth = AccountService.getAuthInfo();

      authenticated = true;
      user = auth.username;
      role = auth.role;

      AuthSection =
        <Nav pullRight>
          <NavDropdown title={"Welcome " + user}>
            <MenuItem divider />
            <MenuItem onClick={this.onLogout}>Logout</MenuItem>
          </NavDropdown>
        </Nav>;

      switch (role) {
        case "ROLE_ADMIN":
          ActionSection =
            <Nav>
              <NavDropdown title="Upravljanje obavijestima">
                <MenuItem>Kreiraj novu obavijest</MenuItem>
              </NavDropdown>
              <NavDropdown title="Upravljanje anketama">
                <MenuItem>Kreiraj novu anketu</MenuItem>
              </NavDropdown>
              <NavItem>Pregled zalbi</NavItem>
            </Nav>;
          break;
        case "ROLE_HR":
          ActionSection =
            <Nav>
              <NavDropdown title="Upravljanje anketama">
                <MenuItem>Kreiraj novu anketu</MenuItem>
                <MenuItem>Pregled popunjenih anketa</MenuItem>
              </NavDropdown>
              <NavItem>Pregled zalbi</NavItem>
            </Nav>;
          break;
        case "ROLE_USER":
          ActionSection =
            <Nav>
              <NavItem>Pregled zalbi</NavItem>
              <NavItem>Kontakt informacije</NavItem>
            </Nav>;
          break;
      }
    }
    return (
      <Navbar inverse collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            <Link to="/">KJKP - VIK</Link>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          {ActionSection}
          {/*<Nav>
            <NavItem eventKey={1} href="#"><Link to="/complaint">Napisi zalbu</Link></NavItem>
            <NavItem eventKey={2} href="#"><Link to="/forbiddenwords/add">Dodaj zabranjenu rijec</Link></NavItem>
            <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
              <MenuItem eventKey={3.1}>Action</MenuItem>
              <MenuItem eventKey={3.2}>Another action</MenuItem>
              <MenuItem eventKey={3.3}>Something else here</MenuItem>
              <MenuItem divider />
              <MenuItem eventKey={3.3}>Separated link</MenuItem>
            </NavDropdown>
          </Nav>*/}
          <Nav pullRight>
            {AuthSection}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }

}
