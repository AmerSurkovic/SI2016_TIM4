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

    formatDate(){
      var timestamp = this.props.complaint.vrijemePostavljanja,
      date = new Date(timestamp),
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

      var showQuestionsLink = "/poll/questions/" + this.state.id;
      var answerQuestionsLink = "/poll/answer/" + this.state.id;
      var ActionSection = (<div></div>);


        var auth = AccountService.getAuthInfo();

        authenticated = true;
        role = auth.role;

        switch (role) {
          case "ROLE_ADMIN":
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
                <Button bsStyle="danger"> Obriši anketu </Button>
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
                  <Button bsStyle="danger"> Obriši anketu </Button>
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
              {ActionSection}
            <br/>
          </ListGroupItem>
        </div>

      );
    }

}

export default Poll;
