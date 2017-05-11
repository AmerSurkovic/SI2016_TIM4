import React from 'react';


import {ListBlock} from './listblock';
import {BlockView} from './blockview';
import '../styles/obavijesti.css';



const m={
  niz: [
  {
      naziv: "naziv",
      desc:"prvi",
      lokacija:"lokacija",
      datum:"dd.mm.yyyy",
  },
  {
      naziv: "naziv",
      desc:"drugi",
      lokacija:"lokacija",
      datum:"dd.mm.yyyy",
  },
  {
      naziv: "naziv",
      desc:"treci",
      lokacija:"lokacija",
      datum:"dd.mm.yyyy",
  },
  {
      naziv: "naziv",
      desc:"cetvrti",
      lokacija:"lokacija",
      datum:"dd.mm.yyyy",
  },
  {
      naziv: "naziv",
      desc:"peti",
      lokacija:"lokacija",
      datum:"dd.mm.yyyy",
  },
  {
      naziv: "naziv",
      desc:"sesti",
      lokacija:"lokacija",
      datum:"dd.mm.yyyy",
  },
]
}



export class Obavijesti extends React.Component{


  constructor(){
    super();
    this.state={
      trenutnaObavijesti: 0,
      obavijesti: m
    };

  }

  kliknutJe(klik){
    this.setState({
      trenutnaObavijesti: klik,
    });
  }

  render(){
    let x = this.state.obavijesti.niz[this.state.trenutnaObavijesti];
    return(
      <div>
      <input type="text" className="col-md-3 oInput" />
      <h1 className="col-md-offset-1 col-md-5 oHeader">OBAVIJESTI</h1>
      <div className="row">
        <div className="col-md-5 ">
          <ListBlock dajKliknuti={(klik) => this.kliknutJe(klik)} niz={this.state.obavijesti} naziv="naziv" lijevitext="lokacija" desnitext="datum"/>
        </div>
        <div className="col-md-7 oBlockView" >
          <BlockView naziv={x.naziv} desc={x.desc}
          lokacija={x.lokacija} datum={x.datum}/>
        </div>
      </div>
      </div>
    );
  }

}
