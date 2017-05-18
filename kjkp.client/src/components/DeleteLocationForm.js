import React from "react";
import * as ReactBootstrap from 'react-bootstrap';

var rb = ReactBootstrap;
var ListGroup = rb.ListGroup;
var ListGroupItem = rb.ListGroupItem;
var Grid = rb.Grid;
var Row = rb.Row;
var Col = rb.Col;
var Panel = rb.Panel;
var Button=rb.Button;

export class DeleteLocationForm extends React.Component {
    render() {
        return (
          <Grid>
            <Row className="show-grid">
              <Col md={8} mdOffset={2}>
                <Panel header="Brisanje lokacija" bsStyle="danger">
                  <ListGroup>
                    <ListGroupItem>Lokacija 1 <Button type="submit" bsStyle="danger">Obriši</Button></ListGroupItem>
                    <ListGroupItem>Lokacija 2 <Button type="submit" bsStyle="danger">Obriši</Button></ListGroupItem>
                    <ListGroupItem>...</ListGroupItem>
                  </ListGroup>
                </Panel>
              </Col>
            </Row>
          </Grid>
        );
    }
}
