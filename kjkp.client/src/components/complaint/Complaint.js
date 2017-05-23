import React from "react";
import * as ReactBootstrap from 'react-bootstrap';
import { makeCancelable } from '../../globals';
import AccountService from '../../services/AccountService';

var rb = ReactBootstrap;
var ListGroupItem = rb.ListGroupItem;
var Button = rb.Button;

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

      var DeleteButton = <a/>;

      if (AccountService.getAuthInfo() != null) {
        var auth = AccountService.getAuthInfo();

        authenticated = true;
        role = auth.role;

        if(authenticated && role == "ROLE_ADMIN"){
          DeleteButton = <Button bsStyle="danger" onClick = {this.deleteComplaint.bind(this,this.props.complaint.id)}>Delete</Button>;
        }
      }

      var dateOfComplaint = this.formatDate();
      var id = this.props.complaint.korisnikID;
      //var user = <User userid={id}/>;

      return(
        <ListGroupItem header = {this.state.user}>
        {this.props.complaint.tekst}<br/>
        <b>Datum postavljanja: {dateOfComplaint[2]}.{dateOfComplaint[1]}.{dateOfComplaint[0]} u {dateOfComplaint[3]}h {dateOfComplaint[4]}min</b>
        <br/><br/>{DeleteButton}
        </ListGroupItem>
      );
    }

}

export default Complaint;
