import React from "react";
import * as ReactBootstrap from 'react-bootstrap';
import { makeCancelable } from '../../globals';
import AccountService from '../../services/AccountService';

import {
  Link
} from 'react-router-dom';

var rb = ReactBootstrap;
var ListGroupItem = rb.ListGroupItem;
var Button = rb.Button;
var Col = rb.Col;

class Poll extends React.Component{

  constructor(props) {
    super(props);
    this.state = {
      user: '',
      errorMessage: null,
      id: this.props.poll.id
    }
    var req = null;
  }

  componentDidMount() {
    //this.getUser();
  }

  getUser() {
    this.req = makeCancelable(fetch('http://localhost:8080/korisnik/get?Id=' + this.props.poll.korisnikID));
    this.req.promise.then(response => response.json())
      .then(result => this.setState( { user: result.username }, () => {
  console.log(this.state.user);}))
      .catch(error => this.setState({ errorMessage: error + "" }));
  }


    formatDate(timestamp){
      //var timestamp = this.props.poll.vrijeme_deaktivacije,
      var date = new Date(timestamp),
      datevalues = [
         date.getFullYear(),
         date.getMonth()+1,
         date.getDate(),
         date.getHours(),
         date.getMinutes(),
         date.getSeconds(),
      ];
      //alert(datevalues);
      return datevalues;
    };

    deleteComplaint(Id){
      var r = fetch('http://localhost:8080/zalbe/delete?Id=' + Id , {
          method: 'DELETE',
          });
      alert("Complaint deleted!");
      window.location.reload();
    }

    render(){

      var authenticated = false;
      var role = "";

      if (AccountService.getAuthInfo() != null) {
        var auth = AccountService.getAuthInfo();

        authenticated = true;
        role = auth.role;

      }

      //var dateOfComplaint = this.formatDate();
      //var id = this.props.poll.korisnikID;
      //var user = <User userid={id}/>;


      var showQuestionsLink = "/poll/questions/" + this.state.id;
      var answerQuestionsLink = "/poll/answer/" + this.state.id;

      var endDateOfPoll = this.formatDate(this.props.poll.vrijeme_deaktivacije);
      var startDateOfPoll = this.formatDate(this.props.poll.vrijeme_aktivacije);


      return(
        <div>
          <ListGroupItem header={this.state.user}>
            <h4>{this.props.poll.opis}</h4>
            <b>Datum postavljanja: {startDateOfPoll[2]}.{startDateOfPoll[1]}.{startDateOfPoll[0]} u {startDateOfPoll[3]}h {startDateOfPoll[4]}min</b>
            <br />
            <b>Datum isteka ankete: {endDateOfPoll[2]}.{endDateOfPoll[1]}.{endDateOfPoll[0]} u {endDateOfPoll[3]}h {endDateOfPoll[4]}min</b>
            <br />
            <br />
            <Col>
              <Link to={showQuestionsLink} style={{ textDecoration: 'none' }}>
                <Button bsStyle="info"> Prikazi pitanja </Button>
              </Link>
              {' '}
              <Link to={answerQuestionsLink} style={{ textDecoration: 'none' }}>
                <Button bsStyle="success"> Popuni anketu </Button>
              </Link>
              {' '}
                <Button bsStyle="danger"> Obriši anketu </Button>
            </Col>
            <br/>
          </ListGroupItem>
        </div>

      );
    }

}

export default Poll;
