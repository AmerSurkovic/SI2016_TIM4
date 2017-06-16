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

    this.deletePoll = this.deletePoll.bind(this);
  }

  componentDidMount() {
    //this.getUser();
  }

// <<<<<<< HEAD
//     formatDate(){
//       var timestamp = this.props.complaint.vrijemePostavljanja,
//       date = new Date(timestamp),
// =======


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



    deletePoll(Id){
      var auth = AccountService.getAuthInfo();
      if(auth!=null){
        var header = new Headers(
          {"Authorization":auth.token}
        );
        var r = fetch('https://immense-chamber-20752.herokuapp.com/anketa/obrisianketu?Id=' + Id , {
            method: 'DELETE',
            headers: header
            });
        alert("Poll deleted!");
        window.location.reload();
      }
    }

    render(){

      var authenticated = false;
      var role = "";

      var showQuestionsLink = "/poll/questions/" + this.state.id;
      var answerQuestionsLink = "/poll/answer/" + this.state.id;
      var ActionSection = (<div></div>);
      var endDateOfPoll = this.formatDate(this.props.poll.vrijeme_deaktivacije);
      var startDateOfPoll = this.formatDate(this.props.poll.vrijeme_aktivacije);

      var auth = AccountService.getAuthInfo();

      authenticated = true;
      role = auth.role;

        switch (role) {
          case "ROLE_ADMIN":
          ActionSection = ( <Col>
            <Link to={showQuestionsLink} style={{ textDecoration: 'none' }}>
              <Button bsStyle="info"> Prikazi pitanja </Button>
            </Link>
            {' '}
            <Link to={answerQuestionsLink} style={{ textDecoration: 'none' }}>
              <Button bsStyle="success"> Popuni anketu </Button>
            </Link>
            {' '}
              <Button bsStyle="danger" onClick={this.deletePoll.bind(this,this.props.poll.id)}> Obriši anketu </Button>
          </Col>
        )
          break;
          case "ROLE_HR":
          ActionSection = (
            <Col>
              <Link to={showQuestionsLink} style={{ textDecoration: 'none' }}>
                <Button bsStyle="info"> Prikazi pitanja </Button>
              </Link>
              {' '}
              <Link to={answerQuestionsLink} style={{ textDecoration: 'none' }}>
                <Button bsStyle="success"> Popuni anketu </Button>
              </Link>
              {' '}
                <Button bsStyle="danger" onClick={this.deletePoll.bind(this,this.props.poll.id)}> Obriši anketu </Button>
            </Col>
          )
            break;
            case "ROLE_USER":
            ActionSection = (
              <Col>
                <Link to={showQuestionsLink} style={{ textDecoration: 'none' }}>
                  <Button bsStyle="info"> Prikazi pitanja </Button>
                </Link>
                {' '}
                <Link to={answerQuestionsLink} style={{ textDecoration: 'none' }}>
                  <Button bsStyle="success"> Popuni anketu </Button>
                </Link>
              </Col>
            )
              break;
        default:
      }


      return(
        <div>
          <ListGroupItem header={this.state.user}>
            {this.props.poll.opis}
            <br />
            <b>Datum postavljanja: {startDateOfPoll[2]}.{startDateOfPoll[1]}.{startDateOfPoll[0]} u {startDateOfPoll[3]}h {startDateOfPoll[4]}min</b>
            <br />
            <b>Datum isteka ankete: {endDateOfPoll[2]}.{endDateOfPoll[1]}.{endDateOfPoll[0]} u {endDateOfPoll[3]}h {endDateOfPoll[4]}min</b>
            <br />
              {ActionSection}
            <br/>
          </ListGroupItem>
        </div>

      );
    }

}

export default Poll;
