import React from "react";
import * as ReactBootstrap from 'react-bootstrap';


import forbiddenWordService from '../../services/ForbiddenWordService';

var rb = ReactBootstrap;
var FormGroup = rb.FormGroup;
var ControlLabel = rb.ControlLabel;
var FormControl = rb.FormControl;
var Radio = rb.Radio;
var Button = rb.Button;
var Panel = rb.Panel;
var Grid = rb.Grid;
var Row = rb.Row;
var Col = rb.Col;

export var AddingWord = React.createClass({

  textChange: function (e) {
    this.setState({ message: e.target.value });
  },

  handleFormSubmit: function (formSubmitEvent) {
    formSubmitEvent.preventDefault();

    forbiddenWordService.postWord(this.state.message);
    formSubmitEvent.target.reset();
  },

  render() {
    return (
      <Grid>
        <Row className="show-grid">
          <Col md={8} mdOffset={2}>
            <Panel header="Unos zabranjene riječi" bsStyle="danger">
              <form onSubmit={this.handleFormSubmit}>

                <FormGroup controlId="formControlsTextarea">
                  <ControlLabel>Unesite zabranjenu riječ:</ControlLabel>
                  <FormControl componentClass="textarea" onChange={this.textChange} />
                </FormGroup>

                <Button>
                  Otkaži
                </Button>
                {' '}
                <Button type="submit" bsStyle="danger">
                  Unesi
                </Button>
              </form>
            </Panel>
          </Col>
        </Row>
      </Grid>

    );
  }
})
