import React, { Component } from 'react';
//import * as ReactBootstrap from 'react-bootstrap';
import {NavbarInstance} from './components/NavbarInstance';
import {ComplaintFormInstance} from './components/ComplaintForm';


class App extends React.Component {
    render() {
        return (
          <div>
            <NavbarInstance/>
            <ComplaintFormInstance/>
          </div>
        );
    }
}

export default App;
