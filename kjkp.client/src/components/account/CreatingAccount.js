import React from "react";
import * as ReactBootstrap from 'react-bootstrap';

var rb = ReactBootstrap;
var FormGroup = rb.FormGroup;
var ControlLabel = rb.ControlLabel;
var FormControl = rb.FormControl;
var div = rb.div;
var Button = rb.Button;
var Form = rb.Form;
var Col = rb.Col;

const wellStyles = { maxWidth: 1000, margin: '0 auto 200px' };

export class CreatingAccount extends React.Component {

  render() {
    return (
      <div style={wellStyles} >

        <Form horizontal   >
          <FormGroup controlId="enteringUsername">
            <Col componentClass={ControlLabel} sm={2}  >
              Korisničko ime
              </Col>
            <Col sm={4}>
              <FormControl type="text" placeholder="Korisničko ime" />
            </Col>
          </FormGroup>

          <FormGroup controlId="enteringEmail">
            <Col componentClass={ControlLabel} sm={2}>
              Email
            </Col>
            <Col sm={4}>
              <FormControl type="email" placeholder="Email" />
            </Col>
          </FormGroup>

          <FormGroup controlId="formHorizontalPassword">
            <Col componentClass={ControlLabel} sm={2}>
              Šifra
             </Col>
            <Col sm={4}>
              <FormControl type="password" placeholder="Šifra" />
            </Col>
          </FormGroup>

          <FormGroup>
            <Col smOffset={2} sm={10}>
              <Button type="submit">Registruj se</Button>
            </Col>
          </FormGroup>
        </Form>

      </div>

    );
  }
}
