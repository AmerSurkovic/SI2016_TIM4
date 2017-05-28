import React from "react";
import * as ReactBootstrap from "react-bootstrap";

import PollService from "../../services/PollService";
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
      text: "",
      counter: 0,
      questions: [],
      questionsText: []
    }

    this.addQuestion = this.addQuestion.bind(this);
    this.removeQuestion = this.removeQuestion.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.questionChange = this.questionChange.bind(this);
    this.textChange = this.textChange.bind(this);
  }

  addQuestion() {

    var counter = this.state.counter;
    counter++;
    this.setState({ counter: counter });

    var questions = this.state.questions;
    questions.push(<PollQuestion number={counter} key={this.state.counter} onChange={this.questionChange} />)
    this.setState({ questions: questions });

    var questionsText = this.state.questionsText;
    questionsText.push(" ");
    this.setState({ questionsText: questionsText });
  }

  removeQuestion() {
    var questions = this.state.questions;

    if (questions.length === 0) {
      return;
    }

    var counter = this.state.counter;
    var questionsText = this.state.questionsText;

    questions.splice(counter - 1, 1);
    questionsText.splice(counter - 1, 1);
    counter--;

    this.setState({ counter: counter });
    this.setState({ questions: questions });
    this.setState({ questionsText: questionsText });
  }

  questionChange(value, i) {
    var questionsText = this.state.questionsText;
    questionsText.splice(i - 1, 1, value);
    this.setState({ questionsText: questionsText });
  }

  getDate() {
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth() + 1; //January is 0!
    var yyyy = today.getFullYear();

    if (dd < 10) {
      dd = '0' + dd
    }

    if (mm < 10) {
      mm = '0' + mm
    }

    today = yyyy + '-' + mm + '-' + dd;
    return today;
  }

  getDate7() {
    var today = new Date();
    var numberOfDaysToAdd = 7;
    today.setDate(today.getDate() + numberOfDaysToAdd);
    var dd = today.getDate();
    var mm = today.getMonth() + 1; //January is 0!
    var yyyy = today.getFullYear();

    if (dd < 10) {
      dd = '0' + dd
    }

    if (mm < 10) {
      mm = '0' + mm
    }

    today = yyyy + '-' + mm + '-' + dd;
    return today;
  }

  textChange(e) {
    this.setState({ text: e.target.value });
  }

  handleFormSubmit() {

    if (this.state.questions.length === 0) {
      alert("Anketa mora imati bar jedno pitanje")
      return;
    }

    PollService.postPoll(this.state.text, this.getDate(), this.getDate7(), this.state.questionsText);

  }

  render() {

    if (AccountService.getAuthInfo() == null ||
      AccountService.getAuthInfo().role != "ROLE_ADMIN" &&
      AccountService.getAuthInfo().role != "ROLE_HR") {
      alert(AccountService.getAuthInfo().role)
      return (<div></div>);
    }

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
                    <FormControl type="text" onChange={this.textChange} />
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
