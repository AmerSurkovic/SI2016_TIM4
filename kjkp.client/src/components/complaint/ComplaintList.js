import React from "react";
import * as ReactBootstrap from 'react-bootstrap';
import Complaint from '../complaint/Complaint';
import { makeCancelable } from '../../globals';

import AccountService from '../../services/AccountService';

var rb = ReactBootstrap;
var ListGroup = rb.ListGroup;
var Grid = rb.Grid;
var Row = rb.Row;
var Col = rb.Col;
var Panel = rb.Panel;
var Button = rb.Button;


export class ComplaintList extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      complaints: [],
      publicComplaints: [],
      privateComplaints: [],
      errorMessage: null,
    }
    var req = null;
  }

  componentDidMount() {
    this.getComplaints();
    this.getPublicComplaints();
    this.getPrivateComplaints();
  }


  //API request method
  getComplaints() {
    this.req = makeCancelable(fetch('http://localhost:8080/zalbe/prikazi_zalbe'));
    this.req.promise.then(response => response.json())
      .then(result => this.setState({ complaints: result }))
      .catch(error => this.setState({ errorMessage: error + "" }));
  }

  //API request method for public complaints
  getPublicComplaints(){
    this.req = makeCancelable(fetch('http://localhost:8080/zalbe/prikazi_javne_zalbe'));
    this.req.promise.then(response => response.json())
      .then(result => this.setState({ publicComplaints: result }))
      .catch(error => this.setState({ errorMessage: error + "" }));
  }

  //API request method for private complaints
  getPrivateComplaints(){
    this.req = makeCancelable(fetch('http://localhost:8080/zalbe/prikazi_privatne_zalbe'));
    this.req.promise.then(response => response.json())
      .then(result => this.setState({ privateComplaints: result }))
      .catch(error => this.setState({ errorMessage: error + "" }));
  }

  render() {
    var authenticated = false;
    var user = "";
    var role = "";

    var complaints = this.state.complaints.map((comp) => (<Complaint complaint={comp} />));
    var publicComplaints = this.state.publicComplaints.map((comp) => (<Complaint complaint={comp} />));
    var privateComplaints = this.state.privateComplaints.map((comp) => (<Complaint complaint={comp} />));
    //console.log(this.state.complaints);

    var ActionSection =
      <Panel header="Pregled javnih žalbi" bsStyle="success">
        <ListGroup>
          {publicComplaints}
        </ListGroup>
      </Panel>;

    if(AccountService.getAuthInfo() != null){
      var auth = AccountService.getAuthInfo();

      authenticated=true;
      user = auth.username;
      role = auth.role;

      switch (role) {
        case "ROLE_ADMIN":
          ActionSection =
          <Panel>
              <Panel header="Pregled žalbi" bsStyle="info">
                <ListGroup>
                  {complaints}
                </ListGroup>
              </Panel>
              <Panel header="Pregled javnih žalbi" bsStyle="success">
                <ListGroup>
                  {publicComplaints}
                </ListGroup>
              </Panel>
              <Panel header="Pregled privatnih žalbi" bsStyle="danger">
                <ListGroup>
                  {privateComplaints}
                </ListGroup>
              </Panel>
            </Panel>
        break;
        case "ROLE_USER":
          ActionSection=
            <Panel header="Pregled javnih žalbi" bsStyle="success">
              <ListGroup>
                {publicComplaints}
              </ListGroup>
            </Panel>;
        break;
        case "ROLE_HR":
        ActionSection=
        <Panel>
            <Panel header="Pregled žalbi" bsStyle="info">
              <ListGroup>
                {complaints}
              </ListGroup>
            </Panel>
            <Panel header="Pregled javnih žalbi" bsStyle="success">
              <ListGroup>
                {publicComplaints}
              </ListGroup>
            </Panel>
            <Panel header="Pregled privatnih žalbi" bsStyle="danger">
              <ListGroup>
                {privateComplaints}
              </ListGroup>
            </Panel>
          </Panel>
        break;
      }
    }

    return (
      <Grid>
        <Row className="show-grid">
          <Col md={8} mdOffset={2}>
          {ActionSection}
          </Col>
        </Row>
      </Grid>
    );
    /*  <Grid>
        <Row className="show-grid">
          <Col md={8} mdOffset={2}>

            <Panel header="Pregled žalbi" bsStyle="info">
              <ListGroup>
                {complaints}
              </ListGroup>
            </Panel>
            <Panel header="Pregled javnih žalbi" bsStyle="success">
              <ListGroup>
                {publicComplaints}
              </ListGroup>
            </Panel>
            <Panel header="Pregled privatnih žalbi" bsStyle="danger">
              <ListGroup>
                {privateComplaints}
              </ListGroup>
            </Panel>
            }
          </Col>
        </Row>
      </Grid>

    );*/

  }
}
