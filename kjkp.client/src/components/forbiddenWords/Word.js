import React from "react";
import * as ReactBootstrap from 'react-bootstrap';
import { makeCancelable } from '../../globals';

var rb = ReactBootstrap;
var ListGroupItem = rb.ListGroupItem;

class Word extends React.Component{

  render() {
    return(
      <ListGroupItem>
        {this.props.word.rijec}
      </ListGroupItem>
    )
  }

}

export default Word;
