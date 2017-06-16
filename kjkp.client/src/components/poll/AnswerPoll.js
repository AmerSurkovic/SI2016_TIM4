import React from "react";
import * as ReactBootstrap from "react-bootstrap";
import { makeCancelable } from '../../globals';
import PollService from "../../services/PollService";
import AccountService from '../../services/AccountService';

var rb = ReactBootstrap;
var Grid = rb.Grid;
var Row = rb.Row;
var Panel = rb.Panel;
var ListGroup = rb.ListGroup;
var ListGroupItem = rb.ListGroupItem;
var Col = rb.Col;
var ControlLabel = rb.ControlLabel;
var FormGroup = rb.FormGroup;
var FormControl = rb.FormControl;
var Button = rb.Button;

export class AnswerPoll extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      opis: "",
      pitanja: [],
      pitanjaIDs: [],
      odgovori: [],
      id: props.match.params.id
    }

    this.onTextChange = this.onTextChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  componentDidMount() {
    this.getQuestions();
  }

  getQuestions() {
    this.req = makeCancelable(fetch('https://immense-chamber-20752.herokuapp.com/anketa/details/' + this.state.id));
    this.req.promise.then(response => response.json())
      .then(result => this.setState({ opis: result.opis,
                                      pitanja: result.pitanjaVM,
                                      odgovori: Array.apply(null, Array(result.pitanjaVM.length)).map(function () {})
                                    }))
      .catch(error => this.setState({ errorMessage: error + "" }));
  }

  onTextChange(index, event) {
      var ans = this.state.odgovori;
      ans[index] = event.target.value;
      this.setState({
          odgovori: ans
      });
  }

  odgovoriPopunjeni() {
    for(var i = 0; i < this.state.odgovori.length; i++) {
      if(this.state.odgovori[i] === "") {
        return false;
      }
    }
    return true;
  }

  handleFormSubmit() {

      if(this.odgovoriPopunjeni()!=true) {
        alert("Morate odgovoriti na sva pitanja")
        return;
      }

      var pitanjaIDs = [];
      for(var i = 0; i < this.state.pitanja.length; i++) {
        pitanjaIDs.push(this.state.pitanja[i].id);
      }

      this.setState({ pitanjaIDs: pitanjaIDs });

      PollService.postPollAnswers(this.state.pitanjaIDs, this.state.odgovori);
      
  }

  render() {

    if(this.state.pitanja.length === 0 || this.state.opis === "") {
      return(
          <div></div>
      );
    }
    else {

      var n = this.state.odgovori.length;

      var polls = this.state.pitanja.map((p, index) => (
        <Row>
          <ListGroupItem style={{ border: 'none' }} key={index}>
            <Col md = {8}>
              {p.text}
            </Col>
            <Col md = {8} mdOffset={2}>
              <FormGroup controlId="pitanje">
                  <FormControl type="text" onChange={(e) => this.onTextChange(index, e)}/>
              </FormGroup>
            </Col>
          </ListGroupItem>
        </Row>
      ));

      var ActionSection = (
        <div>
          <Panel header={this.state.opis}>
            <ListGroup>
              {polls}
            </ListGroup>
            <Button bsStyle="success" onClick={this.handleFormSubmit}> Unesi odgovore </Button>
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
}
