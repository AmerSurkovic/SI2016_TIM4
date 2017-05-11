import React from "react";

import {Block} from './block';

const style={
  "margin-left": "10px",
  "margin-bottom": "20px",
  "height": "475px",
  "overflow": "scroll",
}

const boja1 = {
  "background-color": "#4c98b1"
}

const boja2={
  "background-color": "#2F3F73"
}

export class ListBlock extends React.Component{

  constructor(){
    super();

    this.state={
      prethodni: 0,
    };
  }



  kliknutJe(i){

    this.props.dajKliknuti(i);
  }

  render(){
    let x = [];
    for(let i = 0; i<6; i++){
      let tmp = (<Block onClick={() => this.kliknutJe(i)} naziv={this.props.naziv} lijevitext={this.props.lijevitext} desnitext={this.props.desnitext}/>);
      x.push(tmp);
    }

    return(
      <div style={style}>
        {x}
      </div>
    );
  }
}
