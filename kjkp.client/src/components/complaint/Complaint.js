import React from "react";
import * as ReactBootstrap from 'react-bootstrap';
import User from '../account/User';
import { makeCancelable } from '../../globals';

var rb = ReactBootstrap;
var ListGroupItem = rb.ListGroupItem;

class Complaint extends React.Component{

  constructor(props) {
    super(props);
    this.state = {
      user: '',
      errorMessage: null,
    }
    var req = null;
  }

  componentDidMount() {
    this.getUser();
  }

  getUser() {
    this.req = makeCancelable(fetch('http://localhost:8080/korisnik/get?Id=' + this.props.complaint.korisnikID));
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

    render(){

      var dateOfComplaint = this.formatDate();
      var id = this.props.complaint.korisnikID;
      //var user = <User userid={id}/>;

      return(
        <ListGroupItem header = {this.state.user}>
        {this.props.complaint.tekst}<br/>
        <b>Datum postavljanja: {dateOfComplaint[2]}.{dateOfComplaint[1]}.{dateOfComplaint[0]} u {dateOfComplaint[3]}h {dateOfComplaint[4]}min</b>
        </ListGroupItem>
      );
    }

}

export default Complaint;
