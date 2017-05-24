import React from "react";
import * as ReactBootstrap from 'react-bootstrap';

import AccountService from '../../services/AccountService';

var rb = ReactBootstrap;
var FormGroup = rb.FormGroup;
var ControlLabel = rb.ControlLabel;
var FormControl = rb.FormControl;
var div = rb.div;
var Button = rb.Button;
var Form = rb.Form;
var Col = rb.Col;
var Label = rb.Label;

const wellStyles = { maxWidth: 1000, margin: '0 auto 200px' };

export var EditingAccount = React.createClass ({

  handleUserNameChange: function (e) {
    this.setState({ username: e.target.value });
  },

  handlePasswordChange: function (e) {
    this.setState({ password: e.target.value });
  },

  handleEmailChange: function (e) {
    this.setState({ email: e.target.value });
  },

  handleFormSubmit: function (formSubmitEvent) {
    formSubmitEvent.preventDefault();

    AccountService.postUser(this.state.username, this.state.email, this.state.password);
    console.log(this.state.username);
    formSubmitEvent.target.reset();
  },

  render() {
    return (
      <div style={wellStyles} >

        <Form horizontal onSubmit={this.handleFormSubmit}>
          <FormGroup>
            <Label><b>Unesite željenu izmjenu ili više njih u odgovarajuća polja.</b></Label>
          </FormGroup>

          <FormGroup controlId="enteringUsername">
            <Col componentClass={ControlLabel} sm={2}  >
              Korisničko ime
              </Col>
            <Col sm={4}>
              <FormControl type="text" placeholder="Korisničko ime" onChange={this.handleUserNameChange}/>
            </Col>
          </FormGroup>

          <FormGroup controlId="enteringEmail">
            <Col componentClass={ControlLabel} sm={2}>
              Email
            </Col>
            <Col sm={4}>
              <FormControl type="email" placeholder="Email" onChange={this.handleEmailChange}/>
            </Col>
          </FormGroup>

          <FormGroup controlId="formHorizontalPassword">
            <Col componentClass={ControlLabel} sm={2}>
              Šifra
             </Col>
            <Col sm={4}>
              <FormControl type="password" placeholder="Šifra" onChange={this.handlePasswordChange}/>
            </Col>
          </FormGroup>

          <FormGroup>
            <Col smOffset={2} sm={10}>
              <Button type="submit">Izmjeni</Button>
            </Col>
          </FormGroup>
        </Form>

      </div>

    );
  }

})
