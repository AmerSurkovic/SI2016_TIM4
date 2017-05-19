import React, { Component } from 'react';
import axios from 'axios';
//import * as ReactBootstrap from 'react-bootstrap';
import {NavbarInstance} from './components/NavbarInstance';
import {ComplaintFormInstance} from './components/ComplaintForm';
import {ComplaintList} from './components/ComplaintList';

//const client = require('http://localhost:8080');

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {complaints: []};
    }

    componentDidMount(){
      /*client({method: 'GET', path: '/zalbe/prikazi_zalbe'}).done(response => {
            this.setState({complaints: response});
          });*/
      var self = this;
      axios.get({
          url: "http://localhost:8080/zalbe/prikazi_zalbe"
        }).then(function (data) {
          self.setState({complaints: data});
        });
    }

    render() {
        return (
          <div>
            <NavbarInstance/>
            <ComplaintList complaints = {this.state.complaints}/>
          </div>
        );
    }
}

export default App;
