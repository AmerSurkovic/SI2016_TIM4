import React from "react";
import * as ReactBootstrap from "react-bootstrap";

var rb = ReactBootstrap;

var Col = rb.Col;
var ControlLabel = rb.ControlLabel;
var FormGroup = rb.FormGroup;
var FormControl = rb.FormControl;

export class PollQuestion extends React.Component {

    constructor(props) {
      super(props);
      this.state = {
        questionNumber: props.number,
        text: "",
      }

      this.textChange = this.textChange.bind(this);
    }

    textChange(e) {
        this.props.onChange(e.target.value, this.state.questionNumber);
        this.setState({ text: e.target.value });
    }

    getText() {
        return this.state.text;
    }

    render() {
      const pollQuestion = (
        <div>
          <FormGroup controlId="pitanje">
            <Col md={3}>
              <ControlLabel> Pitanje {this.state.questionNumber} </ControlLabel>
            </Col>
            <Col md={8}>
              <FormControl type="text" onChange={this.textChange}/>
            </Col>
          </FormGroup>
        </div>
      );
      return (
        <div>
          { pollQuestion }
        </div>
      )
    }
}
