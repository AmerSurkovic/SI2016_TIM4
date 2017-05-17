import React from 'react';

import '../styles/blockview.css';


export class BlockView extends React.Component{

  render(){
    return(
      <div className="frameStyle">
        <h3>{this.props.naziv}</h3>
        <hr className="bvHr"/>
        <h5 className="textInside">{this.props.desc}</h5>
        <br/>
        <h5 className="col-md-4">{this.props.lokacija}</h5>
        <h6 className="col-md-offset-8">{this.props.datum}</h6>
      </div>
    );
  }
}
