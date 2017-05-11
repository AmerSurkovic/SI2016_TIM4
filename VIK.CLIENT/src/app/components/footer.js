import React from 'react';

const a = {
  "background-color": 'black',
  "text-align": "left",
  "color": "white",
  "opacity": "0.7",

}

const b = {
  "background-color":"black",
  "opacity": "0.7",
  "padding-top": "5px",
  "padding-bottom": "5px",
  "margin-bottom": "5px",
  "text-align": "center",
}

export class Footer extends React.Component{

  render(){
    return(
      <div style={b}>
        <div className="col-xs-offset-4 col-sm-offset-4 col-md-offset-4" style={a}>
          <h5>Kontakt telefona: {this.props.telefon}</h5>
          <h5>Email: {this.props.email}</h5>
          <h5>Adresa: {this.props.adresa}</h5>
        </div>
      </div>
    );
  }
}
