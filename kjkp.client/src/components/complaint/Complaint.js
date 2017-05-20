import React from "react";
import * as ReactBootstrap from 'react-bootstrap';

var rb = ReactBootstrap;
var ListGroupItem = rb.ListGroupItem;

class Complaint extends React.Component{

    render(){
      return(
        <ListGroupItem header={this.props.complaint.korisnikID}>
        {this.props.complaint.tekst}<br/>
        <b>Datum postavljanja: {this.props.complaint.vrijemePostavljanja}</b>
        </ListGroupItem>
      );
    }

}

export default Complaint;
