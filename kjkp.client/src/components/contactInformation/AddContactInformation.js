import React from "react";
import * as ReactBootstrap from 'react-bootstrap';

import ContactInfoService from '../../services/ContactInfoService';
import { makeCancelable } from '../../globals';

var rb = ReactBootstrap;
var FormGroup = rb.FormGroup;
var ControlLabel = rb.ControlLabel;
var FormControl = rb.FormControl;
var div = rb.div;
var Button = rb.Button;
var Form = rb.Form;
var Col = rb.Col;
var Label = rb.Label;
var Panel = rb.Panel;

const wellStyles = { maxWidth: 1000, margin: '0 auto 200px' };

export class AddContactInformation extends React.Component{

  constructor(props){
      super(props);

      this.state = {
        errorMessage: null,
        phone: '',
        address: '',
        email: ''
      }
      var req=null;

      this.handlePhoneChange = this.handlePhoneChange.bind(this);
      this.handleAddressChange = this.handleAddressChange.bind(this);
      this.handleEmailChange = this.handleEmailChange.bind(this);
      this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  componentDidMount(){
    this.getInfo();
  }

  handlePhoneChange(e) {
    this.setState({ phone: e.target.value });
  }

  handleAddressChange(e) {
    this.setState({ address: e.target.value });
  }

  handleEmailChange(e) {
    this.setState({ email: e.target.value });
  }

  handleFormSubmit(formSubmitEvent) {
    formSubmitEvent.preventDefault();
    ContactInfoService.postContactInfo(this.state.phone, this.state.address, this.state.email);

    formSubmitEvent.target.reset();
    alert("Svaka vam čast administratore!");
  }

  getInfo(){
    this.req = makeCancelable(fetch('http://localhost:8080/contact/get'));
    this.req.promise.then(response => response.json())
      .then(result => this.setState( { phone: result.phone, address: result.address, email: result.email }, () => {} ))
      .catch(error => this.setState({ errorMessage: error + "" }));
  }

  render(){
    return(
      <div style={wellStyles} >

      <Panel header="Unos/izmjena kontakt informacija" bsStyle="info">

        <Form horizontal onSubmit={this.handleFormSubmit}>

          <FormGroup controlId="enteringPhoneNumber">
            <Col componentClass={ControlLabel} sm={2}  >
              Broj telefona:
              </Col>
            <Col sm={4}>
              <FormControl type="text" placeholder="Broj telefona" value={this.state.phone} onChange={this.handlePhoneChange}/>
            </Col>
          </FormGroup>

          <FormGroup controlId="enteringEmail">
            <Col componentClass={ControlLabel} sm={2}>
              Email:
            </Col>
            <Col sm={4}>
              <FormControl type="email" placeholder="Email adresa" value={this.state.email} onChange={this.handleEmailChange}/>
            </Col>
          </FormGroup>

          <FormGroup controlId="enteringAddress">
            <Col componentClass={ControlLabel} sm={2}>
              Adresa kompanije:
             </Col>
            <Col sm={4}>
              <FormControl type="text" placeholder="Adresa kompanije" value={this.state.address} onChange={this.handleAddressChange}/>
            </Col>
          </FormGroup>

          <FormGroup>
            <Col smOffset={2} sm={10}>
              <Button type="submit">Unesi</Button>
            </Col>
          </FormGroup>
        </Form>

        </Panel>

      </div>
    );
  }

}
