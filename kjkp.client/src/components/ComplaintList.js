import React from "react";
import * as ReactBootstrap from 'react-bootstrap';
import ComplaintService from '../services/ComplaintService';

var rb = ReactBootstrap;
var ListGroup = rb.ListGroup;
var ListGroupItem = rb.ListGroupItem;
var Grid = rb.Grid;
var Row = rb.Row;
var Col = rb.Col;
var Panel = rb.Panel;
var Button = rb.Button;

export var ComplaintList = React.createClass ({

    getInitialState: function () {
        return { };
    },

    handleClick: function(e) {
      var Complaints = ComplaintService.getPrivateComplaints();
    },

    render() {
        return (
          <Grid>
            <Row className="show-grid">
              <Col md={8} mdOffset={2}>
                <Panel header="Pregled žalbi" bsStyle="info">
                  <ListGroup>
                    <ListGroupItem>Item 1</ListGroupItem>
                    <ListGroupItem>Item 2</ListGroupItem>
                    <ListGroupItem>...</ListGroupItem>
                  </ListGroup>

                  <Button bsStyle="primary" onClick={this.handleClick}>Prikaži</Button>

                </Panel>
              </Col>
            </Row>
          </Grid>
        );
    }
})
