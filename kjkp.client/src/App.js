import React, { Component } from 'react';
//import * as ReactBootstrap from 'react-bootstrap';
import {NavbarInstance} from './components/NavbarInstance';
import {ComplaintFormInstance} from './components/ComplaintForm';
import {ComplaintList} from './components/ComplaintList';


class App extends React.Component {
    render() {
        return (
          <div>
            <NavbarInstance/>
            <ComplaintList/>
          </div>
        );
    }
}

export default App;
