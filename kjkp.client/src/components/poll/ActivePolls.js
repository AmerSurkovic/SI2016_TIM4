import React from "react";
import * as ReactBootstrap from "react-bootstrap";
import Poll from '../poll/Poll';
import { makeCancelable } from '../../globals';


var rb = ReactBootstrap;
var ListGroup = rb.ListGroup;
var Grid = rb.Grid;
var Row = rb.Row;
var Col = rb.Col;
var Panel = rb.Panel;
var Button = rb.Button;

export class ActivePolls extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      polls: []
    }
  }

  componentDidMount() {
    this.getPolls();
  }

  getPolls() {
    this.req = makeCancelable(fetch('https://immense-chamber-20752.herokuapp.com/anketa/aktivne'));
    this.req.promise.then(response => response.json())
      .then(result => this.setState({ polls: result }))
      .catch(error => this.setState({ errorMessage: error + "" }));
  }

  render() {

    var polls = this.state.polls.map((p) => (<Poll poll={p} />));

    var ActionSection = (
        <Panel header="Pregled aktivnih anketa" bsStyle="success">
          <ListGroup>
            {polls}
          </ListGroup>
        </Panel>
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
