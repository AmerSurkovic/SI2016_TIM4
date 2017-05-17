import React from 'react';


import {ListBlock} from './listblock';
import {BlockView} from './blockview';
import '../styles/obavijesti.css';







export class Obavijesti extends React.Component{


  constructor(props){
    super();
    this.state={
      trenutnaObavijesti: 0,
      obavijesti: props.obavijesti.niz,
    };

  }

  kliknutJe(klik){
    this.setState({
      trenutnaObavijesti: klik,
    });
  }

  zaProslijedjivanjeLB(){
    let x = {
      niz: [],
    };
    for(let i = 0; i<this.state.obavijesti.length; i++){
      x.niz.push({
        naziv: this.state.obavijesti[i].naziv,
        lijevitext: this.state.obavijesti[i].lokacija,
        desnitext: this.state.obavijesti[i].datum,
      });
    }
    return {
      niz: x.niz,
    };
  }

  render(){
    let x = this.state.obavijesti[this.state.trenutnaObavijesti];
    let zaLB = this.zaProslijedjivanjeLB();

    return(
      <div>
      <input type="text" className="col-md-3 oInput" />
      <h1 className="col-md-offset-1 col-md-5 oHeader">OBAVIJESTI</h1>
      <div className="row">
        <div className="col-md-5 ">
          <ListBlock dajKliknuti={(klik) => this.kliknutJe(klik)} niz={zaLB} />
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
