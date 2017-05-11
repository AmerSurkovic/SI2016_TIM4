import React from 'react';
import ReactDOM from 'react-dom';
import './app/styles/index.css';


import {Obavijesti} from './app/components/obavijesti';
import {Zalbe} from './app/components/zalbe';
import {Header} from './app/components/header';
import {Footer} from './app/components/footer';

var ObavijestiService = require('./app/service/obavijesti.service');







class Home extends React.Component {

  constructor(){
    super();
    this.state={
      zalbePrikazane: false,
    };
  }

  componentDidMount(){
    /*
      Ovdje se pozivaju inicijalni get servisi;
      npr.
      ObavijestiService.getObavijesti().then((vr) =>{
        this.setState({
          zalbePrikazane: vr[0].zalbePrikazane,
        });
      });

      Ostale se pozivaju funkcijama
    */
  }

  prikaziZalbe(){
    this.setState({
      zalbePrikazane: !this.state.zalbePrikazane,
    });
  }

  render() {
    let x;
    if(this.state.zalbePrikazane){
      x = <div>
      <a onClick={()=>{
        this.prikaziZalbe();
      }}>
        <div className="divZalba">
          Sakrij zalbe
        </div>
      </a>
        <Zalbe />
        </div>;
    }else{
      x =
      <a onClick={()=>{
        this.prikaziZalbe();
      }}>
        <div className="divZalba">
          Prikazi zalbe
        </div>
      </a>;
    }

    return (
      <div className="pocetni">
        <Header />
        <br/>
          <Obavijesti />
        <br/>
          {x}
        <br/>
        <Footer adresa="Jaroslava Černija 8 Sarajevo" email="kjkpvik@gmail.com" telefon="+387 123 456"/>
      </div>
    );
  }
}

// ========================================

ReactDOM.render(
  <Home />,
  document.getElementById('root')
);
