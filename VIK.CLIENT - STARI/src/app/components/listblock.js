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

    //let m =
    let niz = this.props.niz.niz;
    for(let i = 0; i<niz.length; i++) {
      let tmp = (<Block onClick={() => this.kliknutJe(i)} naziv={niz[i].naziv} lijevitext={niz[i].lijevitext} desnitext={niz[i].desnitext}/>);
      x.push(tmp);
    }

    return(
      <div className="lbDiv">
        {x}
      </div>
    );
  }
}
