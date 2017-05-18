import React, { Component } from 'react';
//import * as ReactBootstrap from 'react-bootstrap';
import {NavbarInstance} from './components/NavbarInstance';
import {ComplaintFormInstance} from './components/ComplaintForm';
import {ComplaintList} from './components/ComplaintList';
import {CreatingAccount} from'./components/CreatingAccount';

class App extends React.Component {
    render() {
        return (
          <div>
            <NavbarInstance/>

            <CreatingAccount/>

          </div>
        );
    }
}

export default App;
