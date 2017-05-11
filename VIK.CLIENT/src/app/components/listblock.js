import React from "react";

import {Block} from './block';
import '../styles/listblock.css';



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
      <div className="lbDiv">
        {x}
      </div>
    );
  }
}
