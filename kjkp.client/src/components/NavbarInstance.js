import React from "react";
import * as ReactBootstrap from 'react-bootstrap';

import { Link } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';

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

  onLogout() {
    if (AccountService.deleteAuthInfo()) {
      this.setState(this.state);
      window.location = "/login";
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
        <LinkContainer to="/login"><NavItem>Login</NavItem></LinkContainer>
        <LinkContainer to="/signup"><NavItem>Registruj se</NavItem></LinkContainer>
      </Nav>;

    var ActionSection =
      <Nav>
        <LinkContainer to="/complaintList"><NavItem>Pregled javnih zalbi</NavItem></LinkContainer>
        <NavItem>Kontakt informacije</NavItem>
      </Nav>;

    if (AccountService.getAuthInfo() != null) {
      var auth = AccountService.getAuthInfo();

      authenticated = true;
      user = auth.username;
      role = auth.role;

      AuthSection =
        <Nav pullRight>
          <NavDropdown title={"Welcome " + user}>
            <MenuItem><Link to="/account/edit">Postavke profila</Link></MenuItem>
            <MenuItem divider />
            <MenuItem onClick={this.onLogout}>Logout</MenuItem>
          </NavDropdown>
        </Nav>;

      switch (role) {
        case "ROLE_ADMIN":
          ActionSection =
            <Nav>
              <NavDropdown title="Upravljanje obavijestima">
                <MenuItem><Link to="/news/add">Kreiraj novu obavijest</Link></MenuItem>
                <MenuItem><Link to="/location/add">Dodaj novu lokaciju</Link></MenuItem>
              </NavDropdown>
              <NavDropdown title="Upravljanje anketama">
                <MenuItem>Kreiraj novu anketu</MenuItem>
                <MenuItem>Pregled aktivnih anketa</MenuItem>
              </NavDropdown>
              <NavItem>Izmjeni kontakt informacije</NavItem>
              <LinkContainer to="/complaintList"><NavItem>Pregled zalbi</NavItem></LinkContainer>

            </Nav>;
          break;
        case "ROLE_HR":
          ActionSection =
            <Nav>
              <NavDropdown title="Upravljanje anketama">
                <MenuItem>Kreiraj novu anketu</MenuItem>
                <MenuItem>Pregled popunjenih anketa</MenuItem>
              </NavDropdown>
              <NavDropdown title="Upravljanje tabelom nedozvoljenih rijeci">
                <MenuItem><Link to="/forbiddenwords/add">Dodaj nedozvoljenu rijec</Link></MenuItem>
                <MenuItem><Link to="/forbiddenwordsList">Pregled nedozvoljenih rijeci</Link></MenuItem>
              </NavDropdown>
              <LinkContainer to="/complaintList"><NavItem>Pregled zalbi</NavItem></LinkContainer>
            </Nav>;
          break;
        case "ROLE_USER":
          ActionSection =
            <Nav>
              <LinkContainer to="/complaintList"><NavItem>Pregled zalbi</NavItem></LinkContainer>
              <LinkContainer to="/complaint"><NavItem>Popuni zalbu</NavItem></LinkContainer>
              <NavDropdown title="Žalbe">
                <MenuItem><Link to="/complaint">Popuni žalbu</Link></MenuItem>
                <MenuItem><Link to="/complaintList">Pregled žalbi</Link></MenuItem>
              </NavDropdown>
              <LinkContainer to="/answerPoll">Popuni Anketu</LinkContainer>
              <NavItem>Pregled aktivnih anketa</NavItem>
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
          <Nav pullRight>
            {AuthSection}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }

}
