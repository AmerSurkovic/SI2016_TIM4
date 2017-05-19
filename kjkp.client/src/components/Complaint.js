import React from "react";
import * as ReactBootstrap from 'react-bootstrap';

var rb = ReactBootstrap;
var ListGroupItem = rb.ListGroupItem;

class Complaint extends React.Component{

    render(){
      return(
        <ListGroupItem>{this.props.complaint.tekst}</ListGroupItem>
      );
    }

}

export default Complaint;
