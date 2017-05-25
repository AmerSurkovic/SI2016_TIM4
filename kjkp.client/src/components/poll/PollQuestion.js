import React from "react";
import * as ReactBootstrap from "react-bootstrap";

var rb = ReactBootstrap;
var Button = rb.Button;
var Form = rb.Form;
var Col = rb.Col;
var Panel = rb.Panel;
var Grid = rb.Grid;
var Row = rb.Row;
var ControlLabel = rb.ControlLabel;
var FormGroup = rb.FormGroup;
var FormControl = rb.FormControl;

export class PollQuestion extends React.Component {

    render() {
      const pollQuestion = (
        <Panel header="Pitanje" bsStyle="primary">
          <FormGroup controlId="pitanje">
            <Col md={3}>
              <ControlLabel> Pitanje: </ControlLabel>
            </Col>
            <Col md={8}>
              <FormControl type="text"/>
            </Col>
          </FormGroup>
        </Panel>
      );
      return (
        <div>
          { pollQuestion }
        </div>
      )
    }
}
