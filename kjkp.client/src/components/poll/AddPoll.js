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

    constructor(props) {
      super(props);
      this.state = {
        counter: 0,
        questions: [],
        text: ""
      }

      this.addQuestion = this.addQuestion.bind(this);
      this.removeQuestion = this.removeQuestion.bind(this);
      this.handleFormSubmit = this.handleFormSubmit.bind(this);
    }

    addQuestion() {

        var counter = this.state.counter;
        counter++;
        this.setState({ counter: counter });

        var questions = this.state.questions;
        questions.push(<PollQuestion number={counter} key={this.state.counter} onChange={this.questionChange}/>)
        this.setState({ questions: questions });
    }

    removeQuestion() {
      var questions = this.state.questions;

      if(questions.length === 0) {
        return;
      }

      var counter = this.state.counter;

      questions.splice(counter - 1, 1);
      counter--;

      this.setState({ counter: counter });
      this.setState({ questions: questions });
    }

    questionChange(value) {
      //this.setState({ text: e.target.value });
      console.log(value);
    }

    handleFormSubmit() {
      var questions = this.state.questions;

      if(questions.length === 0) {
        alert("Anketa mora imati bar jedno pitanje")
        return;
      }

      var counter = this.state.counter + 1;

      for(var i = 0; i < counter; i++) {

      }

    }

    render() {
        const form = (
            <Grid>
              <Row className="show-grid">
                <Col md={8} mdOffset={2}>
                  <Panel header="Kreiranje ankete" bsStyle="info">
                    <Form horizontal>
                      <FormGroup controlId="formHorizontalName">
                        <Col md={3}>
                          <ControlLabel> Naziv ankete: </ControlLabel>
                        </Col>
                        <Col md={8}>
                          <FormControl type="text"/>
                        </Col>
                      </FormGroup>

                      <Panel header="Pitanja" bsStyle="info">
                          <Button bsStyle="info" onClick={this.addQuestion}> Dodaj pitanje </Button>
                          {' '}
                          <Button bsStyle="danger" onClick={this.removeQuestion}> Obriši pitanje </Button>

                          <div>
                            <br />
                            {this.state.questions}
                          </div>
                      </Panel>
                      <Button bsStyle="success" onClick={this.handleFormSubmit}> Unesi anketu </Button>
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
