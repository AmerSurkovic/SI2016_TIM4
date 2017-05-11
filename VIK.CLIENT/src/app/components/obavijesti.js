import React from 'react';


import {ListBlock} from './listblock';
import {BlockView} from './blockview';

const a={
  "border-left": "2px solid white",
}

const b={
  "text-align": "left",
  "color": "white",
  "opacity": "0.8"
}

const c={
  "margin": "25px auto auto 10px",
  "opacity": "0.8"
}

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
      <input type="text" className="col-md-3" style={c} />
      <h1 className="col-md-offset-1 col-md-5" style={b}>OBAVIJESTI</h1>
      <div className="row">
        <div className="col-md-5 ">
          <ListBlock dajKliknuti={(klik) => this.kliknutJe(klik)} niz={this.state.obavijesti} naziv="naziv" lijevitext="lokacija" desnitext="datum"/>
        </div>
        <div className="col-md-7" style={a}>
          <BlockView naziv={x.naziv} desc={x.desc}
          lokacija={x.lokacija} datum={x.datum}/>
        </div>
      </div>
      </div>
    );
  }

}
