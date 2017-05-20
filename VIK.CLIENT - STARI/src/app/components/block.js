import React from "react";

import '../styles/block.css';

export class Block extends React.Component{

  constructor(){
    super();

    this.state={
      default_boja: true,
    }
  }

  promijeniBoju(){
    this.setState({
      default_boja: !this.state.default_boja,
    });
    this.props.onClick();
  }

  render(){
    let x = {
      "background-color": (this.state.default_boja ? "#4c98b1": "#2F3F73"),
    }
    return(
      <div className="block" style={x} onClick={() => this.promijeniBoju()}>
        <h4>{this.props.naziv}</h4>
        <hr/>
        <div className="row">
          <h5 className="col-md-4 lijevitext">{this.props.lijevitext}</h5>
          <h5 className="col-md-offset-8">{this.props.desnitext}</h5>
        </div>
      </div>
    );
  }
}
