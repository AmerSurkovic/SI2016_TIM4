import React from 'react';
import ReactDOM from 'react-dom';
import './app/styles/index.css';


import {Obavijesti} from './app/components/obavijesti';
import {Zalbe} from './app/components/zalbe';
import {Header} from './app/components/header';
import {Footer} from './app/components/footer';

var ObavijestiService = require('./app/service/obavijesti.service');


const mockObavijesti={
  niz: [
  {
      naziv: "naziv",
      desc:"prvi",
      lokacija:"lokacija1",
      datum:"dd.mm.yyyy",
  },
  {
      naziv: "naziv",
      desc:"drugi",
      lokacija:"lokacija2",
      datum:"dd.mm.yyyy",
  },
  {
      naziv: "naziv",
      desc:"treci",
      lokacija:"lokacija3",
      datum:"dd.mm.yyyy",
  },
  {
      naziv: "naziv",
      desc:"cetvrti",
      lokacija:"lokacija4",
      datum:"dd.mm.yyyy",
  },
  {
      naziv: "naziv",
      desc:"peti",
      lokacija:"lokacija5",
      datum:"dd.mm.yyyy",
  },
  {
      naziv: "naziv",
      desc:"sesti",
      lokacija:"lokacija6",
      datum:"dd.mm.yyyy",
  },
]
}


const mockZalbe = {
  niz:[
    {
      korisnickoIme: "Korisnicko Ime 1",
      tekstZalbe: "Tekst zalbe 1",
      datum: "dd.mm.yyyy"
    },
    {
      korisnickoIme: "Korisnicko Ime 2",
      tekstZalbe: "Tekst zalbe 2",
      datum: "dd.mm.yyyy"
    },
    {
      korisnickoIme: "Korisnicko Ime 3",
      tekstZalbe: "Tekst zalbe 3",
      datum: "dd.mm.yyyy"
    },
    {
      korisnickoIme: "Korisnicko Ime 4",
      tekstZalbe: "Tekst zalbe 4",
      datum: "dd.mm.yyyy"
    },
    {
      korisnickoIme: "Korisnicko Ime 5",
      tekstZalbe: "Tekst zalbe 5",
      datum: "dd.mm.yyyy"
    },
    {
      korisnickoIme: "Korisnicko Ime 6",
      tekstZalbe: "Tekst zalbe 6",
      datum: "dd.mm.yyyy"
    },
  ]
}




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
        <Zalbe zalbe={mockZalbe} />
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
          <Obavijesti obavijesti={mockObavijesti}/>
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
