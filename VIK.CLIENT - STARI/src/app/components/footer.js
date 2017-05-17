import React from 'react';

import '../styles/footer.css';


export class Footer extends React.Component{

  render(){
    return(
      <div className="fMainDiv">
        <div className="col-xs-offset-4 col-sm-offset-4 col-md-offset-4 fKontaktDiv">
          <h5>Kontakt telefona: {this.props.telefon}</h5>
          <h5>Email: {this.props.email}</h5>
          <h5>Adresa: {this.props.adresa}</h5>
        </div>
      </div>
    );
  }
}
