import React from "react";
import * as ReactBootstrap from 'react-bootstrap';

var rb = ReactBootstrap;
var FormGroup = rb.FormGroup;
var ControlLabel = rb.ControlLabel;
var FormControl = rb.FormControl;
var HelpBlock = rb.HelpBlock;
var Radio = rb.Radio;
var Button = rb.Button;

const formInstance = (
  <form>
    <FormGroup controlId="formControlsTextarea">
      <ControlLabel>Unesite žalbu:</ControlLabel>
      <FormControl componentClass="textarea" placeholder="textarea" />
    </FormGroup>

    <FormGroup>
      <Radio name="radioGroup" inline>
        Privatna
      </Radio>
      {' '}
      <Radio name="radioGroup" inline>
        Javna
      </Radio>
    </FormGroup>

    <FormGroup>
      <ControlLabel>Static text</ControlLabel>
      <FormControl.Static>
        email@example.com
      </FormControl.Static>
    </FormGroup>

    <Button type="submit">
      Submit
    </Button>
  </form>
);

export class ComplaintFormInstance extends React.Component {
    render() {
        return (
          formInstance
        );
    }
}
