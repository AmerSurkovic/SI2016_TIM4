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

export class ViewContactInformation extends React.Component{

  constructor(props){
      super(props);

      this.state = {
        errorMessage: null,
        phone: '',
        address: '',
        email: ''
      }
      var req=null;
  }

  componentDidMount(){
    this.getInfo();
  }

  getInfo(){
    this.req = makeCancelable(fetch('https://immense-chamber-20752.herokuapp.com/contact/get'));
    this.req.promise.then(response => response.json())
      .then(result => this.setState( { phone: result.phone, address: result.address, email: result.email }, () => {} ))
      .catch(error => this.setState({ errorMessage: error + "" }));
  }

  render(){
    return(
      <div style={wellStyles} >

      <Panel header="Kontakt informacije" bsStyle="info">

          <blockquote>
            <p>{this.state.phone}</p>
            <small>Broj telefona - <cite title="Source Title">Pozovite radnim danima od 12 do 4.</cite></small>
          </blockquote>
          <blockquote>
            <p>{this.state.address}</p>
            <small>Adresa</small>
          </blockquote>
          <blockquote>
            <p>{this.state.email}</p>
            <small>E-mail - <cite title="Source Title">Odgovaramo u roku od 5 radnih dana.</cite></small>
          </blockquote>

        </Panel>

      </div>
    );
  }

}
