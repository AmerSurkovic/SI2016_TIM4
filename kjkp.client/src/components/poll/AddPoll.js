import React from "react";
import * as ReactBootstrap from "react-bootstrap";

import AccountService from '../../services/AccountService';

import { PollQuestion } from "./PollQuestion";

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

export class AddPoll extends React.Component {

    render() {
        const form = (
            <Grid>
              <Row className="show-grid">
                <Col md={8} mdOffset={2}>
                  <Panel header="Kreiranje ankete" bsStyle="success">
                    <Form horizontal>
                      <FormGroup controlId="formHorizontalName">
                        <Col md={3}>
                          <ControlLabel> Naziv ankete: </ControlLabel>
                        </Col>
                        <Col md={8}>
                          <FormControl type="text"/>
                        </Col>
                      </FormGroup>

                      <Panel header="Pitanja" bsStyle="success">
                          <Button bsStyle="info"> Dodaj pitanje </Button>

                          <PollQuestion/>

                      </Panel>
                    </Form>
                  </Panel>
                </Col>
              </Row>
            </Grid>
        );

        return (
          <div>
            {form}
          </div>
        );
    }

}
