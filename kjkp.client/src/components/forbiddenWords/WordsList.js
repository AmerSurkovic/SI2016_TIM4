import React from "react";
import * as ReactBootstrap from 'react-bootstrap';
import Word from '../forbiddenWords/Word';
import { makeCancelable } from '../../globals';


var rb = ReactBootstrap;
var ListGroup = rb.ListGroup;
var Grid = rb.Grid;
var Row = rb.Row;
var Col = rb.Col;
var Panel = rb.Panel;
var Button = rb.Button;

export class WordsList extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      words: [],
      errorMessage: null,
    }
    var req = null;
  }

  componentDidMount() {
    this.getWords();
  }

  //API Requst method
  getWords() {
    this.req = makeCancelable(fetch('http://localhost:8080/zrijeci/prikazi_rijeci'));
    this.req.promise.then(response => response.json())
      .then(result => this.setState({ words: result}))
      .catch(error => this.setState({ errorMessage: error + "" }));
  }

  render() {
    var words = this.state.words.map((w) => (<Word word={w} />));

    return (
      <Grid>
        <Row className="show-grid">
          <Col md={8} mdOffset={2}>
            <Panel header="Pregled unesenih zabrenjenih riječi" bsStyle="danger">
              <ListGroup>
                {words}
              </ListGroup>
            </Panel>
          </Col>
        </Row>
      </Grid>
    );
  }

}
