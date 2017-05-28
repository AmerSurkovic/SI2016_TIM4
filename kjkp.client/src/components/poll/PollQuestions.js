import React from "react";
import * as ReactBootstrap from 'react-bootstrap';
import { makeCancelable } from '../../globals';

var rb = ReactBootstrap;
var Grid = rb.Grid;
var Row = rb.Row;
var Col = rb.Col;
var Panel = rb.Panel;

export class PollQuestions extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      questions: [],
      id: props.match.params.id
    };
  }

  componentDidMount() {
    console.log('????');
    this.getQuestions();
    console.log(this.state.questions[0].id);
  }

  getQuestions() {
    this.req = makeCancelable(fetch('http://localhost:8080/anketa/prikazipitanja/' + this.state.id));
    this.req.promise.then(response => response.json())
      .then(result => this.setState({ questions: result }))
      .catch(error => this.setState({ errorMessage: error + "" }));
  }



  render() {

    var ActionSection = (
      <div>
        <Panel header={this.state.id}>
        </Panel>
      </div>
    );

    return(
      <Grid>
        <Row className="show-grid">
          <Col md={8} mdOffset={2}>
          {ActionSection}
          </Col>
        </Row>
      </Grid>
    );
  }
}
