import React from "react";
import * as ReactBootstrap from 'react-bootstrap';

import { makeCancelable } from '../../globals';
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
var reqUser = "";
var currUser = "";
var currPass = "";

const wellStyles = { maxWidth: 1000, margin: '0 auto 200px' };

export class EditingAccount extends React.Component{

  constructor(props){
    super(props);
    var auth = AccountService.getAuthInfo();
    reqUser = auth.username;
    currUser = auth.username;
    currPass = auth.password;

    this.state = {
      userGET: '',
      errorMessage: null,
      reqUser: reqUser,
      currUser: currUser,
      currPass: currPass,
      emailGET: '',
      password: ''
    }
    var req=null;

    this.handleUserNameChange = this.handleUserNameChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);

    this.onLogout = this.onLogout.bind(this);
  }

  componentDidMount(){
    this.getUser();
  }

  handleUserNameChange(e) {
    this.setState({ userGET: e.target.value });
  }

  handlePasswordChange(e) {
    this.setState({ password: e.target.value });
  }

  handleEmailChange(e) {
    this.setState({ emailGET: e.target.value });
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

  handleFormSubmit(formSubmitEvent) {
    formSubmitEvent.preventDefault();

    if(this.state.password!==''){
        AccountService.editUser(this.state.userGET, this.state.emailGET, this.state.password);

        if(this.state.userGET!=this.state.currUser || this.state.password!=this.state.currPass){
          alert("Vaše pristupne informacije su promijenjene. Molimo Vas da se prijavite sa novim korisničkim informacijama.")
          this.onLogout();
        }
        else{
          alert("Vaš e-mail je promijenjen!");
        }
    }
    else{
        alert("Polje lozinke ne može biti prazno!");
    }

    console.log(this.state.currUser);


  }

  getUser(){
    this.req = makeCancelable(fetch('http://localhost:8080/korisnik/getByUsername?username=' + this.state.reqUser));
    this.req.promise.then(response => response.json())
      .then(result => this.setState( { userGET: result.username, emailGET: result.email }, () => {
    console.log(this.state.user);}))
        .catch(error => this.setState({ errorMessage: error + "" }));
  }

  render() {
    //console.log(this.state.username);
    //console.log(this.state.emailGET);
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
              <FormControl type="text" placeholder="Korisničko ime" value={this.state.userGET} onChange={this.handleUserNameChange}/>
            </Col>
          </FormGroup>

          <FormGroup controlId="enteringEmail">
            <Col componentClass={ControlLabel} sm={2}>
              Email
            </Col>
            <Col sm={4}>
              <FormControl type="email" placeholder="Email" value={this.state.emailGET} onChange={this.handleEmailChange}/>
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

}
