import React from 'react';

import '../styles/header.css';

import Logo from './slika.jpg';


export class Header extends React.Component{
  render(){
    return(
      <div>
        <div className="divich row">
          <img src={Logo} className="col-md-1 slika" />
          <h1 className="col-md-9">KJKP VIK</h1>
          <div className="col-md-2 opstiInfo">
            <button className="btn btn-default">Prijava</button>
            <button className="btn btn-default">Registracija</button>
          </div>
        </div>

      </div>
    );
  }
}
