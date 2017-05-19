import React from "react";
import * as ReactBootstrap from 'react-bootstrap';
import ComplaintService from '../services/ComplaintService';
import Complaint from '../components/Complaint';
import {makeCancelable} from '../globals'

var rb = ReactBootstrap;
var ListGroup = rb.ListGroup;
var ListGroupItem = rb.ListGroupItem;
var Grid = rb.Grid;
var Row = rb.Row;
var Col = rb.Col;
var Panel = rb.Panel;

export default class ComplaintList extends React.Component {

    constructor(props){
      super(props);
      this.state = {complaints: [],
                      errorMessage: null,
                    }
      var req = null;
    }

    componentDidMount() {
      this.getComplaints();
    }


    //API request method
    getComplaints(){
        this.req = makeCancelable(fetch('http://localhost:8080/zalbe/prikazi_zalbe'));
        this.req.promise.then(response => response.json())
          .then(result => this.setState({complaints:result}))
          .catch(error => this.setState({errorMessage:error+""}));
    }

    render() {
        var complaints = this.state.complaints.map((comp) => (<Complaint complaint = {comp}/>)  );
        console.log(this.state.complaints);
        return (
          <Grid>
            <Row className="show-grid">
              <Col md={8} mdOffset={2}>
                <Panel header="Pregled žalbi" bsStyle="info">
                  <ListGroup>
                    {complaints}
                  </ListGroup>
                </Panel>
              </Col>
            </Row>
          </Grid>

        );
    }
}
