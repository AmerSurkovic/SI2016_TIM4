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

      if (AccountService.getAuthInfo() != null) {
        var auth = AccountService.getAuthInfo();

        authenticated = true;
        role = auth.role;

      }

      //var dateOfComplaint = this.formatDate();
      //var id = this.props.poll.korisnikID;
      //var user = <User userid={id}/>;


      // const MyPollQuestions = (props) => {
      //   return (
      //     <PollQuestions
      //       poll={this.toggleSidebarOn.bind(this)}
      //       {...props}
      //     />
      //   );
      // }

      var string = "/poll/questions/" + this.state.id;

      return(
        <div>
          <ListGroupItem header={this.state.user}>
            <Link to={string}> {this.props.poll.opis} </Link> <br/>
          </ListGroupItem>
        </div>

      );
    }

}

export default Poll;
