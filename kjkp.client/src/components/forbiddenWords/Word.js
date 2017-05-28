import React from "react";
import * as ReactBootstrap from 'react-bootstrap';
import { makeCancelable } from '../../globals';
import AccountService from '../../services/AccountService';

var rb = ReactBootstrap;
var ListGroupItem = rb.ListGroupItem;
var Button = rb.Button;
var Col = rb.Col;
var Row = rb.Row;

class Word extends React.Component {

  deleteWord(Id) {

    var header = {};
    var auth = AccountService.getAuthInfo();

    if (auth != null && auth.role == 'ROLE_HR') {
      header = new Headers({
        'Content-Type': 'application/json; charset=utf8',
        'Authorization': auth.token
      });

      var req = makeCancelable(fetch('http://localhost:8080/zrijeci/delete?Id=' + Id, {
        method: 'DELETE',
        headers: header
      }));
      req.promise.then(response => response.json())
        .then(result => window.location.reload())
        .catch(error => this.setState({ errorMessage: error + "" }));
      // window.location.reload();
    }
  }

  render() {
    var authenticated = false;
    var role = "";

    var DeleteButton = <a />;

    if (AccountService.getAuthInfo() != null) {
      var auth = AccountService.getAuthInfo();

      authenticated = true;
      role = auth.role;

      if (authenticated && role == "ROLE_HR") {
        DeleteButton = <Button bsStyle="danger" onClick={this.deleteWord.bind(this, this.props.word.id)}>Delete</Button>;
      }
    }


    return (
      <ListGroupItem>
        <Row>
          <Col xs={6} md={6}>
            {this.props.word.rijec}
          </Col>
          <Col xs={6} md={6}>
            {DeleteButton}
          </Col>
        </Row>
      </ListGroupItem>
    )
  }

}

export default Word;
