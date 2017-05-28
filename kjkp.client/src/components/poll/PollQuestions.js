import React from "react";
import * as ReactBootstrap from 'react-bootstrap';
import { makeCancelable } from '../../globals';


var rb = ReactBootstrap;
var Panel = rb.Panel;

export class PollQuestions extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      questions: [],
      id: this.props.id
    };
  }

  getQuestions() {
    this.req = makeCancelable(fetch('http://localhost:8080/anketa/prikazipitanja'));
    this.req.promise.then(response => response.json())
      .then(result => this.setState({ questions: result }))
      .catch(error => this.setState({ errorMessage: error + "" }));
  }


  render() {
    return(
      <div>
        <Panel header="NESTOO">
        </Panel>
      </div>
    );
  }
}
