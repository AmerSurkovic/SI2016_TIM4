import React from 'react';

import {ListBlock} from './listblock';

import {BlockView} from './blockview';

import '../styles/zalbe.css';





export class Zalbe extends React.Component{
  constructor(props){
    super();
    this.state = {
      zalbe: props.zalbe.niz,
      trenutnaZalba: 0,
    }
  }

  kliknutJe(klik){
    this.setState({
      trenutnaZalba: klik,
    });
  }

  zaProslijedjivanjeLB(){
    let x = {
      niz: [],
    };
    for(let i = 0; i<this.state.zalbe.length; i++){
      x.niz.push({
        naziv: this.state.zalbe[i].korisnickoIme,
        lijevitext: "",
        desnitext: this.state.zalbe[i].datum,
      });
    }
    return {
      niz: x.niz,
    }
  }

  render(){
    let zaBW = this.state.zalbe[this.state.trenutnaZalba];

    let zaLB = this.zaProslijedjivanjeLB();

    return(
      <div>
      <h1 className="col-md-10 zalbeHeader" >JAVNE ZALBE</h1>

        <div className="row">
          <div className="col-md-5 ">
            <ListBlock niz={zaLB} dajKliknuti={(klik) => this.kliknutJe(klik)}/>
          </div>
          <div className="col-md-7 zalbeBW" >
            <BlockView naziv={zaBW.korisnickoIme} desc={zaBW.tekstZalbe}
            lokacija="" datum=""/>
          </div>
        </div>
      </div>
    );
  }

}
